# Conie Lariego — Developer Portfolio

Personal portfolio of **Conie Besinan Lariego**, a BS Computer Engineering student at Cebu Technological University–Danao Campus (DOST-SEI Scholar & Consistent Dean's Lister) focused on **Full-Stack Web Development**, **Quality Assurance**, and **Data Analytics**.

## Tech Stack
- **Framework**: Next.js 16 (App Router) & React 19
- **Language**: TypeScript
- **Styling**: Custom CSS with light/dark editorial theme tokens (`Cormorant Garamond` & `Manrope`)

## Project Structure
- `data/portfolio.ts` — Single source of truth for profile copy, links, experience timeline, skills, project case studies, certifications, and trainings.
- `app/layout.tsx` — Root layout, typography, SEO / OpenGraph metadata, and JSON-LD structured data.
- `app/page.tsx` — Interactive single-page portfolio with light/dark mode, service simulations, project case studies, and certificate showcase.
- `public/` — Portraits, logo, favicon, and future project screenshots (`public/projects/`) & resume PDF (`public/resume.pdf`).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Portfolio Content
All editable content—including placeholder links, certificate issuers, experience entries, and project screenshots—is centralized in `data/portfolio.ts` and marked with `// TODO:` comments where real assets can be dropped in.
