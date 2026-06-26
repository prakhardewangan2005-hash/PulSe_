# Pulse — A Context-Aware Focus System

An 18-month product design case study and live portfolio site for **Pulse**, a macOS/iPadOS/iOS focus system that senses cognitive context instead of demanding attention.

**Live site:** https://pulse-fawn-five.vercel.app
**Case study:** https://pulse-fawn-five.vercel.app/work
**Figma prototype:** https://www.figma.com/proto/viW83K4WLdDSGYd3CtV2Lj/Pulse-%E2%80%94-Context-Aware-Focus-System--Community-

---

## What's in this repo

- A premium product landing page with staged headline animation, glossy 3D card stack, and reactive aurora background
- A 14-section editorial case study covering research, key decisions, prototype graveyard, design system, accessibility, outcomes, and interview-prep Q&A
- Full design system: dark theme, Geist typography, glossy violet cards, cursor-reactive motion

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 3.4** · custom CSS for 3D effects and glossy gradients
- **Geist + Geist Mono** typography via `next/font`
- Deployed on **Vercel**

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
├── components/       Reusable UI (Nav, Card3D, ModeSwitcher, Atmosphere, Reveal, Logo, Footer, ScrollTo)
├── work/             Case study page (/work route)
├── globals.css       Design system + 3D card + animation styles
├── layout.tsx        Root layout with fonts + atmosphere
└── page.tsx          Landing page
public/
└── assets/images/    Static images
```

## Credits

Design + engineering: **Prakhar Dewangan**
Inspired by Apple product pages, Linear, Nubank, and Rauno Freiberg.

---

## License

MIT — fork it, learn from it, attribute.
