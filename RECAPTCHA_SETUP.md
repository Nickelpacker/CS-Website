# reCAPTCHA Setup Guide

This guide will help you set up Google reCAPTCHA v2 for your contact form to prevent spam submissions.

## Step 1: Get Your reCAPTCHA Site Key

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"+"** (Create) to add a new site
3. Fill in the form:
   - **Label**: Unionville Landscaping Website (or any name you prefer)
   - **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
   - **Domains**: Add your domain(s):
     - `localhost` (for testing)
     - `yourdomain.com` (your actual domain)
     - `www.yourdomain.com` (if you use www)
   - Accept the reCAPTCHA Terms of Service
4. Click **Submit**
5. You'll see two keys:
   - **Site Key** (this is what you need - it's safe to use in client-side code)
   - **Secret Key** (keep this private - you won't need it for this setup)

## Step 2: Update Your Website

1. Open `index.html` in your code editor
2. Find this line:
   ```html
   <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" ...>
   ```
3. Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual Site Key from Step 1
   ```html
   <div class="g-recaptcha" data-sitekey="6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ...>
   ```

4. Open `js/recaptcha.js` in your code editor
5. Find this line (near the top):
   ```javascript
   const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';
   ```
6. Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual Site Key:
   ```javascript
   const RECAPTCHA_SITE_KEY = '6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
   ```

## Step 3: Test Your Form

1. Refresh your website
2. Fill out the contact form
3. You should see the reCAPTCHA checkbox appear above the "Send Message" button
4. The "Send Message" button will be **disabled** until you complete the reCAPTCHA
5. Once you check the reCAPTCHA box, the button will become enabled
6. Submit the form - it should work normally

## How It Works

- **Before reCAPTCHA**: The submit button is disabled
- **After reCAPTCHA**: The submit button becomes enabled
- **On form submit**: The code verifies reCAPTCHA was completed
- **On error**: reCAPTCHA resets and button disables again
- **On success**: reCAPTCHA resets for the next submission

## Troubleshooting

- **reCAPTCHA not showing**: 
  - Make sure you added `localhost` to your reCAPTCHA domains (for testing)
  - Check that the Site Key is correct in both `index.html` and `js/recaptcha.js`
  - Check browser console for errors

- **Button stays disabled**:
  - Make sure you completed the reCAPTCHA checkbox
  - Check browser console for JavaScript errors

- **"Invalid site key" error**:
  - Verify the Site Key is correct
  - Make sure your domain is added to the reCAPTCHA configuration

## Notes

- The Site Key is safe to use in client-side code (it's public)
- reCAPTCHA v2 is free for most websites
- For production, make sure to add your actual domain to the reCAPTCHA configuration
- The reCAPTCHA will automatically reset after each submission or error

