# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a Next.js 16 project using the App Router, TypeScript, and Tailwind CSS 4, created from the `create-next-app` template. The home page in `src/app/page.tsx` is a pet shop landing page whose business details are placeholders in the `CONTATO` constant; the placeholder name is also in the metadata in `src/app/layout.tsx`. The directory is a git repository with a GitHub remote (`origin`), and there is no test framework.

Source code is in `src/app`, static files are in `public`, and the import alias `@/*` maps to `src/*`.

## Commands

Next.js 16 requires Node 20.9 or later. Node 24 is installed through nvm; run `nvm use 24` first if an older version is active.

- `npm run dev`: start the development server at http://localhost:3000
- `npm run build`: create a production build
- `npm run start`: serve the production build
- `npm run lint`: run ESLint

## Language

The user communicates in Portuguese, and the site content is in Portuguese (`lang="pt-BR"`).
