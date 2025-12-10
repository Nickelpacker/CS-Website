# Website Deployment Guide

## Current Situation

Your website is currently running **locally** on `http://localhost:8000`, which means:
- ❌ Only accessible on your computer
- ❌ Not accessible to others on the internet
- ❌ Not accessible on mobile devices (unless on same network)

## Solution: Deploy to a Hosting Service

You need to deploy your website to a hosting service that makes it accessible worldwide.

## Recommended Free Hosting Options

### Option 1: Netlify (Easiest - Recommended)

**Pros:**
- ✅ Free forever
- ✅ Easy drag-and-drop deployment
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Great for static sites
- ✅ Free SSL certificate

**Steps:**

1. **Prepare your files:**
   - Make sure all files are ready
   - Your site should work locally first

2. **Go to Netlify:**
   - Visit [https://www.netlify.com/](https://www.netlify.com/)
   - Sign up for free account (use GitHub, Google, or email)

3. **Deploy:**
   - **Option A: Drag & Drop (Easiest)**
     - Go to Netlify dashboard
     - Drag your entire project folder to the deploy area
     - Wait for upload
     - Your site will be live at `https://random-name.netlify.app`
   
   - **Option B: Git Integration (Better for updates)**
     - Connect your GitHub repository
     - Netlify auto-deploys when you push changes

4. **Get your URL:**
   - Netlify gives you a free URL like `https://your-site-name.netlify.app`
   - You can customize it in settings
   - Add custom domain later if you have one

5. **Update EmailJS/reCAPTCHA:**
   - Add your Netlify URL to EmailJS allowed domains
   - Add your Netlify URL to reCAPTCHA allowed domains

---

### Option 2: Vercel

**Pros:**
- ✅ Free forever
- ✅ Great performance
- ✅ Easy GitHub integration
- ✅ Automatic HTTPS

**Steps:**

1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository or upload files
5. Deploy - get URL like `https://your-site.vercel.app`

---

### Option 3: GitHub Pages

**Pros:**
- ✅ Free
- ✅ Integrated with GitHub
- ✅ Simple setup

**Cons:**
- ❌ Requires GitHub repository
- ❌ Less features than Netlify/Vercel

**Steps:**

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages"
   - Select branch (usually `main`)
   - Select folder (usually `/root`)
   - Save

3. **Get your URL:**
   - `https://yourusername.github.io/your-repo-name`

---

### Option 4: Cloudflare Pages

**Pros:**
- ✅ Free
- ✅ Fast CDN
- ✅ Great performance

**Steps:**

1. Go to [https://pages.cloudflare.com/](https://pages.cloudflare.com/)
2. Sign up/login
3. Connect GitHub repository or upload files
4. Deploy

---

## Quick Comparison

| Service | Free | Ease | Custom Domain | Best For |
|---------|------|------|---------------|----------|
| **Netlify** | ✅ | ⭐⭐⭐⭐⭐ | ✅ | Static sites |
| **Vercel** | ✅ | ⭐⭐⭐⭐ | ✅ | React/Next.js |
| **GitHub Pages** | ✅ | ⭐⭐⭐ | ✅ | Simple sites |
| **Cloudflare Pages** | ✅ | ⭐⭐⭐⭐ | ✅ | Performance |

## Recommended: Netlify

For your static website, **Netlify is the best choice** because:
- Easiest to use
- Perfect for static HTML/CSS/JS sites
- Great free tier
- Excellent documentation

## After Deployment - Important Steps

### 1. Update EmailJS Domains

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Services** → Your service
3. Add your new domain (e.g., `your-site.netlify.app`)
4. Save

### 2. Update reCAPTCHA Domains

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Select your site
3. Add your new domain (e.g., `your-site.netlify.app`)
4. Save

### 3. Test Everything

- ✅ Test contact form
- ✅ Test reCAPTCHA
- ✅ Test email sending
- ✅ Test on mobile device
- ✅ Test dark mode

## Custom Domain (Optional)

If you have your own domain (e.g., `unionvillelandscaping.com`):

1. **Buy domain** (if you don't have one):
   - Namecheap, Google Domains, etc.
   - Usually $10-15/year

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Site settings → Domain management
   - Add custom domain
   - Follow DNS instructions

3. **Update EmailJS/reCAPTCHA:**
   - Add custom domain to allowed domains

## Deployment Checklist

Before deploying:
- [ ] Website works locally
- [ ] All files are ready
- [ ] No broken links
- [ ] Contact form tested
- [ ] reCAPTCHA configured
- [ ] EmailJS configured

After deploying:
- [ ] Site is accessible at new URL
- [ ] Update EmailJS domains
- [ ] Update reCAPTCHA domains
- [ ] Test contact form
- [ ] Test on different devices
- [ ] Share URL with others!

## Need Help?

If you want, I can:
1. Help you set up a GitHub repository
2. Guide you through Netlify deployment
3. Help configure domains
4. Troubleshoot any issues

Just let me know which hosting service you want to use!


