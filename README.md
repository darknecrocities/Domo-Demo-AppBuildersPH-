# 🐼 DomoDomo — AppBuildersPH Show & Tell Presentation

<div align="center">

![DomoDomo Presentation Banner](/public/assets/logos/domodomo_logo.png)

### *From Student Struggles to Hackathon Glory — Building a 240+ Local-First Agentic Ecosystem*

[![React 19](https://img.shields.io/badge/React-19.0-black?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-black?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-black?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black?style=flat-square)](LICENSE)
[![Local-First](https://img.shields.io/badge/Architecture-100%25%20Local--First-black?style=flat-square)](#)
[![Event](https://img.shields.io/badge/Event-AppBuildersPH%20Show%20%26%20Tell-black?style=flat-square)](#)

</div>

---

## 📌 Overview

This repository contains the interactive presentation web application built for the **AppBuildersPH Show & Tell Demo Session**. 

Built with **React 19**, **Vite**, and **TypeScript**, the keynote slides document the creation, student origins, community impact, architecture evolution, and agentic future of [**DomoDomo**](https://domodomo.site/) — an open-source, local-first platform of 240+ browser tools and autonomous agent capabilities.

### 🎙️ Speaker Profile
* **Presenter**: **Arron Parejas**
* **Title**: Machine Learning Engineer Intern & Founder of DomoDomo
* **Community Leadership**: Former Google Developer Groups on Campus (GDGoC) – Holy Angel University Chapter Lead
* **Competition**: 1st Place Hackathon Champion (Caffeine.ai Championship)
* **Tagline**: *"We offer you an ecosystem."*

---

## 🌟 The Core Message

> *"We kept asking ourselves: What if everything people need could exist in one place? Private by default, free forever, and running 100% on your own device."*

Students and developers are exhausted by modern software fragmentation:
- **Tab Overload**: Juggling 15+ browser tabs just to format a document, compress a video, or run an AI prompt.
- **Predatory Paywalls**: Getting blocked by $20/month subscriptions and daily 3-action limits on a typical **$2 student budget**.
- **Privacy Concerns**: Uploading confidential homework, proprietary code, and personal files to remote third-party cloud servers.

**DomoDomo** solves this by delivering a **100% client-side sandbox** powered by WebAssembly and local neural runtimes — zero cloud telemetry, zero subscriptions, and complete offline capability.

---

## 🗺️ Presentation Slide Outline (15 Slides)

| # | Slide Title | Keynote Topic & Demo Focus |
| :-: | :--- | :--- |
| **01** | **DomoDomo Platform** | Keynote opening: The philosophy of a unified, 100% client-side ecosystem. |
| **02** | **Arron Parejas** | Speaker intro: ML Engineer Intern, GDGoC-HAU leadership, and open-source journey. |
| **03** | **The Student Struggle** | The genesis: Tab overload, subscription paywalls, and the $2 student budget. |
| **04** | **The Reunion & The Win** | Reconnecting with teammate Ram after 5 years to win 1st Place at Caffeine.ai Hackathon. |
| **05** | **The Story of the Cap** | How a freebie hackathon cap became DomoDomo's permanent symbol of humility and roots. |
| **06** | **Community as Catalyst** | Leading GDGoC-HAU, democratizing tech education, and mentoring the next generation. |
| **07** | **Phase 1: Local Sandbox** | Replacing remote servers with WebAssembly (FFmpeg.wasm, pdf-lib, Tesseract.js). |
| **08** | **Phase 2: Local Agentic AI** | Connecting directly to local Ollama runtimes and in-browser neural networks. |
| **09** | **The 240+ Tools Ecosystem** | Comprehensive breakdown across 17 tool suites (PDF, Photo, Dev, Forensics, Audio, Spatial). |
| **10** | **Domo Agent Hub** | Sequential/parallel persona chains, local cognitive memory (`domo_journal.md`), and MCP bridge. |
| **11** | **DomoSkills Marketplace** | 200+ modular agent skills for Antigravity, Claude Code, Cursor, and Codex with one-line CLI installs. |
| **12** | **Advanced AI Studio** | Node-based visual AI flows, 6 local fine-tuning methods (QLoRA, LoRA, DPO), and vector RAG. |
| **13** | **Significance & Access** | Empowering air-gapped developers, students, and institutions with zero cloud dependency. |
| **14** | **Core Philosophy** | *"Done is better than perfect. Shipped is better than planned."* |
| **15** | **The Road Ahead & Connect** | Roadmap, open-source repositories, links, and scan-to-connect QR code. |

---

## 🚀 Shipped Products Featured in the Ecosystem

| Product | Role & Description |
| :--- | :--- |
| **DomoDomo** | Flagship open-source toolbox featuring 240+ offline web utilities and client-side AI studios. |
| **Buddy** | Context-aware local AI companion assisting students and developers with code and writing. |
| **DomoSkills** | Rapidly growing directory of 200+ agent skills compatible with modern AI agent runtimes. |
| **AgentDeck** | Visual workspace for chaining multi-agent persona pipelines with live tool execution. |
| **HireMe** | Interactive developer talent portfolio and project showcase engine. |

---

## 💻 Keynote Application Features

* **Directional Transitions**: Smooth cubic-bezier slide transitions that react to forwards (`slide-enter-right`) and backwards (`slide-enter-left`) navigation.
* **Minimalist Monochrome Aesthetics**: Clean high-contrast palette built on typography tokens (`Space Grotesk`, `Playfair Display`, `Inter`, `JetBrains Mono`).
* **Slide Overview Grid Drawer (`G` or `Esc`)**: High-level visual index to jump instantly to any of the 15 slides.
* **Speaker Notes Drawer (`N`)**: Presenter notes panel with talking points, timing cues, and audience engagement prompts.
* **Screenshot Lightbox**: Click on any architecture diagram, photo, or product screenshot to zoom in high resolution.
* **Theme Toggle (`T`)**: Instant switch between Monochrome Dark (`#0c0d0e`) and Monochrome Light (`#fcfcfc`).
* **Fullscreen Mode (`F`)**: Distraction-free presentation display for projector and conference screens.
* **Multi-Screen Responsive**: Tested and optimized for ultra-wide displays, laptops, tablets, and mobile viewports.

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Description |
| :--- | :--- |
| `→` / `Space` / `PageDown` | Advance to next slide |
| `←` / `PageUp` | Return to previous slide |
| `Home` / `End` | Jump to First / Last slide |
| `Esc` / `G` | Toggle Slide Overview Grid |
| `N` | Toggle Presenter Notes Panel |
| `F` | Toggle Fullscreen Mode |
| `T` | Toggle Monochrome Dark / Light Theme |
| `?` | Toggle Keyboard Shortcuts Modal |

---

## 🛠️ Getting Started & Running Locally

### Prerequisites
* **Node.js**: v18.0 or higher
* **npm**: v9.0 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/darknecrocities/Domo-Demo-AppBuildersPH-.git

# 2. Navigate to project directory
cd Domo-Demo-AppBuildersPH-

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Building for Production
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Repository Structure

```
domodemo/
├── index.html                  # HTML entry point with Google Fonts & SEO metadata
├── package.json                # Project dependencies & scripts (React 19 + Vite)
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler configuration
├── public/
│   └── assets/
│       ├── logos/              # Official DomoDomo branding & product icons
│       │   ├── domodomo_logo (1).jpg
│       │   ├── domodomo_logo.png
│       │   └── product/        # Buddy, DomoSkills, AgentDeck, HireMe logos
│       ├── photos/             # Profile, hackathon win, and achievement photos
│       └── screenshots/        # Real captures from domodomo.site
└── src/
    ├── App.tsx                 # Root layout, keyboard listeners & modal controllers
    ├── main.tsx                # React entry point
    ├── index.css               # Minimalist monochrome design tokens & animations
    ├── data/
    │   └── slidesData.ts       # Structured 15-slide keynote data model & notes
    └── components/
        ├── Navigation.tsx      # Top appbar with progress line & slide counter
        ├── SlideRenderer.tsx   # Bespoke layout renderer for all 15 slides
        ├── SlideDrawer.tsx     # Slide overview thumbnail drawer (G / Esc)
        ├── SpeakerNotesModal.tsx # Presenter cues & talking points panel (N)
        ├── LightboxModal.tsx   # High-resolution screenshot zoom viewer
        └── ShortcutsModal.tsx  # Keyboard shortcuts overlay (?)
```

---

## 🔗 Connect with the Creator

* **DomoDomo Platform**: [https://domodomo.site/](https://domodomo.site/)
* **GitHub**: [@darknecrocities](https://github.com/darknecrocities)
* **LinkedIn**: [Arron Parejas](https://www.linkedin.com/in/arron-parejas/)
* **Portfolio**: [arronparejas.dev](https://arronparejas.dev)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Built for the community with passion for students, local-first computing, and open-source software.
