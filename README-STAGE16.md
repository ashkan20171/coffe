# Stage 16 — Bilingual navigation hardening

- Added reverse translations for English-first static labels, allowing Persian to display even when original HTML contains English.
- Added an explicit `cafe:contentupdated` event for translating freshly inserted content without continuous DOM observers.
- Added mobile navigation/language-button visibility safeguards.
- Cache-busted the localization script (`?v=16`).

## Test manually
1. Start `python -m http.server 8000` inside `ashkan-cafe`.
2. Open `http://localhost:8000` in a fresh browser tab.
3. Verify language changes both ways, including navigation and reservations.
4. Test all nine pages, mobile viewport, cart, and the browser console.

This remains a frontend demo; checkout and reservations do not use a production backend.
