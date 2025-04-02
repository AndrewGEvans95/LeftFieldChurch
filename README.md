# Left Field Church

A baseball-themed zine website built with Next.js.

## Deployment to Digital Ocean

1. Push your code to GitHub
2. Create a new app in Digital Ocean App Platform
3. Connect your GitHub repository
4. Configure the following settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment: Node.js
   - Domain: leftfieldchurch.com

### Domain Configuration

1. Purchase the domain `leftfieldchurch.com` if not already owned
2. In Digital Ocean App Platform:
   - Go to your app's "Domains" section
   - Add `leftfieldchurch.com` as your primary domain
   - Add `www.leftfieldchurch.com` as an alias
3. Update your domain's DNS settings at your registrar:
   ```
   Type: A
   Name: @
   Value: <Digital Ocean App IP>
   TTL: 3600

   Type: CNAME
   Name: www
   Value: <your-app-name>.ondigitalocean.app
   TTL: 3600
   ```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file with the following variables:
```
# Add any environment variables here
```

## Features

- Baseball player profiles
- Game schedule
- Stats and facts
- Print-friendly layouts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
