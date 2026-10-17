<div align="center">

# ☕ ASHKAN CAFÉ
### A premium bilingual coffee experience

**English-first · فارسی-ready · Responsive · Accessible · 3D-inspired**

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![Localization](https://img.shields.io/badge/i18n-EN%20%7C%20FA-8B5E3C)
![Status](https://img.shields.io/badge/Status-Frontend%20Demo-C28C51)

*From browsing your next espresso to exploring the café atmosphere — an immersive, multilingual frontend showcase.*

</div>

---

## ✨ The experience

Ashkan Café is a **multi-page café storefront concept** built with **HTML, CSS and vanilla JavaScript**. It combines warm coffee-inspired art direction, layered 3D-style visuals, an interactive menu and right-to-left localization. The project explores how an evolving frontend can become more usable, inclusive and maintainable without introducing a heavyweight framework.

> **Portfolio transparency:** This is a frontend demonstration, **not** a production ordering or booking system. See [Current limitations](#-current-limitations) below.

## 🖼️ Visual preview

<p align="center"><img src="images/coffee-3d-art.webp" alt="Coffee-inspired 3D artwork from the project" width="760"></p>

*Visual asset from the project. Add real desktop/mobile screenshots to `docs/screenshots/` after browser verification.*

## 🚀 Features at a glance

| Experience | What it offers |
| :--- | :--- |
| 🌍 **English / فارسی** | English-first interface, Persian language option and LTR/RTL layout switching |
| ☕ **Menu discovery** | Product browsing, text search and category filtering |
| ♡ **Favorites & cart** | Browser-side favorites and shopping-cart interactions |
| 📅 **Table booking concept** | Interactive table/date selection with demo-only confirmation |
| 💬 **Café assistant** | Rule-based, offline conversational helper; **not** an LLM |
| 🎨 **Premium visuals** | Coffee-themed palette, 3D-inspired artwork, subtle motion and layered surfaces |
| 📱 **Responsive design** | Layouts designed for mobile, tablet and desktop |
| ♿ **Accessibility** | Keyboard affordances, visible focus and reduced-motion support |
| 📲 **PWA foundations** | Web manifest and service-worker assets (browser support varies) |
| 🧩 **Multi-page experience** | Menu, product, checkout, events, blog, gift card, account/dashboard and QR menu concepts |

## 🧰 Technology

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), no frontend framework
- **Localization:** JavaScript dictionaries, language-change events, RTL/LTR styling
- **Client state:** Browser storage for selected demo interactions
- **Progressive enhancement:** Responsive CSS, accessible controls, PWA assets
- **Development:** Local static HTTP server; no build step required

## ⚡ Run locally

**Prerequisite:** Python 3, or any static file server.

```bash
# Clone your repository (replace OWNER with your GitHub username)
git clone https://github.com/OWNER/ashkan-cafe-bilingual-experience.git
cd ashkan-cafe-bilingual-experience

# Serve from the directory containing index.html
python -m http.server 8000
```

Open **http://localhost:8000/index.html**. On Windows, `py -m http.server 8000` also works.

> Avoid opening the HTML pages via `file://`; some browser features require HTTP. If you have an old version cached, clear site data and unregister its service worker before testing.

## 🌐 Localization approach

The experience defaults to **English (LTR)** and offers **Persian (RTL)**. The localization logic lives in `js/i18n.js`, while navigation and other components respond to language changes. The translation catalog is **not yet complete for every dynamic string**; a production refactor should use stable message keys and automated coverage checks.

## 🗂️ Project map

```text
ashkan-cafe/
├── index.html             # Café landing page
├── product.html           # Product details
├── checkout.html          # Checkout concept (demo)
├── auth.html              # Account interface (demo)
├── dashboard.html         # Customer dashboard concept
├── events.html            # Events
├── blog.html              # Journal
├── gift-card.html         # Gift cards
├── qr-menu.html           # QR-friendly menu
├── css/                   # Base, premium and incremental styles
│   └── site-bundle.css    # Stylesheet entry point
├── js/
│   ├── app.js             # Core UI interactions
│   ├── i18n.js            # Localization
│   ├── assistant.js       # Rule-based café helper
│   └── stage21.js         # Navigation enhancements
├── images/                # Project visuals
├── manifest.webmanifest
└── sw.js
```

## 🧭 Engineering decisions

**Why vanilla JavaScript?** The project highlights browser APIs, DOM interactions and progressive enhancement without depending on a framework. **Why both LTR and RTL?** Bidirectional design tests layout resilience and localization beyond text replacement. **Why keep a migration roadmap?** The codebase contains incremental legacy CSS/JS modules; consolidating these is an explicit next step, not a completed claim.

## 🔒 Current limitations

- **Payments, reservations, orders, account access and loyalty** are frontend demonstrations and do **not** connect to a secure production backend.
- The assistant uses **predefined local responses**; it does **not** integrate with OpenAI or another generative AI API.
- Localization of dynamically inserted content may be incomplete.
- Visual assets simulate depth; this is **not** a full interactive 3D/WebGL product viewer.
- Automated end-to-end browser testing and production accessibility/performance audits have **not** been completed.

## 🛣️ Production roadmap

- [ ] Consolidate legacy stylesheets and event handlers into clear modules
- [ ] Replace text-based translation logic with keyed i18n catalogs and coverage tests
- [ ] Add Playwright end-to-end tests for all pages, language switching and mobile navigation
- [ ] Audit accessibility (WCAG), Core Web Vitals and responsive layouts
- [ ] Build a secure backend for orders, bookings and authentication
- [ ] Add server-side validation, rate limiting, monitoring and safe secret management
- [ ] Integrate a genuine AI assistant through a protected server-side API
- [ ] Add CI checks, deployment documentation and verified screenshots

## 🇪🇺 Built for an international audience

This portfolio project illustrates **frontend engineering**, **cross-language UX**, **accessibility awareness**, **maintainability**, and **incremental improvement of a legacy codebase** — capabilities relevant to product teams across Europe, including Germany. It is a learning and demonstration project, not evidence of production integrations.

## 🤝 Contributing

Suggestions and issues are welcome. Please include reproduction steps, browser version and screenshots where applicable. For language-related bugs, specify **English/LTR** or **Persian/RTL**.

## 📄 License

**No open-source license has been assigned.** All rights are reserved unless the repository owner adds a license. Contact the owner before reusing the source or artwork.

---

<div align="center">

**Crafted with care for design, localization and the web.** ☕

*Ashkan Café · A portfolio frontend experience*

</div>
