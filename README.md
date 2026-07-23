# Aakriti — Portfolio Site

A 3-file static site (no build step, no dependencies to install):

```
portfolio/
├── index.html   → all content & structure
├── style.css    → theme (charcoal + gold + burnt orange, "ledger/terminal" look)
└── script.js    → scroll reveals + ticker/nav behaviour
```

## Open it in VS Code

1. Unzip the folder you downloaded and open it in VS Code:
   `File → Open Folder…` → select the `portfolio` folder.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it —
   Extensions panel (`Ctrl/Cmd+Shift+X`) → search "Live Server" → Install.
3. Right-click `index.html` → **Open with Live Server**. It'll open in your
   browser and auto-refresh every time you save a file.

No `npm install`, no bundler — just edit and save.

## What to edit where

- **Text/content/links** → `index.html` (it's organised in commented sections:
  Ticker, Nav, Hero, About, Ledger/Skills, Case Files, Experience, Credentials,
  Contact).
- **Colours, fonts, spacing** → `style.css`, top of file under `:root { ... }`
  — every colour and font is a named variable, so you can re‑theme the whole
  site by changing values there.
- **Scroll animations / ticker speed** → `script.js` and the
  `@keyframes ticker-scroll` rule in `style.css`.

## Adding the Tableau screenshots later

Once your Tableau dashboard is finished:

1. Drop the screenshot(s) into a new `assets/` folder inside `portfolio/`.
2. In `index.html`, find the `<div class="wip-note">` block inside the
   **Case Files** section and replace it with an `<img>` tag pointing at your
   new file, e.g.:
   ```html
   <img src="assets/tableau-dashboard.png" alt="Fraud Risk Command Center — Tableau dashboard" class="case-screenshot">
   ```
3. Remove the `in progress` pill next to the Tableau link if the dashboard is
   finished.

## Deploying to GitHub Pages (same setup as your NexaBank project)

1. Create a new GitHub repo, e.g. `aakriti-portfolio`.
2. Push these three files (and any `assets/` you add) to the repo's `main`
   branch.
3. In the repo: **Settings → Pages → Branch → `main` / root → Save**.
4. Your site will be live at:
   `https://aakritibalachandran.github.io/aakriti-portfolio/`
5. (Optional) Rename the repo to `aakritibalachandran.github.io` if you want
   this to be your root profile site instead of a project page.

## Notes

- All content is pulled directly from your resume — nothing invented beyond
  section framing and the project descriptions written from your NexaBank
  case-file page.
- Fully responsive down to mobile, keyboard-focus visible, and respects
  `prefers-reduced-motion` for the ticker/scroll animations.
