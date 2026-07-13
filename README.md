# EcoVestors AI

A production-ready circular resource intelligence MVP built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide and Recharts.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Product capabilities

- Premium, responsive circular-economy landing experience with dark mode and motion.
- Role-aware demo authentication for Factory, Artisan/MSME, Logistics Partner, and Admin personas.
- Role-specific workspace previews with notifications, material batches, smart matches, logistics, and ESG report navigation.
- AI waste analyser with animated material classification, confidence, value, pathways, buyer, and carbon results.
- Searchable live marketplace, material cards, AI scores, and meaningful mock match/save actions.
- Digital Material Passport showing traceability, purity, recovery score, market demand, avoided carbon, and origin.
- Circular Intelligence matching that transparently scores material, logistics, and carbon fit.
- Carbon impact dashboard using Recharts (trend and material mix visualisations), live-style metrics, and export feedback.
- Logistics intelligence experience with a route-planning visualization and scheduling action.
- Eco Credit subscription plans, contact routes, SEO metadata, generated `robots.txt`, and sitemap.

## Architecture

The project uses the Next.js App Router and keeps reusable workspace UI in `app/role-switcher.tsx` and `app/workspace-panel.tsx`. The main marketing/product experience is intentionally client-side with realistic mock data, so it deploys without infrastructure or environment variables. Leaflet and React Leaflet are included for production map expansion; the current route intelligence visualization is dependency-free mock UI.

## Technology

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Recharts · Lucide · React Hook Form · Zod · Leaflet

## Deployment

Push to GitHub and import the repository into Vercel. No environment variables or backend services are required.

## Future scope

Connect real computer vision, marketplace transactions, GIS routing, payment flows, ERP integrations, and verifiable ESG reporting.
