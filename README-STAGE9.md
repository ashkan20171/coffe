# Stage 9 — Navigation & Accessibility Stabilization

- Rebuilt the mobile navigation trigger across all HTML pages.
- Fixed duplicate language-switch event handlers that could cancel each other.
- Added ARIA expanded state, Escape/outside-click closing, responsive breakpoint reset and skip-to-content link.
- Kept English default and Persian RTL behavior.
- Added dedicated `css/stage9.css` and `js/stage9.js` to all pages.

## Run
Use `python -m http.server 8000` from this folder and visit http://localhost:8000/.
Clear old PWA cache or hard refresh after updating. Checkout, reservations and chatbot responses are demos, not live services.
