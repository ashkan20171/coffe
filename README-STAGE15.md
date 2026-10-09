# Stage 15 — Localization resilience & navigation hardening

- Added a safe language preference fallback when browser storage is unavailable.
- Added `cafeI18n.refresh(root)` for explicitly translating content inserted after initial page load; no MutationObserver or polling.
- Preserved English as the default and Persian as the optional RTL language.
- Made navigation action buttons explicitly `type=button`.
- Added visible no-JavaScript guidance and responsive focus styling.

## Manual verification checklist

Serve over HTTP (e.g. `python -m http.server 8000`), visit all nine pages, toggle English/Persian twice, inspect console, and test mobile navigation and cart. This release has static syntax and archive checks, not a full browser E2E certification.
