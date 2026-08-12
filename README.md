# Code Minifier

Quick whitespace minifier for JSON, CSS, HTML, and JS snippets.

## Features
- Modes: JSON, CSS, HTML, JS (whitespace-focused)
- Shows original vs minified size

## Limitations
- Not a production bundler (no AST minify like Terser)
- JS mode only strips comments and collapses whitespace safely-ish

## Run
```bash
npm install
npm run dev
```

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Fully client-side (no API keys)

## Honesty notes
- Portfolio developer utility showcase
- Not a multi-tenant SaaS product
