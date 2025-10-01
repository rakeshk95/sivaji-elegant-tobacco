# Email Setup Guide for Sivaji Enterprises Contact Form

## Option 1: Using EmailJS (Recommended for Frontend-only)

### Step 1: Install EmailJS
```bash
npm install emailjs-com
```

### Step 2: Get EmailJS Credentials
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create an account and verify your email
3. Create a new service (Gmail)
4. Create an email template
5. Get your Service ID, Template ID, and User ID

### Step 3: Update the Email Service
Replace the placeholder code in `src/api/emailService.ts` with:

```typescript
import emailjs from 'emailjs-com';

export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const userId = 'YOUR_USER_ID';
    
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'shivajibusiness392@gmail.com',
      },
      userId
    );
    
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
```

## Option 2: Using Backend with Nodemailer

### Step 1: Install Dependencies
```bash
npm install nodemailer
npm install @types/nodemailer
```

### Step 2: Set up Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this app password instead of your regular password

### Step 3: Create Backend API
Create a backend service (Node.js/Express) with the code from `src/api/backendEmailService.ts`

### Step 4: Update Frontend
Update `src/api/emailService.ts` to call your backend API:

```typescript
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('YOUR_BACKEND_URL/api/send-email', {
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
```

## Option 3: Using Netlify Forms (If hosting on Netlify)

### Step 1: Update Form
Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <!-- form fields -->
</form>
```

### Step 2: Add Hidden Field
```html
<input type="hidden" name="form-name" value="contact" />
<p style="display: none;">
  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
</p>
```

## Current Implementation Status

✅ **Completed:**
- Form validation and state management
- Responsive form design
- Error handling and success messages
- Loading states

⏳ **Pending:**
- Email service integration (choose one of the options above)
- SMTP configuration with your credentials

## Next Steps

1. Choose your preferred email solution (EmailJS recommended for simplicity)
2. Provide the necessary credentials/API keys
3. Update the email service with your configuration
4. Test the contact form functionality

## Security Notes

- Never commit API keys or passwords to version control
- Use environment variables for sensitive information
- Consider implementing rate limiting for the contact form
- Add CAPTCHA if needed to prevent spam
