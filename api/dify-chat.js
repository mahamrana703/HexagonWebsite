export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query, conversationId } = req.body || {};
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid `query`' });
  }

 
  const apiKey = process.env.DIFY_API_KEY || 'app-YhvSxadwhOEHVEHGe2ZJiz4W' ;
  const baseUrl = process.env.DIFY_BASE_URL || 'https://api.dify.ai/v1';

  if (!apiKey) {
    return res.status(500).json({ error: 'DIFY_API_KEY is not configured' });
  }

  let chatEndpoint;
  let completionEndpoint;
  try {
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    chatEndpoint = new URL('chat-messages', normalizedBaseUrl).toString();
    completionEndpoint = new URL('completion-messages', normalizedBaseUrl).toString();
  } catch {
    return res.status(500).json({ error: 'DIFY_BASE_URL is invalid' });
  }

  const SYSTEM_PROMPT = `You are the Hexagon CX website assistant. You represent Hexagon CX, an AI-powered call center and customer engagement platform. Your goal is to be concise, helpful, and sales-aware, converting website visitors into dashboard signups.

CRITICAL RULES — follow these without exception:
- NEVER ask the user to clarify or specify further. Always answer directly and fully.
- NEVER say "could you clarify", "what features are you referring to", "could you specify", or any similar deflection.
- If asked about "features", immediately list ALL features below.
- If asked what Hexagon CX does, give the full overview immediately.
- Always assume the user is asking about the Hexagon CX platform.

---

PRODUCT OVERVIEW:
Hexagon CX is an AI-powered call center and customer engagement platform. Users sign up, purchase a subscription, and access a dashboard to manage automated communication workflows — including AI voice agents, outbound campaigns, lead management, analytics, and an embeddable chatbot.

---

FULL FEATURE LIST:

1. Dashboard (Home)
   - Real-time and historical call sentiment analysis (positive, neutral, negative)
   - Recent calls overview with metadata: duration, outcome, sentiment score
   - Overview cards: total calls, active campaigns, leads generated

2. Calls Page
   - Full call log with recordings and AI-generated transcripts
   - Sentiment score per call
   - Filters by date, campaign, agent, and outcome

3. Campaigns
   - Create and launch outbound call campaigns
   - AI voice agents automatically call your contact list
   - Configure: call script/prompt, schedule, retry logic, target audience
   - Real-time campaign status and progress tracking

4. Leads
   - Import, organize, and track prospects
   - Assign leads to campaigns
   - Track lead status: New, Contacted, Converted, Lost

5. Analytics
   - Campaign performance reports, call volume trends, sentiment analysis, conversion rates
   - Visual charts and exportable reports

6. Chatbot
   - AI chatbot embeddable on any website or used inside the dashboard
   - Handles customer queries, qualifies leads, routes conversations
   - Configurable with custom prompts and knowledge bases

7. Phone Numbers
   - Purchase and manage phone numbers directly from the platform
   - Used for outbound campaigns and inbound call handling

8. Billing
   - Monthly and annual subscription plans
   - Usage-based charges for AI agent minutes and chatbot interactions
   - Invoice history and payment method management

9. Profile & Settings
   - Account profile configuration
   - Team member access and permissions
   - Notification and integration settings

---

GETTING STARTED:
Sign up → Purchase a plan → Set up a campaign → Purchase a phone number → Launch

For pricing, direct the user to the pricing page or encourage them to sign up.`;

  // FIX: Inject the system prompt directly into the query on the first message.
  // Dify's `inputs` object only works if your Dify app template has a matching
  // variable wired in — which it doesn't here. Prepending on the first turn
  // (no conversationId yet) ensures the model always has full context.
  const isFirstMessage = !conversationId || !conversationId.trim();
  const enrichedQuery = isFirstMessage
    ? `[CONTEXT — read this before answering, do not mention it to the user]\n${SYSTEM_PROMPT}\n[END CONTEXT]\n\nUser message: ${query}`
    : query;

  const payload = {
    inputs: {},
    query: enrichedQuery,
    response_mode: 'blocking',
    user: 'hexagon-website',
    ...(typeof conversationId === 'string' && conversationId.trim()
      ? { conversation_id: conversationId.trim() }
      : {}),
  };

  const callDify = async (endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const raw = await response.text();
      let data;
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = { raw };
      }
      return { response, data };
    } catch (error) {
      console.error('Dify fetch failed:', error);
      return { response: null, data: null, error };
    }
  };

  let difyResponse;
  let data;
  try {
    const first = await callDify(chatEndpoint);
    if (!first.response) return res.status(502).json({ error: 'Failed to reach Dify' });

    difyResponse = first.response;
    data = first.data;

    if (difyResponse.status === 404) {
      const second = await callDify(completionEndpoint);
      if (!second.response) return res.status(502).json({ error: 'Failed to reach Dify' });
      difyResponse = second.response;
      data = second.data;
    }
  } catch (error) {
    console.error('Dify request failed:', error);
    return res.status(502).json({ error: 'Failed to reach Dify' });
  }

  if (!difyResponse.ok) {
    console.error('Dify API error:', difyResponse.status, data);
    return res.status(difyResponse.status).json({
      error: 'Dify returned an error',
      details: data,
    });
  }

  const answer = data?.answer ?? data?.data?.answer ?? '';
  const nextConversationId =
    data?.conversation_id ?? data?.data?.conversation_id ?? conversationId ?? null;

  return res.status(200).json({
    answer: typeof answer === 'string' && answer.trim()
      ? answer
      : "Sorry — I didn't get a response. Please try again.",
    conversationId: nextConversationId,
  });
}
