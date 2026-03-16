import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message, preferredDate, preferredTime } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        error: 'Name and email are required'
      });
    }

    // Log the booking request
    console.log('New demo booking request:', {
      name,
      email,
      phone,
      company,
      message,
      preferredDate,
      preferredTime,
      timestamp: new Date().toISOString()
    });

    // Check if Cal.com API key is available
    const calApiKey = process.env.CAL_COM_API_KEY;
    const eventTypeId = process.env.CAL_COM_EVENT_TYPE_ID || 5048381;

    if (!calApiKey) {
      console.error('No Cal.com API key configured');
      return res.status(500).json({
        error: 'Calendar integration not configured'
      });
    }

    try {
      // Prepare the booking data for Cal.com API v2
      const startTime = preferredDate && preferredTime
        ? new Date(`${preferredDate}T${preferredTime}`)
        : new Date(Date.now() + 24 * 60 * 60 * 1000); // Default to tomorrow

      const bookingData = {
        start: startTime.toISOString(),
        eventTypeId: eventTypeId,
        attendee: {
          name: name,
          email: email,
          timeZone: 'UTC',
          language: 'en'
        },
        metadata: {
          phone: phone || '',
          company: company || '',
          message: message || '',
          source: 'hexagon-website'
        }
      };

      console.log('Attempting Cal.com booking with data:', bookingData);

      // Make API call to Cal.com to create the booking
      const calResponse = await fetch('https://api.cal.com/v2/bookings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${calApiKey}`,
          'Content-Type': 'application/json',
          'cal-api-version': '2024-08-13'
        },
        body: JSON.stringify(bookingData)
      });

      if (calResponse.ok) {
        const calData = await calResponse.json();
        console.log('Cal.com booking created successfully:', calData);

        return res.status(200).json({
          message: 'Demo booking created successfully',
          bookingId: calData.id || calData.booking?.id || 'unknown'
        });
      } else {
        const errorData = await calResponse.text();
        console.error('Cal.com API error:', calResponse.status, errorData);

        return res.status(500).json({
          error: 'Failed to create calendar booking',
          details: `Cal.com API returned ${calResponse.status}: ${errorData}`
        });
      }

    } catch (calError) {
      console.error('Cal.com booking failed:', calError);

      return res.status(500).json({
        error: 'Calendar booking service temporarily unavailable',
        details: calError.message
      });
    }

  } catch (error) {
    console.error('Demo booking error:', error);
    res.status(500).json({
      error: 'Failed to submit demo booking'
    });
  }
};

export default handler;
