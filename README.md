# offensive_program_kit

Trimmed deploy-only React/Vite app for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production bundle is emitted to `dist/`.

## Pages deployment

This repo now deploys only the app. Runtime content is served from `public/programData.json`, and the Vite base path is relative so the build works on both a GitHub Pages repo URL and a custom domain once a `CNAME` file is added with the target hostname.
