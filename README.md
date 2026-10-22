# Appliance Service Website Demo

An Arabic, right-to-left frontend project by Omar Gouda for an appliance-maintenance service interface. This repository consolidates two closely related supplied website variants into one generic portfolio demonstration.

## Features

- Responsive service sections and hash-based navigation.
- Light/dark theme stored locally in the browser.
- FAQ accordions and appliance-service tabs.
- Demo testimonials with locally computed rating summaries.
- Local browser storage for demonstration review data.

## Run

Requires a browser and, for the suggested local server, Python 3:

```bash
python -m http.server 8000
```

Open http://localhost:8000. There is no build step or backend. Externally hosted dependencies require internet access.

## Important demo behavior

This is **not an operating repair service or an authorized manufacturer website**. Booking and contact actions show a local demo message and do not send requests. Testimonials, counters and marketing copy are illustrative UI content, not verified business claims. Do not enter personal information.

During portfolio preparation, source phone/WhatsApp and external booking destinations were removed, manufacturer branding was generalized, the logo was replaced with a simple generic demo logo, and a visible Arabic demo notice was added. The visual asset provenance has not been independently established; review asset permissions before commercial reuse.

## Quality improvements

- Removed hardcoded inflated review totals; summaries now reflect the current demo review list.
- Replaced insertion of user-provided review text through `innerHTML` with text nodes.
- Added handling for malformed/unavailable local storage and invalid rating values.
- Checked local HTML asset paths and anchors.

## Checks

Requires Node.js for the JavaScript checks:

```bash
node --check script.js
node tests/reviews.test.cjs
```

Checks cover malformed stored JSON, non-array input, invalid ratings, summary calculations and disabled external contact destinations. Static validation found no missing local HTML assets or anchors. A complete interactive, cross-browser and mobile accessibility audit has not been performed.

## Structure

- `index.html`: Arabic interface
- `style.css`: layout, responsive styles and theme
- `script.js`: navigation, tabs, theme and demo review behavior
- `images/`: supplied demonstration assets and generic logo
- `tests/`: targeted JavaScript checks

## Provenance

Based on the supplied `maintenance-kriazi--main.zip` variant. The LG archive follows substantially the same page architecture and is not published as a separate portfolio project. This cleanup preserves the underlying website work while presenting one generic, explicitly labelled demo.
