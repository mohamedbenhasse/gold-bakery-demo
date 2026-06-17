# Gold Bakery Website — GitHub Actions Ready

This is a Vite + React site. GitHub Pages must build it first; do not deploy the raw source files directly.

## Local run

```bash
npm install
npm run dev
```

## GitHub Pages deployment

Upload all folder contents to your GitHub repository, including:

- `.github/workflows/deploy.yml`
- `.gitignore`
- `index.html`
- `package.json`
- `vite.config.js`
- `README.md`
- `public/`
- `src/`

Then in GitHub:

1. Go to **Settings**
2. Go to **Pages**
3. Under **Build and deployment**, choose **GitHub Actions**
4. Go to **Actions**
5. Wait for the deploy workflow to finish
6. Open the Pages link again

The white page happens when GitHub Pages serves the raw Vite source instead of the built `dist` output.
