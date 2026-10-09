# Stage 12 — Accessibility and stability polish

This release builds on Stage 11 and preserves the static HTML/CSS/JavaScript architecture.

- Keyboard-accessible skip navigation on every HTML page.
- Accessible back-to-top button with reduced-motion support.
- Localized demo-status disclaimer in both languages.
- Language-sensitive accessible navigation labels.
- No additional polling loops, observers, frameworks or remote dependencies.

Run `python -m http.server 8000` from the ashkan-cafe folder and open http://localhost:8000.

Important: this is a static demo; payments, accounts and reservations are not production services. Full browser integration testing is still required.
