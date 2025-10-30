# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15 web application that generates authentic Korean names with romanization, meanings, and cultural context. The app targets K-pop fans, Korean learners, and K-drama enthusiasts worldwide. The project is heavily optimized for SEO with Google Analytics integration, Google Search Console verification, and comprehensive metadata.

**Deployed at:** https://korean-name-generator-delta.vercel.app

## Common Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint
```

### Key Technologies
- Next.js 15.5.4 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Turbopack (enabled by default)

## Architecture

### Directory Structure

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main name generator (client component)
│   ├── layout.tsx           # Root layout with SEO metadata & Google Analytics
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # robots.txt configuration
│   ├── manifest.ts          # PWA manifest
│   ├── icon.tsx             # Dynamic favicon
│   ├── apple-icon.tsx       # Apple touch icon
│   ├── opengraph-image.tsx  # Dynamic OG image
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   └── blog/                # Blog posts
│       ├── page.tsx         # Blog index
│       ├── korean-name-history/
│       ├── kpop-star-names/
│       ├── traditional-vs-modern/
│       ├── beautiful-female-names/
│       ├── gender-neutral-names/
│       └── korean-surnames/
└── data/
    └── names.ts             # Name database and generation logic

public/
└── ads.txt                  # Google AdSense verification
```

### Core Data Structure

The name generation system is centralized in `src/data/names.ts`:

**Data Types:**
- `KoreanName`: Contains lastName, firstName, romanization, meaning, gender, style, theme
- `NamePreferences`: User selections for gender, style, theme

**Name Database:**
- 30 Korean surnames (lastNames array)
- 120 first names split across:
  - maleFirstNames
  - femaleFirstNames
  - unisexFirstNames
- Each first name includes: korean, romanization, meaning, style (traditional/modern/trendy), theme (nature/wisdom/strength/beauty/virtue)

**Key Functions:**
- `generateRandomName(gender, preferences)`: Filters by preferences and returns random name
- `getSimilarNames(name, count)`: Returns similar names based on style/theme matching

### Main Generator Component

Located in `src/app/page.tsx` - a client component that:
- Manages state for gender, style, theme selections
- Handles "nonbinary" by randomly selecting male/female names
- Generates similar name recommendations
- Provides clipboard copy functionality
- Includes JSON-LD structured data for SEO

### SEO & Analytics

**Layout Configuration (`src/app/layout.tsx`):**
- Extensive metadata with 80+ keywords (English + Korean)
- OpenGraph and Twitter card configurations
- Google Analytics (G-MCR39PN1M7) loaded via next/script
- Google Search Console verification meta tag
- Mobile-optimized PWA configuration

**Generated Files:**
- `sitemap.ts`: Dynamic sitemap with all pages and blog posts
- `robots.ts`: Configured for Googlebot/Bingbot with sitemap reference
- `public/ads.txt`: Google AdSense verification

**Domain:** All SEO files reference https://korean-name-generator-delta.vercel.app

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*` - use this for all imports:
```typescript
import { generateRandomName } from '@/data/names';
```

## Development Notes

### Turbopack
All npm scripts use `--turbopack` flag by default. This is Next.js's faster bundler and is the project standard.

### Client vs Server Components
- Main generator (`src/app/page.tsx`) is a client component ('use client')
- Blog posts and static pages are server components
- Layout is a server component with Google Analytics injected via Script component

### Name Generation Logic
When adding or modifying names:
1. Update the appropriate array in `src/data/names.ts`
2. Ensure each name has all required fields: korean, romanization, meaning, style, theme
3. Keep gender categorization consistent (male/female/unisex)
4. The nonbinary option is handled at the UI level, not in the data

### SEO Considerations
When adding new pages:
1. Add route to `src/app/sitemap.ts`
2. Add comprehensive metadata in page component or layout
3. Consider adding to blog index if content-related
4. Update robots.txt if needed (in `src/app/robots.ts`)
