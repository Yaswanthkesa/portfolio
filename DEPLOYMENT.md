# 🚀 Deployment Guide

## Quick Comparison

| Platform | Difficulty | Speed | Custom Domain | Auto-Deploy |
|----------|-----------|-------|---------------|-------------|
| **Vercel** | ⭐ Easiest | ⚡ Fastest | ✅ Free | ✅ Yes |
| **Netlify** | ⭐ Easy | ⚡ Fast | ✅ Free | ✅ Yes |
| **GitHub Pages** | ⭐⭐ Medium | 🐢 Slower | ✅ Yes | ⚠️ Manual |

---

## 🥇 Option 1: Vercel (RECOMMENDED)

### Why Vercel?
- ✅ Easiest setup
- ✅ Automatic deployments from GitHub
- ✅ Free forever
- ✅ Lightning fast CDN
- ✅ Perfect for React/Vite projects

### Steps:

1. **Push to GitHub:**
```bash
cd portfolio-react
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Yaswanthkesa/portfolio.git
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" → Choose "Continue with GitHub"
   - Click "New Project"
   - Import your `portfolio` repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Wait 1-2 minutes ⏳

3. **Done!** 🎉
   - You'll get: `https://portfolio-username.vercel.app`
   - Share this link with anyone!

### Custom Domain (Optional):
- Go to Project Settings → Domains
- Add your custom domain (e.g., `yaswanthkesa.com`)

---

## 🥈 Option 2: Netlify

### Steps:

**Method A: Drag & Drop (Fastest)**

1. **Build your project:**
```bash
cd portfolio-react
npm run build
```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Drag the `dist` folder to Netlify
   - Done! Get link: `https://your-name.netlify.app`

**Method B: GitHub Integration (Auto-deploy)**

1. Push to GitHub (same as Vercel step 1)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

## 🥉 Option 3: GitHub Pages

### Steps:

1. **Create GitHub repository:**
```bash
cd portfolio-react
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Yaswanthkesa/portfolio.git
git push -u origin main
```

2. **Deploy:**
```bash
npm run deploy
```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Select `gh-pages` branch
   - Save

4. **Access your site:**
   - `https://yaswanthkesa.github.io/portfolio`

### Update your portfolio:
```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 🎯 My Recommendation

**For you, I recommend Vercel because:**
1. ✅ Zero configuration needed
2. ✅ Automatic deployments (push to GitHub = auto-deploy)
3. ✅ Fastest performance
4. ✅ Professional URL
5. ✅ Easy to add custom domain later

---

## 📝 After Deployment

### Share Your Portfolio:
- Add the link to your GitHub profile
- Add to your LinkedIn profile
- Include in your resume
- Share on social media

### Update Your Portfolio:
```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push
# Vercel/Netlify will auto-deploy!
```

---

## 🆘 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check if `base` in `vite.config.ts` matches your deployment:
- Vercel/Netlify: `base: '/'`
- GitHub Pages: `base: '/portfolio/'`

### Issue: 404 on page refresh
**Solution:** Already handled! We're using HashRouter for GitHub Pages compatibility.

### Issue: Images not loading
**Solution:** Make sure images are in `src/assets/` and imported correctly.

---

## 🎉 You're Ready!

Choose your platform and deploy. If you need help, just ask!

**Recommended:** Start with Vercel - it's the easiest and most professional option.
