# offensive_program_kit

React/Vite frontend plus source study-plan content for the offensive program kit.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production build is emitted to `dist/`.

## GitHub Pages

This app is configured for the GitHub Pages repo URL:

- `https://dh4wes.github.io/cybersecurity-study-companion/`

The Vite `base` path is set accordingly for production builds.

## Source content

The React app reads and restructures content from:

- `generated_program/`
- `generated_obsidian_vault/`

The content build step writes a runtime JSON payload to:

- `public/programData.json`
