# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**林宅血案互動體驗網站** - An immersive, interactive web experience about the Lin family massacre (林宅血案), a pivotal unsolved political murder case from Taiwan's White Terror era (1980). The site aims to present declassified government investigation reports as a deep, atmospheric horror-narrative experience inspired by the game "Devotion" (還願).

### Purpose

- Present factual, government-sourced investigation materials in an engaging narrative format
- Counter historical distortion from unauthorized film adaptations
- Enable public understanding of 40+ years of investigation history
- Provide action items (Transitional Justice Commission resources, GitHub community contributions)

### Source Materials (Public Government Documents)

- `促-林-short-version.pdf` — Transitional Justice Commission investigation report (促轉會調查報告)
- `林宅血案、陳文成命案重啟調查偵查報告.pdf` — Prosecutors' reinvestigation report (高檢署重啟偵查報告)
- `監112內正0004.pdf` — Control Yuan corrective action document (監察院糾正案文)

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (as needed)
- **Build Tool**: Vite
- **Deployment**: Static site (GitHub Pages or similar)
- **Language**: Traditional Chinese (繁體中文) as primary; UI chrome in both zh-TW and en

## Build & Dev Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run type-check   # TypeScript type checking
```

## Architecture

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   ├── narrative/    # Story-telling components (scroll-driven, reveal effects)
│   ├── timeline/     # Interactive timeline components
│   ├── interactive/  # Mini-games and interactive elements
│   └── layout/       # Page layout, navigation, mobile menu
├── chapters/         # Chapter-based page components (one per narrative section)
├── data/             # Structured JSON data extracted from PDFs
│   ├── timeline.ts   # Chronological events
│   ├── characters.ts # Key figures and relationships
│   ├── evidence.ts   # Key evidence items and surveillance records
│   └── investigations.ts # Investigation history across decades
├── hooks/            # Custom React hooks (scroll, animation, audio)
├── lib/              # Utilities, constants, types
├── styles/           # Global styles, Tailwind config extensions
└── assets/           # Static assets (images, audio if any)
```

### Design Philosophy

- **Mobile-first**: All layouts designed for mobile reading experience first
- **Atmospheric horror**: Dark UI, slow reveals, tension-building scroll effects — inspired by Devotion (還願)
- **Deep reporting style**: Long-form scrollytelling, progressive disclosure of information
- **Factual integrity**: All narrative content sourced from the three government documents; clearly distinguish fact from analysis
- **Accessibility**: Respect users who may find content disturbing; provide content warnings

### Key Narrative Structure

The site follows this chapter flow:
1. **序章** — Atmospheric intro, the date: February 28, 1980
2. **時代背景** — Political context (Kaohsiung Incident, martial law, opposition movement)
3. **案發經過** — The day of the massacre, minute-by-minute timeline
4. **調查歷程** — 40+ years of investigations (撥雲專案, 三○七專案, reinvestigations)
5. **監控真相** — Government surveillance evidence revealed by Transitional Justice Commission
6. **未解之謎** — Unanswered questions, destroyed evidence, blocked investigations
7. **行動呼籲** — What you can do (Transitional Justice resources, community contributions)

## Design System: 檔案恐怖 (Bureaucratic Horror)

See `design-prototype.html` for the living visual reference. The core concept: horror emerges from bureaucratic indifference and institutional cover-up, not graphic violence.

### Color Palette

```css
/* Core — near-black backgrounds */
--void: #080808;  --ink: #0D0A0A;  --ash: #1C1917;  --smoke: #292524;

/* Paper & Document */
--paper-aged: #E8DCC4;  --paper-fresh: #F4F1E8;

/* Blood & Danger — used sparingly for emphasis */
--blood-dark: #7F1D1D;  --blood: #991B1B;  --seal-red: #DC2626;

/* Incense & Warmth */
--incense: #D4834F;  --amber: #B45309;
```

### Typography

| Purpose | Font | Usage |
|---------|------|-------|
| Narrative body | Noto Serif TC | Main reading text, chapter content |
| Headings / UI | Noto Sans TC | Chapter titles, labels, buttons |
| Literary / quotes | LXGW WenKai TC | Document excerpts, emotional passages |
| Government docs | Courier New / monospace | Declassified files, timestamps, codes |

### Key Visual Elements

- **Film grain overlay**: Subtle animated noise on `body::after`, `opacity: 0.035`
- **Vignette**: `box-shadow: inset 0 0 250px 80px rgba(0,0,0,0.6)` on immersive sections
- **Redacted text**: Black bars (`background: #000; color: transparent`) that reveal on click/hover
- **Classification stamps**: Rotated semi-transparent overlay text (「解密」)
- **Document pages**: Aged paper background with margin notes and header borders
- **Timeline dots**: Red glow on hover (`box-shadow: 0 0 10px var(--blood-faded)`)
- **Scroll-triggered reveals**: IntersectionObserver with `threshold: 0.15`

### Chapter Visual Progression

1. **序章**: Pure void, date fades in slowly — maximum emptiness
2. **時代背景**: Timeline on dark background, informational
3. **案發經過**: Minute-by-minute blocks, giant "80" counter, tension builds via red
4. **調查歷程**: Investigation phases, structure diagrams
5. **監控真相**: Government document aesthetic (paper bg, stamps, redaction bars)
6. **未解之謎**: Expandable mystery cards with blood-red left border
7. **行動呼籲**: Slightly lighter gradient, action grid, hopeful shift

### Mobile-First Principles

- `font-size: 16px` on mobile, `18px` on desktop
- `clamp()` for all responsive font sizes
- Touch-friendly tap targets (min 44px)
- Nav dots hidden on mobile (`display: none` under 640px)
- `scroll-snap-type: y proximity` for chapter alignment

## Content Guidelines

- All historical claims must be traceable to one of the three source PDFs
- Use ROC calendar dates (民國) alongside Western dates where the source does
- Sensitive content (violence descriptions) should be presented with care — atmospheric tension over graphic detail
- The tone should evoke unease and injustice, not exploitation
