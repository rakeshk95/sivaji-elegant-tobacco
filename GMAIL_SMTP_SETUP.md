# Gmail SMTP Setup with EmailJS

## How This Works
EmailJS acts as a bridge between your frontend and your Gmail SMTP. Your SMTP credentials are stored securely on EmailJS servers, not in your frontend code.

## Step-by-Step Setup

### 1. Go to EmailJS Dashboard
- Visit [EmailJS.com](https://www.emailjs.com/)
- Log in to your account

### 2. Add Gmail Service
1. Go to **Email Services** → **Add New Service**
2. Choose **Gmail** as the service provider
3. Enter your Gmail credentials:
   - **Email**: `shivajiwebsitemail@gmail.com`
   - **Password**: Your Gmail App Password (not regular password)

### 3. Get Your Service ID
- After adding Gmail service, you'll get a **Service ID**
- This should match: `service_xyiz`

### 4. Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Subject:**
```
Contact Form: {{subject}}
```

**Content:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #333; border-bottom: 2px solid #f59e0b;">
    New Contact Form Submission
  </h2>
  
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b;">
    <h3>Message:</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <div style="background-color: #e5f3ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <p style="margin: 0; color: #0066cc;">
      <strong>Note:</strong> This email was sent from the Sivaji Enterprises website contact form.
    </p>
  </div>
</div>
```

### 5. Get Template ID
- After creating template, you'll get a **Template ID**
- This should match: `template_yclq`

### 6. Get User ID
- Go to **Account** → **General**
- Copy your **Public Key**
- This should match: `ahdp_undh`

## Gmail App Password Setup

If you don't have a Gmail App Password yet:

1. **Enable 2-Factor Authentication** on your Google Account
2. **Go to Google Account Settings** → **Security**
3. **Generate App Password**:
   - Click "App passwords"
   - Select "Mail" as the app
   - Copy the generated password
4. **Use this App Password** (not your regular Gmail password) in EmailJS

## Testing

Once set up:
1. Fill out the contact form on your website
2. Submit the form
3. Check `shivajiwebsitemail@gmail.com` for the email
4. The email will be sent using your Gmail SMTP through EmailJS

## Security Benefits

✅ **SMTP credentials are secure** - stored on EmailJS servers, not in your code
✅ **No backend required** - works directly from frontend
✅ **Rate limiting** - EmailJS provides built-in spam protection
✅ **Reliable delivery** - uses your Gmail SMTP for delivery

## Current Status

- ✅ Frontend form is ready
- ✅ EmailJS package installed
- ✅ Code configured with your IDs
- ⏳ **Next**: Set up Gmail service and template in EmailJS dashboard
