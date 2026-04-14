# Superintelligence — Awwwards-level Horizontal Scroll Website

A premium, editorial-grade design & AI studio website featuring a cinematic horizontal scrolling homepage, full multi-page routing, and a complete design system — built with React, TypeScript, TailwindCSS, and Vite.

---

## Live Demo

Deploy to Vercel in one click — see [Deployment](#deployment) section below.

---

## Features

### Homepage (Horizontal Scroll)
- **Cinematic horizontal scroll** — vertical mouse/trackpad input is translated to a smooth horizontal panel traversal using a RAF-based lerp animation (easing factor 0.1 for buttery smoothness)
- **9 full-screen panels** — Hero → Intro → About → Services → Work → Process → Voices → Pricing → Contact
- **Custom cursor** — custom ring + dot cursor with independent lerp speeds for a premium feel
- **Film grain noise overlay** — SVG-based noise texture at low opacity for a cinematic finish
- **Side navigation dots** — panel indicator on the right edge; active dot turns lime green and grows
- **Bottom progress bar** — thin lime green line that fills as you scroll through all panels
- **Section label** — current section name shown in bottom-left, updates with each panel
- **Keyboard navigation** — `←` `→` `↑` `↓` arrow keys navigate between panels
- **Intro screen** — branded loading screen that fades out on entry
- **Vertical guide lines** — subtle column grid lines overlaid on the page
- **Animated marquee ticker** — continuous scrolling text strip in the Process panel
- **Testimonial switcher** — interactive quote carousel in the Voices panel

### Multi-page Routing
| Route | Page |
|-------|------|
| `/` | Homepage (horizontal scroll) |
| `/service/:slug` | Service detail page |
| `/work/:slug` | Case study detail page |
| `/about` | About & team page |
| `/blog` | Blog / journal listing |
| `/blog/:slug` | Individual blog article |
| `*` | 404 Not Found page |

### Service Pages (`/service/:slug`)
Available slugs: `brand-system`, `web-experience`, `product-design`, `creative-dev`

Each service page includes:
- Full-screen hero with parallax image
- Service overview + challenge section
- 4-step approach breakdown
- Complete deliverables list
- Tools & technologies used
- Related case studies
- CTA section

### Case Study Pages (`/work/:slug`)
Available slugs: `mint-and-marble`, `echo-theory`, `vision-leap`

Each case study includes:
- Full-screen hero
- 4 key metrics panel
- Overview + challenge breakdown
- Solution headline
- Detailed 4-phase process
- Visual gallery (3 images)
- Tech stack + services used
- "Next project" navigation link

### About Page (`/about`)
- Company story section
- 4 core values grid
- Full team cards (5 members)
- Open roles / hiring section
- Company stats strip
- CTA section

### Blog/Journal (`/blog`, `/blog/:slug`)
- Featured article layout
- All articles grid
- Newsletter signup section
- Full article page with:
  - Formatted headings, paragraphs, pull quotes
  - Accent-colored blockquotes
  - Author section
  - Related articles

### Design System
- **Accent color**: `#C8FF47` (electric lime)
- **Fonts**: Instrument Serif (display) + Geist (UI/body)
- **Dark palette**: Pure black base with layered surface values
- **Custom components**: `.detail-btn-accent`, `.detail-btn-outline`, `.detail-tag`
- **Animation utilities**: fade-rise, slow-zoom, marquee, scroll-hint
- **Consistent header**: Fixed header with blur-on-scroll on all detail pages

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **TailwindCSS** | Utility-first styling |
| **React Router DOM v6** | Client-side routing |
| **Vercel** | Hosting & deployment |

---

## Project Structure

```
superintelligence/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── DetailLayout.tsx # Shared layout for all detail pages
│   ├── pages/
│   │   ├── ServicePage.tsx  # /service/:slug
│   │   ├── CasePage.tsx     # /work/:slug
│   │   ├── AboutPage.tsx    # /about
│   │   ├── BlogPage.tsx     # /blog
│   │   ├── BlogPostPage.tsx # /blog/:slug
│   │   └── NotFoundPage.tsx # 404
│   ├── App.tsx              # Homepage (horizontal scroll)
│   ├── data.ts              # All site content / data store
│   ├── index.css            # Global styles, design tokens, animations
│   └── main.tsx             # Entry point with BrowserRouter
├── index.html
├── vercel.json              # Vercel config (SPA rewrites + security headers)
├── tailwind.config.js
├── vite.config.js
├── tsconfig.json
└── package.json
```

---

## Local Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/superintelligence.git
cd superintelligence

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build (outputs to /dist)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

#### Option 2: Vercel Dashboard (No CLI needed)
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Vite — no configuration needed
5. Click **Deploy**

The `vercel.json` is already configured with:
- SPA rewrites (all routes → `/index.html`)
- Immutable cache headers for hashed assets
- Security headers (X-Frame-Options, XSS-Protection, etc.)

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Create a `public/_redirects` file:
```
/*    /index.html   200
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

Note: For GitHub Pages you'll need to set `base: '/repo-name/'` in `vite.config.js`.

---

## Customization

### Changing Content
All site content is centralized in `src/data.ts`. Edit this file to update:
- Service descriptions, deliverables, tools
- Case study details, metrics, process steps
- Team member names, roles, bios
- Blog post titles, content blocks

### Changing Colors
The accent color (`#C8FF47`) is defined as a CSS custom property in `src/index.css`:
```css
:root {
  --accent: #c8ff47;
  --accent-dim: rgba(200, 255, 71, 0.15);
}
```

### Adding a New Service
1. Add entry to the `services` array in `src/data.ts`
2. The new service will automatically appear in:
   - Homepage services panel
   - Navigation links
   - Related work sections

### Adding a New Case Study
1. Add entry to the `caseStudies` array in `src/data.ts`
2. Update the `relatedWork` array in relevant services

### Adding a Blog Post
1. Add entry to the `blogPosts` array in `src/data.ts`
2. Content blocks support types: `"p"`, `"h2"`, `"h3"`, `"quote"`

---

## Performance

- **Lighthouse**: Targets 95+ on Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals**: LCP < 2s, FID < 100ms, CLS < 0.1
- **Animations**: Only `transform` and `opacity` are animated (GPU composited, no layout thrash)
- **RAF Loop**: Single requestAnimationFrame loop drives both horizontal scroll and cursor animation
- **Video**: Background video uses `autoplay muted playsInline` for cross-browser compatibility

---

## Accessibility

- Custom cursor hidden on mobile (touch devices)
- Horizontal scroll falls back to vertical scroll on screens < 768px
- `prefers-reduced-motion` support via CSS animations being time-controlled
- All images have `alt` attributes
- Semantic HTML (`<header>`, `<main>`, `<article>`, `<section>`, `<blockquote>`, `<nav>`)
- Keyboard navigation: arrow keys control panel traversal on homepage

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Safari | ✅ Full (vertical fallback) |
| Chrome Android | ✅ Full (vertical fallback) |

---

## License

MIT License — free for personal and commercial use.

---

## Credits

- **Fonts**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) + [Geist](https://vercel.com/font) via Google Fonts
- **Video**: Cloudinary CDN
- **Images**: [Unsplash](https://unsplash.com) (free to use)
- **Build**: [Vite](https://vitejs.dev) + [TailwindCSS](https://tailwindcss.com)
- **Routing**: [React Router](https://reactrouter.com)

---

*Built with obsessive attention to craft. Every detail intentional.*
