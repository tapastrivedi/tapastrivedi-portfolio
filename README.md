# Tapas Trivedi — Personal Portfolio

A fully responsive personal portfolio website styled after the popular
[vCard personal portfolio](https://github.com/codewithsadee/vcard-personal-portfolio):
dark "eerie-black" cards, yellow-gradient accents, rounded corners, and a sidebar layout.
Built with plain HTML, CSS, and JavaScript — no build step required.

## Structure

```
portfolio/
├── index.html              # All content & sections
├── README.md
└── assets/
    ├── css/style.css       # Theme + responsive layout
    ├── js/script.js        # Navigation, filters, form
    └── images/avatar.svg   # Placeholder avatar (initials "TT")
```

## Sections

- **About** — summary + "What I'm Doing" service cards
- **Resume** — experience, education, certifications timeline
- **Projects** — highlighted project cards (currently placeholders) with category filters
- **Skills** — grouped skill tag cards
- **Contact** — contact cards + message form

## Run locally

Just open `index.html` in a browser. For a local server (recommended so fonts/icons load reliably):

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

**Your photo** — replace `assets/images/avatar.svg` with a photo (e.g. `avatar.jpg`) and update the `<img src>` in `index.html` (sidebar `.avatar-box`).

**Your projects** — in `index.html`, find the `<ul class="project-list">` block. Each `<li class="project-item">` is one card. For each:
- Change `.project-title` and `.project-category` text.
- Set `data-category` to `ai / ml`, `cloud`, or `iot` so the filter works.
- To use a real screenshot, replace the `<figure class="project-img">` inner content with `<img src="assets/images/your-shot.jpg" alt="..." loading="lazy" />`.
- The **"Highlighted"** badge makes a card stand out — keep or remove per project.

**GitHub link** — update the GitHub `<a href="#">` in the sidebar social list and contact section.

## Deploy (free options)

- **GitHub Pages** — push this folder to a repo, then Settings → Pages → deploy from `main` branch.
- **Netlify / Vercel** — drag-and-drop the `portfolio` folder, or connect the repo.

## Notes

- Icons load from Ionicons CDN; fonts from Google Fonts. Both need internet access to render.
- Styling is inspired by the vCard project (MIT licensed) but written fresh for this site.
