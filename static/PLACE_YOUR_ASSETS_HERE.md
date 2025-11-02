Place your site assets here:

- `favicon.ico` — put your ICO file at `static/favicon.ico` so browsers will use it as the primary favicon.
- `P-Q Logo.png` — put your header/footer PNG logo at `static/P-Q Logo.png`.

The app is already wired to use `/static/P-Q Logo.png` for the header and footer. If the PNG is not present, the code falls back to `P-Q Logo.svg`.

If you prefer a different folder layout, update `index.html` and `App.tsx` to point to the new paths.
