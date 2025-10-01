// Email service for sending contact form emails using EmailJS
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// EmailJS configuration - This connects to your Gmail SMTP
const EMAILJS_CONFIG = {
  serviceId: 'service_hljn15i', // Your EmailJS service connected to Gmail SMTP
  templateId: 'template_zve799k', // Your email template
  userId: 'jPZ_unrUx5cVeiYMw', // Your EmailJS Public Key
  toEmail: 'shivajibusiness392@gmail.com' // Your business email address
};

// Using EmailJS (client-side email service)
export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Dynamic import to avoid SSR issues
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: EMAILJS_CONFIG.toEmail,
      reply_to: formData.email,
    };
    
    console.log('Sending email with params:', templateParams);
    console.log('EmailJS Config:', EMAILJS_CONFIG);
    
    const result = await emailjs.default.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.userId
    );
    
    console.log('Email sent successfully:', result);
    return {
      success: true,
      message: 'Email sent successfully! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    };
  }
};

// Fallback method for backend API (if needed)
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    };
  }
};
