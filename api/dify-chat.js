export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query, conversationId } = req.body || {};
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid `query`' });
  }

 
  const apiKey = process.env.DIFY_API_KEY ;
  const baseUrl = process.env.DIFY_BASE_URL;

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

  const payload = {
    inputs: {},
    query,
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

    // If the app is a "Completion" app, /chat-messages can return 404.
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
    answer: typeof answer === 'string' && answer.trim() ? answer : "Sorry—I didn't get a response. Please try again.",
    conversationId: nextConversationId,
  });
}
