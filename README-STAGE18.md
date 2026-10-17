# Stage 18 — Premium Inner Pages & Navigation

Adds a shared responsive visual layer to all nine pages, an optimized local 3D-look coffee image background, keyboard focus indicators, active navigation state, and bilingual page context markers.

English remains the default language. The existing language switch is preserved; this stage does not add duplicate click handlers. The 3D-look image is not a WebGL model.

## Run

From the `ashkan-cafe` folder: `python -m http.server 8000`, then open `http://localhost:8000`. Test English/Persian, navigation and responsive behavior.

## Limitations

No live payment or booking backend. Existing JavaScript modules and translations require end-to-end browser regression tests.
