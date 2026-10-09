# Stage 13 — Navigation & Localization Reliability

Changes across all HTML pages:
- Consistent Stage 13 stylesheet and script loading.
- Visible bilingual direction indicator on pages with a main landmark.
- Language button accessibility metadata.
- Local-date minimum for reservations (avoids UTC date rollover).
- Keyboard focus and mobile header styling improvements.
- No polling loops or MutationObserver introduced.

## Run
From the `ashkan-cafe` folder: `python -m http.server 8000`, then visit http://localhost:8000.

## Limitations
This is a static demonstration. Payments, bookings and authentication are not production services. Full cross-browser UI tests and exhaustive translation coverage are not certified.
