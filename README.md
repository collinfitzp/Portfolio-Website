# Portfolio Website

A clean, minimalist personal portfolio for a physics student — built with
plain HTML, CSS, and JavaScript (no build step, no frameworks).

## Folder structure

```
portfolio/
├── index.html              Home page (photo, bio, education, interests, socials)
├── projects.html            Projects page (project cards)
├── resume.html               Resume page (PDF preview + download button)
├── contact.html              Contact page (contact links + demo form)
├── css/
│   └── style.css             All site styling (single shared stylesheet)
├── js/
│   └── script.js              Mobile nav toggle, active link highlight, contact form
├── assets/
│   ├── images/
│   │   ├── profile.jpg              Home page portrait — REPLACE with your photo
│   │   ├── project-ising.svg         Placeholder project thumbnail
│   │   ├── project-orbit.svg         Placeholder project thumbnail
│   │   ├── project-spectrum.svg      Placeholder project thumbnail
│   │   └── project-heat.svg          Placeholder project thumbnail
│   └── resume/
│       └── resume.pdf                Placeholder resume — REPLACE with your real PDF
└── README.md
```

Every page links to `css/style.css` and `js/script.js` with relative paths,
and every image/PDF is referenced relatively (e.g. `assets/images/profile.jpg`),
so the whole `portfolio/` folder can be uploaded as-is.

## What to customize

1. **Your photo** — replace `assets/images/profile.jpg` with your own image
   (keep the filename, or update the `src` in `index.html`).
2. **Your resume** — replace `assets/resume/resume.pdf` with your real resume,
   keeping the same filename so the preview and download button keep working.
3. **Project thumbnails** — swap the SVG placeholders in `assets/images/` for
   real screenshots or images of your projects (`.png`/`.jpg` work fine —
   just update the `src` attributes in `projects.html`).
4. **Text content** — search each HTML file for the sample name (Alex Rivera),
   bio, coursework, project descriptions, and contact details, and replace
   them with your own.
5. **Links** — update the GitHub, LinkedIn, and email links in `index.html`,
   `contact.html`, and each project card in `projects.html`.
6. **Contact form** — the form in `contact.html` is front-end only (it just
   shows a confirmation message). To actually receive messages, connect it to
   a service like [Formspree](https://formspree.io) or
   [Netlify Forms](https://www.netlify.com/platform/core/forms/), or your own
   backend endpoint, by pointing the form's `action` at that service.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a
   user site, or any name for a project site).
2. Push the **contents of this `portfolio/` folder** to the root of that
   repository (so `index.html` sits at the repo root, not inside a
   subfolder).
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the **`main`** branch and the **`/ (root)`** folder, then save.
5. GitHub will publish the site at:
   - `https://your-username.github.io/` (if the repo is named
     `your-username.github.io`), or
   - `https://your-username.github.io/your-repo/` (for any other repo name).

Because every path in the project is relative, the site works correctly in
both cases without any changes.

## Local preview

No build tools are required. Either open `index.html` directly in a browser,
or serve the folder locally for the most accurate preview:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```
