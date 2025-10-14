# Deployment Guide for Namecheap Stellar Hosting

## Quick Deployment Steps

### 1. Build Your Site
```bash
npm run build
```
This creates a `dist` folder with production-ready files.

### 2. Access Namecheap cPanel

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Dashboard** > **Hosting List**
3. Click **Manage** next to your hosting package
4. Click **Go to cPanel**

### 3. Upload Files via cPanel

#### Using File Manager (Recommended):

1. In cPanel, click **File Manager**
2. Navigate to `public_html` folder
3. **Delete any existing files** (like default index.html)
4. Click **Upload** button
5. Drag and drop ALL files from your `dist` folder:
   - `index.html`
   - `vite.svg`
   - `assets/` folder (with all CSS and JS files)
6. Wait for upload to complete

#### File Structure Should Look Like:
```
public_html/
├── index.html
├── vite.svg
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

### 4. Configure Domain DNS

1. In Namecheap dashboard, go to **Domain List**
2. Click **Manage** next to `krishavs.com`
3. Under **Nameservers** section:
   - Select **Custom DNS**
   - Enter your Namecheap hosting nameservers (found in hosting details)
   - Typical format: `dns1.registrar-servers.com` and `dns2.registrar-servers.com`

4. Save changes

### 5. Enable SSL (HTTPS)

1. In cPanel, scroll to **Security** section
2. Click **SSL/TLS Status**
3. Check the box next to your domain
4. Click **Run AutoSSL**
5. Wait 5-10 minutes for certificate installation

### 6. Force HTTPS (Optional but Recommended)

Create or edit `.htaccess` file in `public_html`:

1. In cPanel File Manager, open `public_html`
2. Click **+ File** to create `.htaccess` (if it doesn't exist)
3. Right-click `.htaccess` > **Edit**
4. Add these lines:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Handle React Router (if you add routing later)
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

5. Save the file

### 7. Verify Deployment

1. Wait 5-10 minutes for changes to propagate
2. Visit `https://krishavs.com` in your browser
3. Verify all sections load correctly
4. Test on mobile device

## Troubleshooting

### Site Not Loading
- Clear your browser cache
- Try incognito/private mode
- Check DNS propagation at [whatsmydns.net](https://www.whatsmydns.net)
- Verify files are in `public_html` not a subdirectory

### CSS/JS Not Loading
- Check that the `assets` folder uploaded correctly
- Verify file permissions (should be 644 for files, 755 for folders)
- Clear browser cache

### Domain Not Pointing
- DNS can take up to 48 hours to propagate (usually 1-2 hours)
- Verify nameservers are correct in Namecheap domain settings

### 404 Errors
- Ensure `index.html` is in the root of `public_html`
- Check that file names match exactly (case-sensitive)

## Updating Your Site

When you want to make changes:

1. Edit your code locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload new files from `dist` to `public_html` (overwriting old files)
5. Clear browser cache to see changes

## File Size Limits

Namecheap cPanel usually has these limits:
- Max file upload size: 512 MB
- Max execution time: 30 seconds

Your built site should be well under these limits (typically 1-5 MB).

## FTP Alternative

If you prefer FTP:

1. Get FTP credentials from cPanel homepage
2. Use FileZilla or similar FTP client
3. Connect to your site
4. Upload contents of `dist` folder to `public_html`

### FileZilla Settings:
- **Host:** ftp.krishavs.com (or IP provided)
- **Username:** Your cPanel username
- **Password:** Your cPanel password
- **Port:** 21

## Need Help?

Contact Namecheap support or refer to:
- [Namecheap Knowledge Base](https://www.namecheap.com/support/knowledgebase/)
- [cPanel Documentation](https://docs.cpanel.net/)

---

Your website should now be live at **https://krishavs.com**! 🎉

