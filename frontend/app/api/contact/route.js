import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, title, description } = await req.json();

  if (!email || !title || !description) {
    return new Response('All fields are required', { status: 400 });
  }

  try {
    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.co.uk', 
      port: 465, // Use port 465 for SSL
      secure: true, // Set to true to use SSL
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });

    // Setup email options
    const mailOptions = {
      from: process.env.EMAIL_USER,  
      replyTo: email,  // The user's email address
      to: process.env.EMAIL_TO,  // Destination email address
      subject: title,
      text: description,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}