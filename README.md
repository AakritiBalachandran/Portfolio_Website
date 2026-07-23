# Aakriti — Personal Portfolio

A personal portfolio site for **Aakriti**, a finance professional (MBA) working across
data analytics, fraud/AML analytics, and financial risk. The site is built as a
dependency-free static site — plain HTML, CSS, and JavaScript — styled around a
finance/ledger-inspired visual language (charcoal, gold, and burnt-orange, with
exhibit-style project cards) rather than a generic developer-portfolio template.

**Live site:** _add your GitHub Pages URL here once deployed — see [Deployment](#deployment)_
**Résumé:** [`assets/Aakriti_Resume.pdf`](./assets/Aakriti_Resume.pdf)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Customisation Guide](#customisation-guide)
- [Content Sourcing](#content-sourcing)
- [Accessibility & Performance](#accessibility--performance)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository contains the full source for a single-page portfolio site covering:

- **Profile** — a summary of finance and analytics experience across fraud/AML,
  market risk, and BI dashboarding.
- **Skillset Ledger** — languages/tools, risk & compliance domain skills, and
  analytics/modelling capabilities.
- **Case Files** — four in-depth project write-ups:
  - **NexaBank Analytics** (flagship) — a 10-query PostgreSQL fraud/AML
    investigation suite, an Excel Fraud Intelligence Dashboard, and a 6-sheet
    Tableau workbook, with every SQL query viewable in-browser and every
    dashboard screenshot annotated with an analytical interpretation.
  - **Northwind Traders — Sales & Revenue Analytics** (Power BI)
  - **Movie Rental Analytics — Sakila DVD Rental Store** (Power BI)
  - **Portfolio Optimisation & Market Risk Assessment** (Excel — CAPM, VaR, Monte Carlo)
- **Experience** — a timeline of internships and full-time roles.
- **Credentials** — education, certifications, and published research.
- **Contact** — résumé (view/download), email, phone, GitHub, and Tableau Public.

## Features

- **Zero build step.** No `npm install`, no bundler, no framework — open
  `index.html` and it runs.
- **In-browser SQL viewer.** Each of the 10 NexaBank investigations is clickable
  and opens the full PostgreSQL query (with comments) in a modal, sourced from
  `sql-data.js`, with a one-click copy button.
- **Exhibit-style screenshot lightbox.** Every dashboard screenshot (Power BI and
  Tableau) opens full-size in a modal alongside its written interpretation —
  keyboard-navigable (`Tab` / `Enter` / `Esc`) and dismissible by backdrop click.
- **Scroll-aware navigation** with active-section highlighting and reveal-on-scroll
  animations, both of which respect `prefers-reduced-motion`.
- **Fully responsive**, from a 4-column desktop layout down to a single-column
  mobile view.
- **Downloadable résumé** embedded directly in the site (view and download,
  available from both the hero section and the Contact section).

## Tech Stack

| Layer      | Choice                                                                 |
|------------|-------------------------------------------------------------------------|
| Markup     | Semantic HTML5                                                          |
| Styling    | Hand-written CSS3 (custom properties / design tokens, CSS Grid, Flexbox) |
| Behaviour  | Vanilla JavaScript (ES6+, no framework)                                 |
| Fonts      | [Fraunces](https://fonts.google.com/specimen/Fraunces) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (data/code) |
| Hosting    | GitHub Pages                                                             |

No package manager, no build pipeline, no external JS dependencies at runtime.

## Project Structure

```
portfolio/
├── index.html                        # All markup and content, organised in commented sections
├── style.css                         # Design tokens (:root), layout, and component styles
├── script.js                         # Scroll reveals, nav highlighting, lightbox, SQL viewer, ticker
├── sql-data.js                       # Full text of the 10 NexaBank PostgreSQL queries
├── README.md                         # You are here
└── assets/
    ├── Aakriti_Resume.pdf            # Résumé (view/download from the site)
    ├── aakriti-portrait.jpg          # Headshot (hero section + nav avatar)
    └── Tableau_screenshots/          # 6 NexaBank Tableau dashboard exports
        ├── 1_Fraud_Intelligence_Dashboard.png
        ├── 2_Portfolio_Health.png
        ├── 3_Real_Time_Ops_Monitor.png
        ├── 4_Individual_Account_Explorer.png
        ├── 5_Ring_Risk_Profile.png
        └── 6_Risk_Concentration_by_Fraud_Type.png
```

The Northwind and Movie Rental project screenshots are not stored locally — they're
pulled at runtime directly from their respective GitHub repositories
([Northwind-Traders-Sales-Analytics](https://github.com/AakritiBalachandran/Northwind-Traders-Sales-Analytics),
[Movie_Rental_Analytics](https://github.com/AakritiBalachandran/Movie_Rental_Analytics)),
so those two stay in sync automatically if the source repos are updated.

## Getting Started

### Prerequisites

Just a modern web browser. No Node.js, no package manager, and no build tools
are required to run or edit this site.

### Run locally

**Option A — VS Code + Live Server (recommended)**

1. Clone or download this repository and open the folder in VS Code:
   `File → Open Folder…`
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   extension (Extensions panel → search "Live Server" → Install).
3. Right-click `index.html` → **Open with Live Server**. The site opens in your
   default browser and auto-refreshes on every save.

**Option B — Any static file server**

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if installed)
npx serve .
```

Then open `http://localhost:8000` (or the port shown) in your browser.

**Option C — Direct file open**

Double-click `index.html`. Everything works except that some browsers restrict
`fetch`-style asset loading from the `file://` protocol — a local server (Option A
or B) is recommended for the most reliable experience.

## Deployment

This project is designed to deploy to **GitHub Pages** with no configuration:

1. Push this repository's contents to the `main` branch of a GitHub repo
   (e.g. `aakriti-portfolio`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
5. GitHub will publish the site at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
6. *(Optional)* To make this your primary GitHub Pages profile site instead of a
   project page, name the repository `<your-username>.github.io` — it will then
   be served at `https://<your-username>.github.io/`.

No CI/CD, environment variables, or secrets are required.

## Customisation Guide

| What you want to change            | Where to look                                                                 |
|-------------------------------------|--------------------------------------------------------------------------------|
| Text, links, section content        | `index.html` — organised into commented blocks (Ticker, Nav, Hero, About, Ledger, Case Files, Experience, Credentials, Contact) |
| Colours, fonts, spacing             | `style.css` → `:root { ... }` at the top of the file. Every color and font is a named CSS custom property, so re-theming the whole site means changing values in one place |
| SQL query content                   | `sql-data.js` — one entry per query, keyed `q1`–`q10`                          |
| Scroll animations / ticker speed    | `script.js` (`IntersectionObserver` reveal logic) and `@keyframes ticker-scroll` in `style.css` |
| Résumé file                         | Replace `assets/Aakriti_Resume.pdf` — filename must stay the same, or update the `href` references in `index.html` |
| Dashboard screenshots               | `assets/Tableau_screenshots/` for NexaBank; Northwind and Movie Rental screenshots are linked directly from GitHub (see [Project Structure](#project-structure)) |

## Content Sourcing

All résumé content (roles, dates, metrics, education, certifications) is sourced
directly from Aakriti's résumé. Project write-ups and screenshot interpretations
for NexaBank Analytics, Northwind Traders, and Movie Rental Analytics are written
from the actual project repositories and dashboard exports — nothing is
fabricated or placeholder text.

## Accessibility & Performance

- Semantic landmarks (`header`, `main`, `footer`) and heading hierarchy throughout.
- All interactive elements (query cards, screenshot exhibits, modals) are keyboard-
  operable with visible focus states and `Escape`-to-close support.
- Modals trap and restore focus on open/close.
- Animations respect `prefers-reduced-motion: reduce`.
- No external JS frameworks or runtime dependencies — fast first paint, minimal
  network requests beyond Google Fonts and the linked project screenshots.

## Browser Support

Tested on current versions of Chrome, Edge, Safari, and Firefox, desktop and
mobile. Uses standard modern CSS (Grid, Flexbox, custom properties) and ES6+
JavaScript with no transpilation — an evergreen browser from the last ~3 years
is expected.

## Roadmap

- [ ] Add screenshots for any future projects as they're published
- [ ] Optional: add a lightweight contact form (currently `mailto:` only)
- [ ] Optional: swap Google Fonts CDN for self-hosted fonts if avoiding third-party
      requests becomes a priority

## License

This repository contains personal portfolio content (résumé data, project
descriptions, and images) and is not intended for reuse as a template without
permission. The code structure (HTML/CSS/JS patterns) may be referenced for
learning purposes.

## Contact

**Aakriti**
📧 [aakriti.9703@gmail.com](mailto:aakriti.9703@gmail.com)
📱 +91 82106 46078
🔗 [GitHub — AakritiBalachandran](https://github.com/AakritiBalachandran)
📊 [Tableau Public — Fraud Intelligence Dashboard](https://public.tableau.com/app/profile/aakriti.balachandran/viz/FRAUD_ANALYTICS/Fraud_Intelligence_Dashboard#1)
