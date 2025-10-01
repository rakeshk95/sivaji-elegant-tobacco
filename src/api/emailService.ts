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
  serviceId: 'service_xyiz', // Your EmailJS service connected to Gmail SMTP
  templateId: 'template_yclq', // Your email template
  userId: 'ahdp_undh', // Your EmailJS user ID
  toEmail: 'shivajiwebsitemail@gmail.com' // Your Gmail address
};

// Using EmailJS (client-side email service)
export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Dynamic import to avoid SSR issues
    const emailjs = await import('@emailjs/browser');
    
    const result = await emailjs.default.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.toEmail,
        reply_to: formData.email,
      },
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
