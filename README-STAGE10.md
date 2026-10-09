# Stage 10 — Loading & language hotfix

- Removed expensive DOM-wide MutationObserver translation feedback loop, a likely cause of the unresponsive page.
- Language switch is now immediate and does not reload the page.
- Added reversible static-text translation and explicit `cafe:languagechange` event.
- Removed product observer to avoid re-render feedback loops.
- Disabled old service-worker registration and unregisters existing registrations to avoid stale cached scripts.

## Run
From this directory run `python -m http.server 8000`, then open http://localhost:8000. If an old version persists, clear this site's data in browser developer tools.

Note: This is a targeted hotfix; full browser integration testing and translation coverage of all dynamic widgets are still pending.
