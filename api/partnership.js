import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { 
    firstName, 
    lastName, 
    email, 
    organizationName, 
    websiteUrl, 
    businessType, 
    interestArea, 
    businessDetails, 
    partnershipReason, 
    estimatedReach, 
    country 
  } = req.body;

  if (!firstName || !lastName || !email || !organizationName || !businessType) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'mahamrana590@gmail.com', // Use env var for recipient
      subject: `New Partnership Program Application from ${firstName} ${lastName}`,
      html: `
        <h2>New Partnership Program Application</h2>
        <h3>Applicant Info</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${req.body.phone || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        
        <h3>Business Details</h3>
        <p><strong>Organization Name:</strong> ${organizationName}</p>
        <p><strong>Website URL:</strong> ${websiteUrl || 'N/A'}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Interest Area:</strong> ${interestArea || 'N/A'}</p>
        <p><strong>Estimated Monthly Reach:</strong> ${estimatedReach || 'N/A'}</p>
        
        <h3>Additional Information</h3>
        <p><strong>Details about business:</strong><br/>${businessDetails ? businessDetails.replace(/\n/g, '<br/>') : 'N/A'}</p>
        <p><strong>Reason for partnership:</strong><br/>${partnershipReason ? partnershipReason.replace(/\n/g, '<br/>') : 'N/A'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Partnership application sent successfully' });
  } catch (error) {
    console.error('Error sending partnership email:', error);
    res.status(500).json({ message: 'Failed to send application' });
  }
}
