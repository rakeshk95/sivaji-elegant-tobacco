// Backend API endpoint for sending emails
// This would typically be in a separate backend service (Node.js/Express)

import nodemailer from 'nodemailer';

// Email configuration - you'll need to provide these details
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com', // or your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'shivajibusiness392@gmail.com', // your email
    pass: 'YOUR_APP_PASSWORD', // your app password (not regular password)
  },
};

// Create transporter
const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

export const sendContactEmail = async (formData: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    // Email content
    const mailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: 'shivajibusiness392@gmail.com',
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #666; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background-color: #e5f3ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              <strong>Note:</strong> This email was sent from the Sivaji Enterprises website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message,
    };
  }
};

// Express.js route handler example
export const contactFormHandler = async (req: any, res: any) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;
    
    // Validate required fields
    if (!fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      });
    }
    
    // Send email
    const result = await sendContactEmail({
      fullName,
      email,
      phone,
      subject,
      message,
    });
    
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
