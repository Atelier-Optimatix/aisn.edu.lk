# Adventist International School Negombo — Website

A fully static recreation of the Adventist International School Chilaw website
(reference: <https://aisc.edu.lk/>), adapted for the **Negombo** campus. The
design, layout, typography, navigation, page structure, image treatments and
staff directory follow the reference site; campus-specific copy and contact
details are for Negombo.

Built with [Astro](https://astro.build/) and deployed to GitHub Pages. The
generated site is plain HTML, CSS and JavaScript — no server, database or
client-side framework is required at runtime.

## Requirements

- Node.js 22.23.4 or newer (CI uses Node 22)
- npm 10 or newer


## Development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:4321/aisn.edu.lk/>. The base path is
part of the URL, so open the full address rather than `localhost:4321`.

### Build and preview

```bash
npm run build     # static output in dist/
npm run preview   # serve dist/ at http://localhost:4321/aisn.edu.lk/
```

## Base path and deployment

`astro.config.mjs` defaults to the GitHub Pages project-site base
`/aisn.edu.lk`, matching the repository name. Override it with the `BASE_PATH`
environment variable when the site lives elsewhere:

```bash
BASE_PATH="" npm run build                # custom domain or user site (served at /)
BASE_PATH="/another-repo" npm run build   # different repository name
BASE_PATH="/school/site" npm run build    # nested path
```

The layout writes `<base href="...">` with a guaranteed trailing slash, so all
page links and assets resolve correctly at any nesting depth. Do not add
leading slashes to links in the content fragments.

### GitHub Pages

1. Push the repository to GitHub with the default branch `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The workflow in
   `.github/workflows/deploy.yml` installs dependencies, builds the site and
   publishes `dist/`.

The workflow passes the repository name to `BASE_PATH` automatically. For a
custom domain, set the build step's `BASE_PATH` to `/` (or remove the env
entry and set `base` in `astro.config.mjs`), and add your domain in
**Settings → Pages → Custom domain**.

## Project structure

```
src/
  components/       Header, off-canvas menu, footer, shared CTA band
  data/nav.ts       Navigation items, site metadata, social links
  fragments/        Page body markup (raw HTML from the reference site)
  layouts/          BaseLayout: document head, scripts, page wrapper
  pages/            One Astro route per page (8 pages)
public/
  images/           Photography, logos and favicon
  fonts/            Locally hosted Montserrat
  templates/        Helix Ultimate template CSS/JS and Font Awesome
  components/       SP Page Builder CSS/JS
  plugins/          Helix Ultimate system CSS
  media/            jQuery and Joomla core scripts
  styles/           Site overrides, shared CTA styles, per-page CSS
```

### Pages

| Route                   | Page                    |
| ----------------------- | ----------------------- |
| `/`                     | Home                    |
| `/about-us/`            | About Us                |
| `/about-us/gallery/`    | Gallery                 |
| `/about-us/articles/`   | Our Events              |
| `/academics/`           | Academics               |
| `/administration/`      | Administration / Staff  |
| `/admission/`           | Admissions              |
| `/contact-us/`          | Contact Us              |

### Editing content

Page bodies live in `src/fragments/*.html` and are imported with Vite's `?raw`
loader. They intentionally keep the reference site's element IDs because the
per-page stylesheets in `public/styles/pages/` are ID-scoped. When editing:

- Keep existing IDs and class names unless you also update the matching CSS.
- Use relative URLs (`images/...`, `about-us/`); `<base>` handles the prefix.
- Add images under `public/images/` and reference them without a leading slash.
- Update navigation and metadata in `src/data/nav.ts`.
- Contact details are in `src/fragments/contact-us.html`; the desktop and
  mobile cards are separate blocks, so keep both in sync.

The staff page contains all 20 staff members from the reference site in the
same order, with their original names, designations and photographs.

## Static behaviour and privacy

- All assets are bundled locally: no Google Fonts, CDNs or third-party
  requests. Montserrat is self-hosted under `public/fonts/montserrat/`.
- There are no contact forms, analytics scripts, cookies or server endpoints.
  The reference site has no contact form, so none was added.
- External links (the admissions portal, Facebook and the designer credit) open
  the respective sites.
- The only interactive features are the original template behaviours: the
  navigation dropdown, mobile off-canvas menu, home-page carousel, gallery
  lightbox and scroll-to-top button.

## Credits

- Design and content reference: [Adventist International School Chilaw](https://aisc.edu.lk/)
- Template assets: Helix Ultimate, SP Page Builder, Bootstrap 4, Font Awesome 5,
  Magnific Popup and jQuery (retained under their original licences)
- Photography and school identity: Adventist International School
