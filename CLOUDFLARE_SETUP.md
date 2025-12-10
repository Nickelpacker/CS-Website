# Cloudflare Pages Deployment Guide

## Quick Setup for Cloudflare Pages

Since you're using Cloudflare and don't have a domain, Cloudflare Pages will give you a free subdomain like `your-site.pages.dev`.

## Step 1: Prepare Your Files

Make sure your website works locally first:
- ✅ All files are in your project folder
- ✅ Website works on `http://localhost:8000`
- ✅ Contact form is configured

## Step 2: Create GitHub Repository (Recommended)

Cloudflare Pages works best with GitHub. If you don't have GitHub set up:

### Option A: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [https://github.com](https://github.com)
   - Sign up or log in

2. **Create new repository:**
   - Click "+" → "New repository"
   - Name it (e.g., `unionville-landscaping`)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have files)
   - Click "Create repository"

3. **Upload your files:**
   ```bash
   # In your project folder, run:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Or use GitHub Desktop (easier):
   - Download GitHub Desktop
   - File → Add Local Repository
   - Select your project folder
   - Commit and push

### Option B: Use Cloudflare's Direct Upload

If you don't want to use GitHub, you can upload directly (but updates are manual).

## Step 3: Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard:**
   - Visit [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
   - Log in to your account

2. **Navigate to Pages:**
   - In the left sidebar, click **"Workers & Pages"**
   - Click **"Create application"**
   - Click **"Pages"** tab
   - Click **"Connect to Git"** (or "Upload assets" if not using Git)

3. **Connect GitHub (if using Git):**
   - Click "Connect to Git"
   - Authorize Cloudflare to access GitHub
   - Select your repository
   - Click "Begin setup"

4. **Configure Build Settings:**
   - **Project name**: `unionville-landscaping` (or your choice)
   - **Production branch**: `main` (or `master`)
   - **Build command**: Leave empty (static site, no build needed)
   - **Build output directory**: `/` (root directory)
   - Click **"Save and Deploy"**

5. **Wait for Deployment:**
   - Cloudflare will build and deploy your site
   - Takes 1-2 minutes
   - You'll see progress in the dashboard

6. **Get Your URL:**
   - After deployment, you'll get a URL like:
   - `https://unionville-landscaping.pages.dev`
   - Or `https://your-project-name.pages.dev`

## Step 4: Update EmailJS Domains

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Services** → Your service
3. Click **Edit**
4. In **Allowed Domains** or **Settings**, add:
   - `your-project-name.pages.dev`
   - Or the full URL Cloudflare gave you
5. Save

## Step 5: Update reCAPTCHA Domains

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Select your reCAPTCHA site
3. Click **Settings** (gear icon)
4. Under **Domains**, add:
   - `your-project-name.pages.dev`
   - Or `*.pages.dev` (allows all Cloudflare Pages subdomains)
5. Save

## Step 6: Test Your Site

1. Visit your Cloudflare Pages URL
2. Test the contact form
3. Test reCAPTCHA
4. Test email sending
5. Test on mobile device

## Updating Your Site

### If Using GitHub:
1. Make changes to your files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Cloudflare automatically redeploys (takes 1-2 minutes)

### If Using Direct Upload:
1. Go to Cloudflare Pages dashboard
2. Click "Upload assets"
3. Upload your updated files
4. Wait for deployment

## Customizing Your URL

Cloudflare Pages allows you to customize your subdomain:

1. Go to Cloudflare Pages dashboard
2. Click on your project
3. Go to **"Custom domains"**
4. You can change the subdomain part (if available)
5. Or add a custom domain later if you buy one

## Troubleshooting

### Site Not Loading:
- Check build logs in Cloudflare dashboard
- Make sure `index.html` is in the root directory
- Verify all file paths are correct

### Contact Form Not Working:
- Check browser console (F12) for errors
- Verify EmailJS domain is added
- Verify reCAPTCHA domain is added
- Check EmailJS/reCAPTCHA credentials

### 404 Errors:
- Make sure all file paths are relative (not absolute)
- Check that CSS/JS files are in correct locations
- Verify file names match exactly (case-sensitive)

## Your Free URL

After deployment, your site will be accessible at:
- `https://your-project-name.pages.dev`

This URL is:
- ✅ Free forever
- ✅ HTTPS enabled automatically
- ✅ Fast (Cloudflare CDN)
- ✅ Accessible worldwide

## Next Steps

1. Deploy to Cloudflare Pages
2. Update EmailJS with your new domain
3. Update reCAPTCHA with your new domain
4. Test everything
5. Share your URL!

## Need Help?

If you run into issues:
- Check Cloudflare Pages documentation
- Check build logs in dashboard
- Verify all configurations are correct
- Test locally first before deploying

Good luck with your deployment! 🚀

