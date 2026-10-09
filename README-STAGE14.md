# Stage 14 — Localization performance and navigation hardening

- The localization module indexes initial text nodes once and reuses that list on subsequent language toggles instead of traversing the entire page each time.
- Dynamically generated components continue to use the `cafe:languagechange` event.
- Avoids duplicate skip-navigation links.
- Explicit language button semantics on all nine pages.
- Preserves default English/LTR, Persian/RTL, and existing visual assets.

## Limitations
This is a front-end-only demo. No real payments, reservations, or generative AI backend are connected. Browser-level performance tests are still recommended.

## Run
`python -m http.server 8000` from the project directory, then visit http://localhost:8000.
