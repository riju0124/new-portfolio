# Deploy To Cloudflare Pages

This portfolio uses `Vite`, so it can be deployed very easily on Cloudflare Pages.

## Before You Start

Make sure you have:

- A GitHub account
- A Cloudflare account
- This project pushed to a GitHub repository

## 1. Push Your Project To GitHub

If your project is only on your PC right now:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If your repo already exists, just push your latest changes.

## 2. Open Cloudflare Pages

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Open `Workers & Pages`
3. Click `Create application`
4. Click `Pages`
5. Click `Connect to Git`

## 3. Connect Your GitHub Repository

1. Connect your GitHub account if Cloudflare asks
2. Select your portfolio repository
3. Click `Begin setup`

## 4. Use These Build Settings

Use these exact settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave empty unless your project is inside a subfolder

## 5. Add Environment Variables If Needed

If you are using EmailJS keys through Vite env vars, add them in Cloudflare Pages:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

Add them in:

`Project Settings > Environment Variables`

## 6. Deploy

Click `Save and Deploy`.

Cloudflare will build the project and give you a live `.pages.dev` link.

## 7. Add Your Custom Domain

If you want your own domain:

1. Open your Pages project
2. Go to `Custom domains`
3. Click `Set up a custom domain`
4. Enter your domain
5. Follow the DNS steps Cloudflare shows

## 8. Every Future Update

After the first deploy, every time you push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Cloudflare Pages will automatically redeploy.

## Notes

- This project builds from the `dist` folder
- If deployment fails, first check that `npm run build` works locally
- If EmailJS is not configured, the site can still deploy, but contact form sending may fail
