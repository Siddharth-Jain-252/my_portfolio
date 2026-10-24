# Siddharth Mittal Jain — Portfolio

A personal portfolio built with React, Tailwind CSS and Vite. It has a dark editorial layout, one emerald accent, and scroll-driven animation: a pinned horizontal projects section, a scrambling hero role line, and magnetic buttons.

**Live site:** https://my-portfolio-six-peach-v048k2nw9z.vercel.app/

## Features

- Single-page layout with a sticky navbar and scroll-progress line
- Hero with a letter-by-letter name reveal, a text-scramble role line and a cursor spotlight
- About section where the bio lights up word by word as you scroll
- Skills section with two opposite-direction marquees and offset category rows
- Projects section that pins and scrolls sideways on desktop, and becomes a swipeable snap row on mobile
- Custom cursor, magnetic buttons and clear keyboard focus states
- Respects `prefers-reduced-motion`
- Responsive from phone to desktop

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite 5 |
| Styling | Tailwind CSS 3, Plus Jakarta Sans |
| Icons | Lucide React |
| Animation | Framer Motion, GSAP + ScrollTrigger, Lenis |

Each animation library has a specific job:

- **GSAP + ScrollTrigger:** the name reveal, the scroll-scrubbed bio, and the pinned horizontal scroll in Projects
- **Lenis:** smooth scrolling, synced to GSAP's ticker
- **Framer Motion:** `fadeInUp` section reveals, card entrances and hover effects, the magnetic buttons, the custom cursor and the navbar progress line

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/Siddharth-Jain-252/my_portfolio.git
cd my_portfolio
npm install
npm run dev
```

Open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
├── public/
│   └── images/          # Project screenshots
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Magnetic.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx          # Lenis setup and page layout
│   ├── data.js          # All content: about, skills, projects
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

## Customizing

**Content.** Everything on the page comes from `src/data.js`. Edit the `aboutData`, `skillsData` and `projectsData` objects and the site updates.

**Project images.** Put screenshots in `public/images/` and match the file names to the `picture` paths in `src/data.js`. Names are case-sensitive on deployment. A 16:9 or 3:2 image under 500 KB works best. A missing image falls back to a gradient.

**Accent color.** Change `accent` in `tailwind.config.js`:

```js
colors: { ink: '#0a0a0c', accent: '#4fd1a5' }
```

**Scroll speed of the projects row.** In `src/components/Projects.jsx`, lower the `scrub` value for a snappier feel or raise it for a looser one.

## Deployment

The site deploys to Vercel with no extra setup:

1. Push the repo to GitHub.
2. Import it at https://vercel.com/new.
3. Keep the detected settings (build command `npm run build`, output directory `dist`) and deploy.

Netlify and GitHub Pages also work. For GitHub Pages, set `base` in `vite.config.js` to your repo name.

## Contact

- Email: jainsiddharth252@gmail.com
- GitHub: https://github.com/Siddharth-Jain-252
- LinkedIn: https://www.linkedin.com/in/-siddharth-jain/
- X: https://x.com/Siddharth_252_
- LeetCode: https://leetcode.com/u/SiddharthJain252/

## License

MIT. Feel free to take inspiration from the code, but please don't copy the content or personal details.