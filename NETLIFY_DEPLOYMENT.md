# Netlify Deployment Guide

Complete step-by-step guide to deploy your portfolio on Netlify.

## Prerequisites

- GitHub account
- Code pushed to GitHub
- Node.js installed locally

## Method 1: GitHub Integration (Recommended)

### Step 1: Connect GitHub Repository

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com)

3. Sign up or log in with GitHub

### Step 2: Create New Site

1. Click **"New site from Git"** button

2. Choose **GitHub** as your Git provider

3. Authorize Netlify to access your GitHub account

4. Select your portfolio repository

### Step 3: Configure Build Settings

1. **Build command**: `npm run build`
2. **Publish directory**: `build`
3. Leave other settings as default

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for build to complete (usually 1-2 minutes)
3. Your site is now live!

## Method 2: Drag & Drop Deployment

### Quick Deploy (No GitHub Required)

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `build` folder

4. Your site is deployed immediately!

## Method 3: Netlify CLI

### Using Command Line

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Create `netlify.toml` (already included)

4. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Environment Variables Setup

### For Sensitive Information

1. Go to **Site settings** → **Build & deploy** → **Environment**

2. Click **"Edit variables"**

3. Add your variables (from `.env` file):
   ```
   REACT_APP_GITHUB_URL=https://github.com/username
   REACT_APP_EMAIL=your.email@example.com
   ```

4. Trigger a new deploy to apply changes

## Custom Domain Setup

### Connect Your Domain

1. Go to **Site settings** → **Domain management**

2. Click **"Add custom domain"**

3. Enter your domain (e.g., yourportfolio.com)

4. Follow Netlify's instructions to update DNS records:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update nameservers to Netlify's provided values
   - Wait 24-48 hours for DNS propagation

### Or Use Netlify's Domain Service

1. In **Domain management**, click **"Add domain"**

2. Register new domain through Netlify

3. Automatically configured!

## Enable Contact Form

### Form Submissions

Forms are already configured! To receive submissions:

1. Deploy to Netlify

2. Go to **Site settings** → **Forms**

3. Set up email notifications

4. Users can now submit the contact form

### Spam Protection

1. In **Forms** settings, enable:
   - Akismet spam filtering
   - CAPTCHA verification

## SSL/HTTPS Setup

### Automatic HTTPS

Netlify provides FREE SSL certificates:

1. **Default**: Automatically enabled for `*.netlify.app` domains

2. **Custom domains**: Enabled automatically via Let's Encrypt

3. **Force HTTPS**: Go to **Site settings** → **Build & deploy** → Enable "Force HTTPS"

## Continuous Deployment

### Automatic Deploys from GitHub

1. Connected via GitHub integration (already set up)

2. Each push to `main` branch triggers automatic deploy

3. View deploy status in **Deploys** tab

### Branch Deploys

Deploy other branches for testing:

1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**

2. Add branch names to enable preview deploys

3. Each branch gets its own preview URL

## Redirect & Rewrite Rules

### Already Configured in netlify.toml

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This enables client-side routing for React.

### Add More Rules

Edit `netlify.toml`:
```toml
[[redirects]]
  from = "/old-path"
  to = "/new-path"
  status = 301

[[rewrite]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## Edge Functions (Advanced)

### Add Serverless Logic

Create `netlify/edge-functions/auth.js`:
```javascript
export default async (request, context) => {
  const { user } = await context.Auth.user();
  return new Response(JSON.stringify({ user }));
};
```

## Monitoring & Analytics

### View Site Analytics

1. **Deploys**: Monitor deployment history and logs

2. **Analytics**: Traffic, performance, and visitor data

3. **Build logs**: Debug failed deployments

4. **Error tracking**: Monitor 404s and errors

### Integration with Tools

- **Google Analytics**: Add tracking code to `public/index.html`
- **Sentry**: Monitor errors
- **Datadog**: Performance monitoring

## Performance Optimization

### Netlify Built-in Features

1. **Automatic minification** of CSS/JS
2. **Image optimization** via Netlify Image API
3. **Asset caching** headers
4. **HTTP/2 Push** support
5. **Brotli compression** by default

## Backup & Rollback

### Revert to Previous Deploy

1. Go to **Deploys** tab

2. Find desired deployment

3. Click three dots → **Restore this deploy**

## Troubleshooting

### Build Fails

Check deploy logs:
```bash
netlify logs
```

Common issues:
- Missing dependencies: Run `npm install`
- Wrong build command: Check `package.json`
- Environment variables: Set in Netlify dashboard

### Site Shows Blank

1. Check build output in deploy logs
2. Ensure `netlify.toml` is correct
3. Verify `public` folder exists

### Form Not Submitting

1. Deploy to Netlify (forms only work on live site)
2. Check form name: `<form name="contact">`
3. Verify Netlify Forms are enabled

### Domain Not Resolving

1. Wait 24-48 hours after changing DNS
2. Check nameserver settings at registrar
3. Use DNS propagation checker tool

## Security Best Practices

### Enabled by Default

- HTTPS/SSL encryption
- DDoS protection
- Security headers (in netlify.toml)
- Automatic bot mitigation

### Additional Steps

1. Enable **Branch protection** on GitHub

2. Set up **access control** for team members

3. Use **environment variables** for secrets

4. Never commit `.env` file

## Maintenance

### Keep Site Updated

1. Add new projects regularly
2. Update skills and experience
3. Monitor performance
4. Update dependencies monthly:
   ```bash
   npm update
   ```

### Monthly Checklist

- [ ] Review analytics
- [ ] Check for npm updates
- [ ] Test contact form
- [ ] Test on mobile
- [ ] Update projects
- [ ] Check broken links

## Useful Netlify Resources

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Support](https://support.netlify.com)
- [Netlify Community](https://community.netlify.com)
- [Netlify Status](https://www.netlifystatus.com)

## Quick Commands

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod

# View logs
netlify logs

# View status
netlify status
```

## Support

Having issues? Check:
1. Netlify documentation
2. GitHub issues
3. Netlify community forums
4. Stack Overflow

---

**Your portfolio is now live on Netlify! 🚀**
