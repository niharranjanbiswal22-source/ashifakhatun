# ✨ Ashifa Khatun — Luxury Birthday Celebration Experience

[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Synthesizer-F59E0B?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

> An immersive, high-performance, cinematic birthday experience engineered with cutting-edge frontend architecture, 60fps interactive animations, physics-based canvas simulations, custom glassmorphism design system, and Web Audio API synthesis.

---

## 🌟 Overview

This web application is a bespoke, interactive digital celebration experience dedicated to **Ashifa Khatun** for her birthday on **08 November 2026** at **Bari, Jajpur, Odisha**.

Designed with recruiter-level production polish, the application merges modern UI/UX principles with interactive gamification, audio engineering, and responsive fluid animations.

---

## 🚀 Key Engineering & Feature Highlights

### 🎭 1. Cinematic Opening Gate & Audio Unlock
- Interactive curtain-drop gate requiring user initiation to satisfy modern browser **Autoplay Policies**.
- Triggers synchronized background ambient music alongside custom harmonic frequency synthesizers.

### 👑 2. Dynamic Hero Experience
- Floating animated avatar badge, location coordinates, and glowing typography.
- Smooth scroll orchestration and interactive journey navigation.

### 📸 3. High-Performance Memory Album & Video Reel
- **Responsive Media Grid**: Supports high-resolution imagery and live video reels.
- **Interactive Lightbox**: Full-screen focus mode with keyboard navigation, gesture controls, and blur-backdrop glass panels.
- **Automated Slideshow Modal**: Dynamic autoplay slideshow with framer-motion transitions.

### 🎂 4. Interactive Virtual Cake & Candle Blow Physics
- Interactive multi-tiered cake with animated SVG candle flames.
- Interactive blow action that extinguishes flames, creates realistic rising smoke trails, and triggers golden confetti explosions accompanied by custom sound FX.

### 🎮 5. Birthday Catch Mini-Game
- Physics-based falling object catch game created in React.
- Basket movement via touch/drag/keyboard, scoring combos, sound cues, and celebratory winning animations.

### 🎆 6. Custom Canvas Fireworks & Confetti Engine
- Multi-particle fireworks canvas simulation featuring customized particle decay, gravity physics, and color dispersion.
- Integrated with `canvas-confetti` for celebratory tactile feedback.

### 💌 7. Guestbook & Wish Delivery
- Direct Formspree endpoint integration enabling visitors to submit real-time birthday wishes and heartfelt notes with form validation and success animations.

### 🎵 8. Zero-Dependency Web Audio API Sound FX
- Complete browser-native audio synthesis module (`src/utils/soundEffects.ts`) generating celebration chimes, candle-blow white-noise filters, and sparkle arpeggios on-the-fly.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19, TypeScript |
| **Build & Tooling** | Vite 8, Oxlint |
| **Styling & Design** | Tailwind CSS v4, Custom Glassmorphism, CSS Glow Filters |
| **Motion & Physics** | Framer Motion 14, HTML5 Canvas 2D API, Canvas Confetti |
| **Audio Engine** | Web Audio API (OscillatorNode, BiquadFilterNode, GainNode) |
| **Icons** | Lucide React |

---

## 📂 Project Directory Structure

```plaintext
├── public/
│   ├── audio/              # Background celebration music
│   ├── images/             # Ashifa's curated gallery & banner photos
│   ├── videos/             # Live birthday video reels
│   └── favicon.svg         # SVG favicon
├── src/
│   ├── assets/             # Brand and vector assets
│   ├── components/         # 18 Modular, decoupled React components
│   │   ├── BackgroundParticles.tsx
│   │   ├── BirthdayBannerSection.tsx
│   │   ├── BirthdayGame.tsx
│   │   ├── CelebrationFireworksSection.tsx
│   │   ├── CinematicReveal.tsx
│   │   ├── DateBadge.tsx
│   │   ├── FinalCinematicSection.tsx
│   │   ├── FireworksCanvas.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MemoryTimeline.tsx
│   │   ├── MusicPlayer.tsx
│   │   ├── Navbar.tsx
│   │   ├── OpeningScreen.tsx
│   │   ├── PersonalMessage.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── PhotoSlideshowModal.tsx
│   │   ├── SecretMessage.tsx
│   │   ├── SendMessageForm.tsx
│   │   ├── SurpriseBox.tsx
│   │   ├── TenWishes.tsx
│   │   ├── VirtualCake.tsx
│   │   ├── WhySpecial.tsx
│   │   └── WishGenerator.tsx
│   ├── config/
│   │   └── birthdayConfig.ts # Centralized content & personalization model
│   ├── utils/
│   │   └── soundEffects.ts   # Web Audio API synthesizers & sound loops
│   ├── App.tsx             # Root layout orchestrator
│   ├── main.tsx            # Vite entry point
│   └── index.css           # Tailwind CSS v4 design tokens
└── package.json
```

---

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/niharranjanbiswal22-source/ashifakhatun.git
cd ashifakhatun
```

### 2. Install dependencies
```bash
npm install
```

### 3. Launch development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 👤 Developer & Credits

Designed and developed with ❤️ by **Nihar Ranjan Biswal (NRB 04)**.

- **Portfolio**: [niharbiswal.vercel.app](https://niharbiswal.vercel.app/)
- **GitHub**: [@niharranjanbiswal22-source](https://github.com/niharranjanbiswal22-source)
- **Instagram (Ashifa)**: [@ashifa72575](https://www.instagram.com/ashifa72575?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==)

---

⭐ *If you enjoyed this project or found the animation and audio implementation helpful, don't forget to give it a star on GitHub!*
