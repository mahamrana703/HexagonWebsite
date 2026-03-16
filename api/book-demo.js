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
    const calApiKey = process.env.CAL_COM_API_KEY || 'cal_live_7560c9af475a3479f2f6880a32ea3156';

    if (calApiKey) {
      try {
        // Prepare the booking data for Cal.com API
        const bookingData = {
          eventTypeId: 1, // You'll need to replace this with your actual event type ID
          name: name,
          email: email,
          start: preferredDate && preferredTime
            ? new Date(`${preferredDate}T${preferredTime}`).toISOString()
            : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Default to tomorrow if no date/time provided
          timeZone: 'UTC', // Adjust timezone as needed
          language: 'en',
          metadata: {
            phone: phone || '',
            company: company || '',
            message: message || '',
            source: 'hexagon-website'
          }
        };

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
            bookingId: calData.booking?.id || 'unknown'
          });
        } else {
          const errorData = await calResponse.text();
          console.error('Cal.com API error:', calResponse.status, errorData);

          // Still return success to user, but log the error
          return res.status(200).json({
            message: 'Demo booking submitted successfully (Cal.com integration pending setup)',
            note: 'Booking request logged, but Cal.com integration needs configuration'
          });
        }

      } catch (calError) {
        console.error('Cal.com booking failed:', calError);

        // Return success anyway since the request was valid
        return res.status(200).json({
          message: 'Demo booking submitted successfully',
          note: 'Cal.com integration temporarily unavailable'
        });
      }
    } else {
      // No API key, just log and return success
      console.log('No Cal.com API key configured, booking logged only');

      return res.status(200).json({
        message: 'Demo booking submitted successfully (Cal.com integration pending setup)'
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
