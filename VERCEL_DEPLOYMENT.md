# Vercel Deployment Guide for Syntheseek

## 📋 Prerequisites

Before deploying to Vercel, ensure you have:

1. ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))
2. ✅ Your GitHub repository pushed with latest changes
3. ✅ API Keys ready:
   - Cerebras API Key (from https://cloud.cerebras.ai/)
   - Exa API Key (from https://exa.ai/)

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Import Project"
   - Select your `Syntheseek` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./syntheseek` (or leave as `.` if repo root is the project)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   ```
   CEREBRAS_API_KEY=your_cerebras_api_key_here
   EXA_API_KEY=your_exa_api_key_here
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.vercel.app (optional)
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to Project Directory**
   ```bash
   cd /home/kishan/Downloads/Projects/Github/Syntheseek/syntheseek
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project name? **syntheseek**
   - In which directory is your code located? **./syntheseek** (or **./**)
   - Want to override settings? **N**

5. **Add Environment Variables**
   ```bash
   vercel env add CEREBRAS_API_KEY
   # Enter your Cerebras API key when prompted
   
   vercel env add EXA_API_KEY
   # Enter your Exa API key when prompted
   ```

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 🔐 Environment Variables Setup

After deployment, you can manage environment variables:

### Via Dashboard:
1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add/Edit variables:
   - `CEREBRAS_API_KEY`
   - `EXA_API_KEY`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)

### Via CLI:
```bash
# Add new variable
vercel env add VARIABLE_NAME

# List all variables
vercel env ls

# Remove variable
vercel env rm VARIABLE_NAME
```

**Important:** After adding/changing environment variables, redeploy:
```bash
vercel --prod
```

---

## 🌐 Custom Domain Setup

1. **Go to Project Settings**
   - Navigate to your project on Vercel
   - Click "Settings" → "Domains"

2. **Add Custom Domain**
   - Enter your domain (e.g., `syntheseek.ai`)
   - Follow DNS configuration instructions
   - Vercel provides automatic HTTPS

3. **DNS Configuration**
   Add these records to your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Search functionality works
- [ ] Eyes animation follows cursor
- [ ] Sources load from Exa API
- [ ] Streaming answers work (Cerebras API)
- [ ] Follow-up questions generate
- [ ] GitHub star button works
- [ ] Mobile responsive design
- [ ] All images load correctly
- [ ] Footer links work

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Ensure all dependencies are installed
npm install
npm run build
```

**Error: "Environment variables missing"**
- Add variables in Vercel dashboard
- Redeploy after adding

### Runtime Errors

**Error: "API calls failing"**
- Check environment variables are set correctly
- Verify API keys are valid
- Check Vercel function logs: Dashboard → Deployments → View Function Logs

**Error: "Timeout exceeded"**
- Check `maxDuration` in API routes (currently set to 45s)
- Vercel Hobby plan: 10s limit (upgrade to Pro for 60s)

### Performance Issues

**Slow cold starts:**
- Vercel Edge Functions have faster cold starts
- Consider upgrading to Vercel Pro

**Large bundle size:**
```bash
# Analyze bundle
npm run build
# Check .next/analyze/ output
```

---

## 📈 Monitoring & Analytics

### Vercel Analytics
1. Go to your project dashboard
2. Click "Analytics" tab
3. Enable Web Analytics (free)

### Plausible Analytics (Optional)
1. Sign up at https://plausible.io
2. Add your domain
3. Get your domain name
4. Add to environment variables:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.vercel.app
   ```

---

## 🔄 Continuous Deployment

Vercel automatically deploys on:
- ✅ **Production:** Push to `main` branch
- ✅ **Preview:** Push to any branch or PR
- ✅ **Rollback:** Click "Promote to Production" on any previous deployment

To disable auto-deploy:
1. Go to Project Settings
2. Git → Enable/Disable Git Integration

---

## 💰 Pricing Considerations

### Vercel Hobby (Free):
- ✅ 100 GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ⚠️ 10s function timeout
- ⚠️ 4.5 GB memory

### Vercel Pro ($20/month):
- ✅ 1 TB bandwidth/month
- ✅ 60s function timeout
- ✅ 6 GB memory
- ✅ Priority support
- ✅ Team collaboration

**Recommendation:** Start with Hobby, upgrade to Pro if you hit limits.

---

## 🎉 Success!

Your Syntheseek app should now be live at:
- **Production:** `https://your-project-name.vercel.app`
- **Preview:** Unique URL for each branch/PR

Share your deployment URL and enjoy! 🚀

---

## 📞 Support

If you encounter issues:
- **Vercel Support:** https://vercel.com/support
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Project Issues:** https://github.com/kishanrajput23/Syntheseek/issues
