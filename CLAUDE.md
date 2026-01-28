# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular library that wraps the [diff](https://www.npmjs.com/package/diff) JavaScript library to display text differences. The library is published to npm as `ngx-simple-text-diff`.

## Commands

```bash
# Build library for production
npm run build

# Serve demo application
npm start

# Run tests
npm test

# Build demo for GitHub Pages
npm run build:demo

# Publish library to npm (from dist folder)
npm run publish
```

## Architecture

This is an Angular workspace with two projects:

### Library: `ngx-simple-text-diff`
- Location: `projects/ngx-simple-text-diff/`
- Entry point: `src/public-api.ts`
- Main component: `NgxSimpleTextDiffComponent` (`lib-ngx-simple-text-diff` selector)
- Uses global `Diff` object from diff.js (loaded via scripts in angular.json)

### Demo: `ngx-simple-text-diff-showcase`
- Location: `projects/ngx-simple-text-diff-showcase/`
- Demonstrates library usage

## Key Dependencies

- Angular 14
- `diff` library (v5.1.0) - loaded as external script, not as ES module

## Important Notes

- The diff.js script must be included in consumer's angular.json scripts array
- Component uses `Diff.diffWordsWithSpace()` from the global scope
- Newlines are converted to `↵\n` for visual display