# EmailJS Setup Guide

This guide will help you configure EmailJS so your contact form can send emails.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Log in to your EmailJS dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.) or use "Custom SMTP Server"
5. Follow the setup instructions for your chosen provider
6. **Save your Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Set up your template with these variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{phone}}` - The sender's phone (optional)
   - `{{message}}` - The message content
   - `{{to_name}}` - Your business name

   Example template:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   You have received a new message from your website contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   ```

5. In the template settings, configure:
   - **To Email**: `unionvillelandscaping@gmail.com` ⚠️ **CRITICAL: This must be set!** (this is where you'll receive messages - use the actual email address, NOT a variable)
   - **From Name**: `Unionville Landscaping` or `Unionville Landscaping Contact Form` (this is what appears as the sender name in your email client)
   - **From Email**: This should match the email address you configured in your Email Service (usually your business email)
   - **Reply To**: `{{from_email}}` (this allows you to reply directly to the customer)
   
   **⚠️ IMPORTANT**: The "To Email" field MUST be set to a real email address (`unionvillelandscaping@gmail.com`). If it's empty, you'll get a 422 error saying "The recipients address is empty".
   
   **Note**: The "From Name" in the template settings is different from `{{from_name}}` in the template body:
   - **From Name** (template settings) = Your business name (appears as sender)
   - **{{from_name}}** (in template body) = The customer's name (from the form)

6. Click **Save**
7. **Save your Template ID** - you'll need this later (this is your main template ID)

## Step 3b: Create Auto-Reply Template (Optional but Recommended)

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Name it "Auto-Reply" or "Customer Confirmation"
4. Set up your auto-reply template:
   ```
   Subject: Thank you for contacting Unionville Landscaping!
   
   Dear {{to_name}},
   
   Thank you for reaching out to Unionville Landscaping! We have received your message and will get back to you as soon as possible.
   
   We typically respond within 24-48 hours during business days.
   
   Best regards,
   The Unionville Landscaping Team
   ```
   
   **Important**: Make sure you use `{{to_name}}` (not `{{from_name}}` or `{{name}}`) in your template. The code sends the customer's name as `to_name` in the auto-reply.

5. In the template settings, configure:
   - **To Email**: `{{to_email}}` ⚠️ **CRITICAL: Must use this variable!** (this will be the customer's email from the form - EmailJS will replace this with the actual email address)
   - **From Name**: `Unionville Landscaping`
   - **From Email**: Your business email (unionvillelandscaping@gmail.com or the one configured in your Email Service)
   - **Reply To**: Leave empty or set to your business email
   
   **⚠️ IMPORTANT**: The "To Email" field MUST be set to `{{to_email}}` (with the curly braces). This tells EmailJS to use the customer's email address from the form. If it's empty, you'll get a 422 error.

6. Click **Save**
7. **Save your Auto-Reply Template ID** - you'll need this for main.js

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find your **Public Key** (also called API Key)
3. **Copy your Public Key** - you'll need this later

## Step 5: Update email.js

1. Open `js/email.js` in your code editor
2. Find these lines near the top:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_uxbu2vv';
   const EMAILJS_TEMPLATE_ID = 'template_rcagyar'; // Template for sending to unionvillelandscaping@gmail.com
   const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'YOUR_AUTOREPLY_TEMPLATE_ID'; // Template for auto-reply to customer
   const EMAILJS_PUBLIC_KEY = 'q4xfxeqEK1FaBsBEA';
   ```

3. Replace `YOUR_AUTOREPLY_TEMPLATE_ID` with your auto-reply template ID (if you created one):
   ```javascript
   const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_xxxxxxxxx'; // Replace with your auto-reply template ID
   ```

   **Note**: If you don't want auto-replies, you can leave it as `'YOUR_AUTOREPLY_TEMPLATE_ID'` and the system will skip sending auto-replies. The main email to unionvillelandscaping@gmail.com will still work.

4. Verify that `BUSINESS_EMAIL` is set to `'unionvillelandscaping@gmail.com'` (this should already be set)

5. Save the file

## Step 6: Test Your Form

1. Open your website in a browser
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox for the message

## Troubleshooting

- **"Email service is not configured"**: Make sure you've replaced all three placeholder values in `js/email.js`
- **"EmailJS Error"**: Check the browser console (F12) for detailed error messages
- **Emails not arriving**: 
  - Check your spam folder
  - Verify your email service is properly connected in EmailJS dashboard
  - Make sure your template's "To Email" field is correct

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For more emails or features, consider upgrading to a paid plan.

## Security Note

The Public Key is safe to use in client-side code. However, for production websites, consider:
- Using environment variables
- Implementing rate limiting
- Adding CAPTCHA to prevent spam

