# Quick Start Guide

## 🎉 Your Personal Website is Ready!

Your website has been successfully built and is ready to deploy!

## 🚀 What's Next?

### Option 1: Preview Locally (Recommended First)

Test your website locally before deploying:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Option 2: Deploy to Namecheap

Your production files are in the `dist` folder. Follow these simple steps:

#### Fastest Method - Using cPanel:

1. **Log in to Namecheap**
   - Go to [namecheap.com](https://www.namecheap.com) and log in
   - Navigate to Dashboard → Hosting List → Manage → cPanel

2. **Upload Files**
   - Open File Manager in cPanel
   - Go to `public_html` folder
   - Delete any existing files
   - Upload ALL files from your `dist` folder:
     - `index.html`
     - `vite.svg`
     - `assets/` folder (contains CSS and JS)

3. **Enable SSL (HTTPS)**
   - In cPanel, go to SSL/TLS Status
   - Click "Run AutoSSL"
   - Wait 5-10 minutes

4. **Visit Your Site**
   - Go to `https://krishavs.com`
   - Your site is live! 🎉

## 📝 Files You Can Upload to Namecheap

After building (`npm run build`), upload these from the `dist` folder:

```
dist/
├── index.html          ← Upload this
├── vite.svg            ← Upload this
└── assets/             ← Upload this entire folder
    ├── index-[hash].js
    └── index-[hash].css
```

**PLUS** the `.htaccess` file from the root directory (for HTTPS redirect)

## 🔧 Making Changes

1. Edit files in `src/components/`
2. Save changes
3. Run `npm run build`
4. Re-upload `dist` folder contents to `public_html`

## 📚 Full Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide with troubleshooting

## ✨ Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Modern UI with animations
✅ Contact links (Email, LinkedIn, GitHub)
✅ Education section
✅ Experience timeline
✅ Projects showcase
✅ Skills display
✅ SEO optimized
✅ HTTPS redirect ready

## 🎨 Customizing Content

All content is in these files:
- `src/components/Hero.tsx` - Your name, title, stats
- `src/components/Education.tsx` - Education details
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Technical skills

## 💡 Need Help?

Check the detailed guides:
- See **DEPLOYMENT.md** for step-by-step deployment
- See **README.md** for development info

---

**Your website is ready to impress! 🚀**

