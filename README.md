
# Azentyx Website (React + Vite + Tailwind)

## Local dev
```bash
npm install
npm run dev
```

## Build (optional)
```bash
npm run build
```

## Deploy (Netlify — free plan)
1. Push this folder to a new GitHub repo.
2. In Netlify, **Add new site → Import from Git**.
3. Build command: `npm run build` · Publish directory: `dist`.
4. The included `_redirects` file enables SPA routing.
5. Add your domains `azentyx.com` and `www.azentyx.com` in **Site settings → Domains**, then follow the DNS steps Netlify shows for BigRock.

## Deploy (Cloudflare Pages — free)
- Build command: `npm run build` · Output directory: `dist`.
- Add custom domain and update DNS (or switch nameservers).

## Deploy (GitHub Pages — free)
- Build and publish the `dist/` folder via GitHub Pages. Set custom domain in repo **Settings → Pages**.
