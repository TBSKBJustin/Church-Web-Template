# 🚀 Deployment Guide

## Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Church-Web-Template.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Automatic Deployment**
   - Every push to the `main` branch will trigger automatic deployment
   - You can also manually trigger deployment from the **Actions** tab

4. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Church-Web-Template/`
   - Wait 2-3 minutes for the first deployment to complete

### Manual Deployment

You can also trigger deployment manually:
- Go to **Actions** tab in your repository
- Click on **Deploy to GitHub Pages** workflow
- Click **Run workflow**

### Important Notes

- **Repository Name**: If you rename your repository, update the `base` path in `vite.config.js`:
  ```js
  base: '/YOUR-NEW-REPO-NAME/'
  ```

- **Custom Domain**: To use a custom domain:
  1. Add a `CNAME` file in the `public` folder with your domain
  2. Configure DNS settings with your domain provider
  3. Update `base: '/'` in `vite.config.js`

### Troubleshooting

- **404 Error**: Make sure GitHub Pages is set to use **GitHub Actions** as the source
- **Blank Page**: Check that the `base` path in `vite.config.js` matches your repository name
- **Build Failed**: Check the Actions tab for error logs

### Local Testing

Test the production build locally:
```bash
npm run build
npm run preview
```

This will run the production build at `http://localhost:4173`
