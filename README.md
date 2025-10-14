# Krishav Singla - Personal Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Modern UI with animations
- Sections for Education, Experience, Projects, and Skills
- Fast loading and optimized performance

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🌐 Deployment to Namecheap (Stellar Web Hosting)

### Step 1: Build the Production Site

1. Build the production-ready files:
```bash
npm run build
```

This creates a `dist` folder with all your optimized static files.

### Step 2: Upload to Namecheap

#### Option A: Using cPanel File Manager

1. Log in to your Namecheap cPanel
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Upload all files from the `dist` folder to this directory:
   - index.html
   - assets/ folder (contains all JS and CSS files)
   - vite.svg (favicon)

#### Option B: Using FTP/SFTP

1. Get your FTP credentials from Namecheap:
   - Log in to Namecheap
   - Go to **Hosting List** > **Manage**
   - Find FTP details under **Hosting Details**

2. Connect using an FTP client (like FileZilla):
   - Host: Your domain or provided FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

3. Navigate to `public_html` (or your domain root)

4. Upload all contents from the `dist` folder

### Step 3: Configure Domain

1. Ensure your domain `krishavs.com` is pointed to your Namecheap hosting:
   - In Namecheap dashboard, go to **Domain List**
   - Click **Manage** next to krishavs.com
   - Under **Nameservers**, select **Custom DNS**
   - Use Namecheap's hosting nameservers (should be provided in hosting details)

2. Wait for DNS propagation (can take up to 48 hours, but usually much faster)

### Step 4: SSL Certificate (HTTPS)

1. In cPanel, go to **SSL/TLS Status**
2. Click **Run AutoSSL** to get a free SSL certificate
3. Wait for the certificate to be issued
4. Your site will now be accessible via HTTPS

### Important Notes

- **Clear the `public_html` directory** before uploading if there are existing files
- The built files are static HTML, CSS, and JavaScript - no server-side code needed
- Make sure all files maintain their folder structure when uploading
- After uploading, visit `krishavs.com` to see your live site

## 📝 Making Updates

1. Make changes to the source code
2. Test locally with `npm run dev`
3. Build again with `npm run build`
4. Re-upload the contents of the `dist` folder to your hosting

## 🔧 Customization

### Updating Content

All content is located in the component files under `src/components/`:
- `Hero.tsx` - Name, title, contact info, and quick stats
- `Education.tsx` - Education details
- `Experience.tsx` - Work experience
- `Projects.tsx` - Project details
- `Skills.tsx` - Technical skills and interests

### Changing Colors

Colors and theme can be customized in:
- `tailwind.config.js` - Color palette and theme settings
- Component files - Individual color classes

### Adding Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add navigation link in `Navigation.tsx`

## 📧 Contact

- Email: krishavs@wharton.upenn.edu
- LinkedIn: [linkedin.com/in/krishavs](https://www.linkedin.com/in/krishavs)
- GitHub: [github.com/krishavs1](https://github.com/krishavs1)

---

Built with ❤️ by Krishav Singla
