# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OneThing is a Next.js-based marketing website for a productivity/focus app. The site is built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

**Development server:**
```bash
npm run dev
```
Opens at http://localhost:3000 with hot reload enabled.

**Build:**
```bash
npm run build
```

**Lint:**
```bash
npm run lint
```

**Production server:**
```bash
npm run start
```

## Architecture

### Next.js App Router Structure

- **`src/app/page.tsx`**: Main landing page that composes all sections in order:
  - Navigation → Hero → ScreenshotSection → ReviewsSection → Features (#features) → ScreenshotsSection → Contact (#contact) → Footer
- **`src/app/layout.tsx`**: Root layout with Geist fonts and global metadata
- **`src/app/legal/page.tsx`**: Legal page (Terms & Privacy)
- **`src/components/`**: Reusable React components for each page section

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*` (configured in tsconfig.json:21-23)

### Styling System

Uses Tailwind CSS 4 with PostCSS. The site uses a custom color palette:
- Primary: `#E5745A` (Orange)
- Secondary: `#F1C0A8` (Light Orange)
- Background: `#FCFCFA` (Off-white)

These colors are referenced directly in className strings (e.g., `bg-[#E5745A]`).

### Key Technical Details

- **React Compiler**: Enabled in next.config.ts (nextConfig.reactCompiler: true)
- **TypeScript**: Strict mode enabled with ES2017 target
- **Icons**: Uses lucide-react for icons throughout
- **Animation**: Framer Motion available for animations (framer-motion package)
- **ESLint**: Uses Next.js recommended config with TypeScript support

### Component Patterns

Components follow a consistent structure:
- Import icons from lucide-react
- Export default function component
- Use inline data (e.g., features array in Features.tsx:4-47)
- Apply Tailwind classes directly with responsive variants (sm:, md:, lg:)
- Use anchor links for navigation (e.g., #features, #contact)

### Landing Page Flow

The main page (src/app/page.tsx:10-24) is a simple composition of section components. Each section component is self-contained with its own data and styling.
