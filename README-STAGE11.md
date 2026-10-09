# Ashkan Café — Stage 11: Stability and accessibility

## Changes
- Nonintrusive demo-status disclosure across all nine HTML pages.
- Bilingual dynamic table labels, including when language is switched without reload.
- Keyboard-accessible back-to-top control and reduced-motion support.
- No polling, MutationObserver, or extra network dependency.

## Run
From the `ashkan-cafe` directory run `python -m http.server 8000`, then visit http://localhost:8000.

## Scope
This is a static demonstration: orders, payments, reservations and AI responses are not connected to production services. Verify full functionality in your target browsers before deploying.
