# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for "Bibliografia Publikacji Pracowników" (BPP) - a scientific publication management system. The site is built with React 19, TypeScript, and Tailwind CSS v4, using the App Router architecture.

**Key Information:**
- Language: Polish (all content and UI text is in Polish)
- Purpose: Marketing/promotional website for an academic publication cataloging system
- Tech Stack: Next.js 15.2.4, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui components
- Package Manager: pnpm (evidenced by pnpm-lock.yaml)
- Deployment: Configured for Vercel (Vercel Analytics included)

## Development Commands

Since package.json lacks a "scripts" section, use standard Next.js commands with pnpm:

```bash
# Development
pnpm dev              # Start development server (usually http://localhost:3000)

# Building
pnpm build            # Create production build
pnpm start            # Start production server

# Package Management
pnpm install          # Install dependencies
pnpm add <package>    # Add new dependency
```

## Architecture

### Routing Structure (App Router)
- `/` - Home page with hero section, features grid, stats, and CTA
- `/o-systemie` - About the system (system description, requirements)
- `/mozliwosci` - Capabilities/features
- `/wdrozenia` - Deployments/implementations
- `/zrodla` - Source code/downloads
- `/kontakt` - Contact page with EmailJS integration
- `/demo` - Demo request page

All pages follow the same layout pattern: `<Navigation>` + page content + `<Footer>`

### Directory Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout (metadata, fonts, analytics)
├── globals.css           # Tailwind CSS global styles
├── actions/
│   └── send-email.ts     # Server action for EmailJS contact form
└── [route]/
    └── page.tsx          # Individual route pages

components/
├── navigation.tsx        # Header with mobile menu
├── footer.tsx           # Site footer
├── theme-provider.tsx   # Theme context provider
└── ui/                  # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── select.tsx
    └── ...

lib/
└── utils.ts             # cn() utility for className merging

public/
└── images/              # Logo and image assets
```

### Component System

This project uses **shadcn/ui** (New York style) configured via `components.json`:
- All UI components are in `components/ui/`
- Uses Radix UI primitives (@radix-ui/react-*)
- Icons from lucide-react
- Path aliases: `@/*` maps to project root

**Import aliases:**
- `@/components` - components directory
- `@/lib/utils` - utility functions
- `@/app` - app directory

### Styling

- **Tailwind CSS v4** (PostCSS-based, new architecture)
- CSS variables for theming (defined in globals.css)
- Uses `cn()` utility from `lib/utils.ts` for conditional classes
- Base color: neutral
- Animations via tailwindcss-animate

### Key Features

**EmailJS Integration:**
- Server action in `app/actions/send-email.ts` handles contact form submissions
- Requires environment variables: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`
- Form data includes institution details, deployment plans, migration needs

**Analytics:**
- Vercel Analytics (@vercel/analytics)
- Plausible Analytics script (plausible.io) for bpp.iplweb.pl domain

**Fonts:**
- Geist Sans and Geist Mono via geist package
- Applied through CSS variables in layout.tsx

### Build Configuration (next.config.mjs)

```javascript
eslint: { ignoreDuringBuilds: true }
typescript: { ignoreBuildErrors: true }
images: { unoptimized: true }
```

**Important:** Type errors and linting errors are ignored during builds. When adding new code, you should still write type-safe code, but existing code may have type issues.

## Development Notes

### When Working with This Codebase:

1. **All content is in Polish** - maintain Polish language for all user-facing text
2. **Mobile-first responsive design** - Navigation has mobile menu, all layouts are responsive
3. **Client vs Server Components:**
   - Most pages use `"use client"` directive for interactivity
   - Server actions (like send-email.ts) use `"use server"`
4. **Image handling:** Next.js Image component with unoptimized flag set
5. **No testing infrastructure** - no test files or testing libraries configured
6. **No linting configured** - ESLint/Prettier not set up in package.json

### Adding New Pages:

1. Create `app/[route-name]/page.tsx`
2. Add route to navigation array in `components/navigation.tsx`
3. Update footer links in `components/footer.tsx` if needed
4. Follow existing page structure: Navigation + content + Footer

### Adding shadcn/ui Components:

Components are manually added (no CLI). To add new components:
1. Copy from shadcn/ui docs (New York style)
2. Place in `components/ui/`
3. Ensure Radix UI dependency is in package.json
4. Use `@/` path alias for imports

### Environment Variables:

Create `.env.local` for:
```
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
```

## Common Patterns

**Page Structure:**
```tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Content */}
      </main>
      <Footer />
    </div>
  )
}
```

**Responsive Containers:**
```tsx
<div className="container mx-auto px-4 py-12">
  {/* Content */}
</div>
```

## External Links

- Main product website: https://bpp.iplweb.pl
- Commercial support: https://www.iplweb.pl/
- Calendly booking: https://calendly.com/mpasternak
