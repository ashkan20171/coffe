# Ashkan Café — Bilingual Coffee Experience

Responsive static café website built with HTML, CSS and vanilla JavaScript.

## Features
- English-first interface, switchable to Persian with RTL layout
- Menu, cart, checkout demo, table reservation demo, customer pages and PWA support
- Accessible bilingual offline café concierge for menu and reservation guidance
- Dark theme, responsive layouts and locally bundled assets

## Run
Run `python -m http.server 8080` from this directory and open `http://localhost:8080`. Use a local web server for service worker support.

## Important limitations
This is a front-end demo. Authentication, orders and reservations use browser storage, not a secure backend or real payment/reservation service. The assistant is rule-based and offline, not a connected generative AI. Production use requires a backend, real validation, payments and authenticated APIs.

## Next steps
Add backend-driven inventory, booking availability, real authentication, secure payments, and a server-side AI endpoint with rate limiting and moderation.

## Stage 2 enhancements
- Bilingual instant menu search across both languages and ingredient descriptions
- Category filters, keyboard focus indicators, accessible results count and empty state
- Reservation date required and past dates blocked on the client (demo only)
- English SEO title and meta description on the home page
- No external JavaScript dependencies; catalog filtering uses safe DOM construction

**Note:** Prices in this version remain denominated in toman for both languages. No real-time currency conversion is implied. Client-side booking checks do not prevent double bookings across users.


## Stage 3 — Premium responsive UI
- Refined warm coffee palette, typography, surfaces, product cards and responsive hero.
- Accessible mobile navigation, keyboard skip link, visible focus indicators and reduced-motion support.
- Improved cart drawer semantics and keyboard dismissal; local-date reservation input minimum.
- English remains the default, Persian RTL remains selectable.
- Reservations, checkout and chatbot are still demo-only; a secure backend is required for real transactions and AI inference.


## Stage 4 — 3D-inspired premium art
- Original generated cinematic coffee artwork, stored locally as optimized WebP.
- Depth, glass-like accents, perspective hover cards, reduced-motion support.
- English default / Persian RTL retained.
- All commerce and reservations are still browser-local demos; AI assistant is rules-based.


## Stage 5 — Interactive café experience
- Favorites persisted locally with accessible heart controls and filter.
- Mouse-reactive 3D-style hero artwork (disabled for reduced-motion users).
- Accessible table selection states and local-date reservation minimum.
- Bilingual English-default interface retained.
- Important: checkout, reservations, accounts and assistant remain demo/local features; no real backend or payment gateway is connected.
