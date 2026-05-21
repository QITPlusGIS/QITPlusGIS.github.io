# ArcGIS Search Test App

A minimal React app demonstrating the ArcGIS JavaScript SDK (`@arcgis/core`) and the ArcGIS Search API. The app renders a full-screen map and provides four search examples in the top-right:

- Global search (default ArcGIS search sources)
- Australia-only search (sends `countryCode=AU` to the ArcGIS World Geocoding service)
- Whitsundays-only search (limits results to a fixed extent)
- Australia-within-view search (restricts results to the visible map area)

Implementation details
- Main map and widgets: `src/App.tsx`
- Minimal global styles: `src/App.css` and `src/index.css`
- Uses `@arcgis/core` (JS API) and the `MapView` approach for direct control over the view and widgets.

Getting started

1. Install dependencies

```bash
npm install
```

2. Add your ArcGIS API key

- Copy `.env.example` to `.env.local` and set your key:

```env
VITE_ARCGIS_API_KEY=YOUR_KEY_HERE
```

Notes:
- `.env.local` is ignored by the repo (matches `*.local`) so your key will not be committed.
- When deploying to GitHub Pages you should build locally first so the API key is injected into the `dist` assets (the built bundle will contain the key client-side).

Run the app

```bash
npm run dev
# open http://localhost:5173 (or the URL printed by Vite)
```

Build for production

```bash
npm run build
# then deploy contents of `dist/` to GitHub Pages or your static host
```

What to look at in `src/App.tsx`
- `esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY` — how the API key is injected
- `Map` + `MapView` creation (full-screen map container)
- creation of two `Search` widgets; the Australia widget uses `includeDefaultSources: false` and a single source with `countryCode: 'AU'` so it sends the country restriction to the geocode endpoint (no source dropdown)

Troubleshooting
- If the map is blank, check browser console for network errors or authentication failures (missing/invalid API key).
- Ensure network access to ArcGIS Online endpoints from your environment.

License
- No license specified — add one if you plan to publish or share publicly.
