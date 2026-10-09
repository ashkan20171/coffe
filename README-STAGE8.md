# Ashkan Café — Stage 8 Header Recovery

This release fixes the missing navigation and footer by rendering them directly in every HTML page, without requiring JavaScript to run. The shared script now only binds behavior. A new stylesheet fixes header contrast and mobile navigation. Service-worker caching uses a new version and network-first fetches to avoid stale HTML.

Run from a local server (for example `python -m http.server 8000`) and visit `http://localhost:8000`. If an older version is shown, hard refresh or clear this site's service-worker cache. English remains the default; Persian is available through the language button.

Bookings and checkout remain demo-only; the assistant is rule-based rather than a hosted generative AI model.
