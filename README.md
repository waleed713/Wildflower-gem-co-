# Wildflower Gem Co. — Website

```
wildflower-website/
├── index.html        page markup (all sections, modals, drawers)
├── css/style.css     all styles (variables at the top: colours, fonts)
├── js/main.js        products, cart, search, forms, animations
├── images/           all photos + logo (webp / png)
└── fonts/            put custom brand font here (see fonts/README.txt)
```

## Quick edits (js/main.js, top of file)
- `WA`   WhatsApp number (international format, no +)  -> currently 923215459190
- `MAIL` inbox that receives all form leads (FormSubmit AJAX; hidden, never shown in UI)
- `P`    product list: id, name, keywords, price (USD), image key, review count, new-flag
- `IM`   image key -> file path in /images

## First-time setup for lead emails
Open the site on your real hosting, submit any form once, then click the activation link
FormSubmit emails to the lead address. After that every form arrives in that inbox.

## Run locally
Just open index.html, or serve the folder:  `python3 -m http.server 8000`

## External resources (need internet)
Google Fonts (Cormorant Garamond, Jost, Pinyon Script) and Font Awesome 6.5.1 (footer social icons) from cdnjs.

## Notes
- Account popup is front-end only (no password storage / verification).
- Social links in the footer are placeholders (`#`) — replace with your real URLs in index.html.
