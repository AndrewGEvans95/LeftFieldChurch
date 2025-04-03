# Deployment Guide for Digital Ocean App Platform

## Prerequisites
- Digital Ocean account
- GitHub repository with your code
- Access to Digital Ocean App Platform

## Steps to Deploy

1. **Connect GitHub Repository**
   - Go to Digital Ocean App Platform
   - Click "Create App"
   - Choose "GitHub" as the source
   - Select your repository
   - Choose the branch to deploy (usually `main` or `master`)

2. **Configure App Settings**
   - Set the following build settings:
     - Build Command: `npm run build`
     - Run Command: `npm start`
     - HTTP Port: `3000`
   - Add environment variables:
     - `NODE_ENV=production`
     - `PORT=3000`
     - `SITE_URL=https://your-domain.com` (replace with your actual domain)

3. **Configure Resources**
   - Choose your plan (Basic or Pro)
   - Set the number of instances
   - Configure auto-scaling if needed
   - Set memory limit to at least 1GB
   - Set CPU to at least 1 vCPU

4. **Deploy**
   - Click "Create Resources"
   - The app will automatically build and deploy
   - Monitor the deployment logs for any issues

## Production Configuration

The app is configured for production with:
- Standalone output mode for optimal performance
- Sitemap generation for SEO
- Environment variable support
- Node.js version specification (>=18.0.0)
- Optimized build process

## Updating the App

To update the app:
1. Push your changes to the connected GitHub branch
2. Digital Ocean will automatically detect the changes and start a new deployment
3. Monitor the deployment in the App Platform dashboard

## Environment Variables

Add these environment variables in the App Platform dashboard:
- `NODE_ENV=production`
- `PORT=3000`
- `SITE_URL=https://your-domain.com`
- Any other environment variables your app needs

## Troubleshooting

1. **Check Logs**
   - View build and runtime logs in the App Platform dashboard
   - Check the "Deployments" tab for detailed logs

2. **Common Issues**
   - Build failures: Check the build logs for npm errors
   - Runtime errors: Check the runtime logs
   - Environment variables: Verify all required variables are set
   - Memory issues: Increase the memory limit if needed
   - Port conflicts: Ensure port 3000 is available

3. **Scaling**
   - Adjust resources in the App Platform dashboard
   - Configure auto-scaling based on your needs
   - Monitor performance metrics

## Local Development

For local development:
```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000 