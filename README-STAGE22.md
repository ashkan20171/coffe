# Stage 22 — Image visibility fix

Fixed the hero image being hidden by the Stage 6 `.s6-fallback-art { display:none!important }` CSS rule, which affected English mode. Both the original hero image and the CSS 3D cup are now visible. Removed scroll-reveal opacity dependency that could hide image-containing sections when an observer failed. Added a fallback for broken image URLs and eager loading for hero imagery.

Test locally with `py -m http.server 8000`. Hard refresh or clear old PWA cache if necessary. Browser E2E testing has not been performed.
