# Astrix Digital - Studio Website

A bespoke, production-quality studio website for **Astrix Digital**, specializing in Shopify store development, Webflow website design, custom SaaS applications, and UI/UX digital product experiences.

Built with **light editorial aesthetics**, electric blue brand accents, and a strict **framework-free architecture** (pure HTML5, CSS3, vanilla JavaScript ES6+, and authentic SVGs).

---

## 1. Brand Identity & Design System

- **Primary Electric Blue:** `#145DFF`
- **Deep Blue Accent:** `#073BCC`
- **Near-Black:** `#101114`
- **Dark Surface:** `#17191F`
- **Soft Background:** `#F6F7FB`
- **Subtle Border:** `#E7E9EF`
- **Card Radius:** `28px`
- **Typography:** *Plus Jakarta Sans* via Google Fonts

---

## 2. Architecture & File Structure

```
/AstrixDigital
├── index.html              # Semantic HTML5 homepage structure (13 sections + case study modal)
├── css/
│   └── style.css           # Design tokens, responsive grid, animations, and micro-interactions
├── js/
│   ├── main.js             # Navigation, infinite project rail, filtering, modal, FAQ & form validation
│   └── animations.js       # IntersectionObserver scroll reveals, hero parallax & timeline progress
├── assets/
│   ├── images/
│   │   └── logo.png      # Original 3D Astrix Digital brand mark
│   └── projects/
│       ├── aura_fashion.jpg       # Aura Atelier luxury apparel showcase
│       ├── lumen_jewelry.jpg      # Lumen Fine Jewelry artisanal showcase
│       ├── stride_architecture.jpg# Stride Ventures editorial showcase
│       └── verve_botanicals.jpg   # Verve Botanicals high-conversion showcase
└── README.md               # Studio documentation and customization guide
```

---

## 3. Sections Overview

1. **Navigation:** Sticky glassmorphism header with Astrix logo, desktop navigation, responsive mobile drawer menu, and "Start a Project" CTA.
2. **Hero:** Confident editorial typography, primary/secondary CTAs, and a custom layered visual composition (floating browser frame, live revenue telemetry card, and Astrix 3D emblem).
3. **Trust & Capabilities Marquee:** Seamless, infinite horizontal loop ticker with hover pause.
4. **Selected Work / Portfolio:** 6 distinctive demonstration projects with large rounded cards (28px radius), infinite horizontal looping rail, category filters (Shopify, Webflow, SaaS), layout switcher (Rail vs Grid), and an interactive case study detail modal.
5. **Services:** 4 detailed service panels (Shopify Development, Webflow Development, Custom SaaS, UI/UX Design) with bespoke visual mockups (interactive PDP customizer, Webflow designer canvas, telemetry dashboard, and design token architecture).
6. **Why Astrix Digital:** 6 core studio principles with a custom SVG system diagram connecting Design Craft, Astrix Core, and Engineering.
7. **Development Process:** 4-stage connected timeline (Discover, Design, Develop, Launch & Refine) with deliverables and progress indicator.
8. **Technology & Capabilities:** Authentic vector brand marks for Shopify, Webflow, HTML5, CSS3, JavaScript, Liquid, REST APIs, GraphQL, and Git, with interactive tooltips.
9. **About the Studio:** Design-led engineering manifesto and an Astrix blueprint schematic.
10. **What You Can Expect:** Honest, concrete commitments (clear communication, thoughtful technical decisions, responsive QA, clean handover).
11. **FAQ:** Accessible accordion with 7 required questions, single-item open policy, and keyboard navigation.
12. **Contact / Project Enquiry:** High-converting enquiry form with project type and budget selectors, real-time client validation, and direct mailto fallback.
13. **Footer:** High-contrast dark surface, Astrix logo, navigation links, services directory, dynamic copyright year, and back-to-top interaction.

---

## 4. Running Locally

The website requires no complex build tools or Node dependencies. You can run it with any static web server:

### Using Python:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Using VS Code / IDE:
Right click `index.html` and choose **"Open with Live Server"**.

---

## 5. Customization & Maintenance

- **Contact Email:** Update `STUDIO_CONFIG.contactEmail` in `js/main.js` to change the studio destination email.
- **Project Data:** Modify or expand the `PROJECTS_DATA` dictionary in `js/main.js` to add real client case studies.
- **Design Tokens:** Edit CSS custom properties in `:root` inside `css/style.css` to fine-tune typography, spacing, or color palettes.
- **Social Links:** Update links in `index.html` under the footer and mobile drawer.
