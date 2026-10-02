# FLYGRAD (Flyygrad) - International Education Consultancy Website

A high-performance, responsive multi-page web application for **FLYGRAD Global Education**, built with React 19, Vite, Tailwind CSS, Lenis smooth scrolling, and Lucide icons.

## Features
- **Design Constitution**: Follows the Adyapan.com architectural structure with custom blue palette (`--sky: #33C9FF`, `--blue: #1E90F0`, `--royal: #0A5CC4`, `--navy: #0B2F85`, `--ink: #0A1F5C`).
- **Full Viewport Hero**: Stacked 3-line headline with gradient text accents, glassmorphism lead-capture card, and animated SVG flight-path lines.
- **Auto-Scrolling Marquees**: Hero stats strip and infinite partner universities marquee.
- **Animated Counter Stats**: High-impact count-up counters (10,000+ students, 850+ universities, 98.4% visa rate).
- **Specialization Tabs**: Work-ready tabbed system for MS Abroad, MBBS Abroad, English Tests, and German Language.
- **Interactive Lightbox Gallery**: Categorized photo showcases for Seminars, Send-Offs, and Campus visits.
- **Global Counselling Modal**: Easily accessible from anywhere on the site with zero-friction lead capture.
- **Floating Controls**: Pulsing WhatsApp chat beacon, desktop/mobile "Call Now" buttons, and an overlapping-safe Scroll-to-Top trigger.
- **SEO & Schema.org**: Fully equipped with OpenGraph social metadata and `EducationalOrganization` JSON-LD structured data.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
npm run dev
```
The application runs locally on `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

## Content Configuration
All text copy, testimonials, partner universities, and branch addresses are located in `/src/data/`:
- `services.ts`
- `countries.ts`
- `testimonials.ts`
- `faqs.ts`
- `stats.ts`
- `contact.ts`
- `programs.ts`
- `gallery.ts`
