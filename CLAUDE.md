# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular library that wraps the [diff](https://www.npmjs.com/package/diff) JavaScript library to display text differences. Published to npm as `ngx-simple-text-diff`.

## Commands

```bash
# Build library for production (partial compilation for npm)
npm run build

# Serve demo application
npm start

# Build demo for GitHub Pages
npm run build:demo

# Publish to npm (requires 2FA via --auth-type=web)
cd dist/ngx-simple-text-diff && npm publish --access public --auth-type=web
```

## Architecture

Angular workspace with two projects:

### Library: `ngx-simple-text-diff`
- Location: `projects/ngx-simple-text-diff/`
- Entry point: `src/public-api.ts`
- **Standalone component**: `NgxSimpleTextDiffComponent` (selector: `lib-ngx-simple-text-diff`)
- **NgModule wrapper**: `NgxSimpleTextDiffModule` (for legacy apps)
- Uses global `Diff` object from diff.js (loaded via scripts in angular.json)

### Demo: `ngx-simple-text-diff-showcase`
- Location: `projects/ngx-simple-text-diff-showcase/`
- Standalone app (no NgModule)

## Key Dependencies

- Angular 21
- `diff` library v8 - loaded as external script, not as ES module
- TypeScript 5.9

## Publishing

- Library uses **partial compilation mode** (`tsconfig.lib.prod.json`)
- peerDependencies: Angular 17-21, diff 5-8
- npm publish requires 2FA authentication via web browser

## Important Notes

- The diff.js script must be included in consumer's angular.json scripts array
- Component uses `Diff.diffWordsWithSpace()` from the global scope
- No testing infrastructure (karma/jasmine removed)
