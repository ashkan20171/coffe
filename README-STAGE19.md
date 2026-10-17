# Stage 19 — Localization reliability and developer diagnostics

- Fixes language switching when localStorage is blocked: in-memory language state updates immediately.
- Adds an **opt-in** developer diagnostics overlay: open any page with `?diagnostics=1`.
- Overlay shows current language/direction and captures runtime errors, with a direct language toggle for manual testing.
- No polling, MutationObserver, third-party scripts, or permanent overlay in normal browsing.
- Existing visual assets, bilingual interface, and pages are retained.

## Run

```bash
python -m http.server 8000
```

Open `http://localhost:8000/index.html?diagnostics=1` and test English/Persian switching. Test all nine pages and inspect the browser console before production deployment. Reservation, payment, and AI services remain demo-only.
