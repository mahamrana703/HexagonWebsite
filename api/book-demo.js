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

    // Create transporter for email
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      New Demo Booking Request

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Preferred Date: ${preferredDate || 'Not specified'}
      Preferred Time: ${preferredTime || 'Not specified'}

      Message:
      ${message || 'No message provided'}

      ---
      This booking was submitted from the Hexagon website.
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Demo Booking from ${name}`,
      text: emailContent,
    });

    // Optional: Also create Cal.com booking if API key is available
    if (process.env.CAL_COM_API_KEY) {
      try {
        // Here you would integrate with Cal.com API
        // For now, we'll just send the email
        console.log('Cal.com API integration would go here');
      } catch (calError) {
        console.error('Cal.com booking failed:', calError);
        // Don't fail the whole request if Cal.com fails
      }
    }

    res.status(200).json({
      message: 'Demo booking submitted successfully'
    });

  } catch (error) {
    console.error('Demo booking error:', error);
    res.status(500).json({
      error: 'Failed to submit demo booking'
    });
  }
};

export default handler;
