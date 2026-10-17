# Stage 17 — Navigation and Language Reliability

- English remains the first-visit default; Persian switches the document to RTL.
- Navigation labels are updated explicitly on language-change events.
- Reservation minimum date is calculated in the visitor’s local calendar date, not UTC.
- Initial reservation table labels use the document language rather than direct localStorage access.
- No new polling, MutationObserver, or large rendering dependencies.
- Navigation focus styles and responsive menu refinements.

## Run

From `ashkan-cafe/`: `python -m http.server 8000` and open http://localhost:8000.

## Limitations

This is a static demo; reservations and checkout are not live. Browser interaction and performance should be verified on target devices before production deployment.
