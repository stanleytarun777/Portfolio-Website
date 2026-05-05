# Stanley Nyford — Portfolio Website

A fully responsive personal portfolio built with **React 19** and plain **CSS** — no UI frameworks or component libraries.

**Live site:** [portfolio-website-seven-rho-x975x5bbq6.vercel.app](https://portfolio-website-seven-rho-x975x5bbq6.vercel.app/)  
**GitHub:** [github.com/stanleytarun777/Portfolio-Website](https://github.com/stanleytarun777/Portfolio-Website)

---

## Tech Stack

### Languages
| Language | Usage |
|---|---|
| JavaScript (ES2020+) | All application logic, component behavior, data |
| JSX | React component templating |
| CSS3 | All styling — custom properties, grid, flex, media queries |
| HTML5 | Entry point (`index.html`), semantic document structure |

### Frameworks & Libraries
| Package | Version | Role |
|---|---|---|
| React | 19.2.0 | Component-based UI framework |
| React DOM | 19.2.0 | DOM rendering and reconciliation |
| Vite | 7.2.4 | Build tool, dev server, HMR |
| @vitejs/plugin-react | 5.1.1 | Babel-powered JSX transform and Fast Refresh |

### Dev Tools
| Tool | Version | Role |
|---|---|---|
| ESLint | 9.39.1 | Static code analysis |
| eslint-plugin-react-hooks | latest | Enforces Rules of Hooks |
| eslint-plugin-react-refresh | latest | Ensures components are HMR-safe |
| Node.js | 24.x | Runtime |
| npm | 11.x | Package manager |

### Infrastructure
| Service | Usage |
|---|---|
| Vercel | Hosting and continuous deployment |
| GitHub | Version control and source of truth for deployments |

---

## Architecture

The project follows a **data-driven component architecture**. All displayed content lives in `/src/data/` — components are pure presentational shells that receive data and render markup. Updating the portfolio requires no JSX changes, only edits to data files.

```
src/
├── data/           ← All content lives here
│   ├── profile.js      Name, contact, bio, social links
│   ├── projects.jsx    Project titles, summaries, stacks, URLs
│   ├── resume.js       Education, certifications, work experience
│   └── skills.js       Skill groups and individual items
│
├── components/     ← Pure presentational components
│   ├── Navbar.jsx      Sticky nav, mobile hamburger toggle
│   ├── Hero.jsx        Identity card, social links, certs, about
│   ├── Projects.jsx    Project cards with problem/stack/highlights
│   ├── Skills.jsx      Skill group cards with pill badges
│   ├── Contact.jsx     CTA section with contact buttons
│   └── Footer.jsx      Copyright footer
│
├── App.jsx         ← Root layout
├── main.jsx        ← React DOM entry point
└── index.css       ← All styles (885 lines)
```

**Module system:** ES Modules throughout (`"type": "module"` in `package.json`).  
**State:** Component-local only (`useState` for mobile nav toggle). No global state library needed.  
**Icons:** Inline SVG for LinkedIn, GitHub, Email, skill category, and UI icons.

---

## CSS Design System

All styles are in a single `src/index.css` file (885 lines).

### Custom Properties (Design Tokens)
```css
:root {
  /* Brand navy */
  --navy:       #102948;
  --navy-dark:  #0a1d35;
  --navy-deep:  #0f2340;

  /* Accent colors */
  --emerald:         #059669;   /* Live/CTA buttons */
  --emerald-hover:   #047857;
  --linkedin-blue:   #0a66c2;

  /* Neutral scale (slate) */
  --slate-50 … --slate-900
}
```

### Layout Techniques
- **CSS Grid** — hero two-column layout, projects card grid, skills card grid
- **CSS Flexbox** — navbar, identity card row, social buttons, pill groups, contact buttons
- **CSS Custom Properties** — color palette defined as tokens in `:root`, used across all component styles

### Responsive Breakpoints
| Breakpoint | Behavior |
|---|---|
| Default (mobile) | Single column, hamburger nav, stacked layout |
| `640px` | Two-column project grid, row contact buttons, larger type |
| `1024px` | Desktop nav visible, three-column project grid, two-column hero, two-column skills |

### Visual Techniques
- `box-shadow: inset 0 0 0 6px var(--navy)` — navy edge border on `#root`
- CSS `transition` on hover states (translate, shadow, background, border)
- `linear-gradient` — project card accent bar
- `scroll-behavior: smooth` — smooth anchor navigation
- `::selection` — branded text selection highlight

---

## Project Structure

```
portfolio/
├── public/
│   └── headshot.png               # Profile photo (replace to update)
├── src/
│   ├── assets/                    # Static assets (Vite-managed)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.jsx
│   │   ├── resume.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── eslint.config.js
├── vite.config.js
└── package.json
```

---

## Sections

| Section | Component | Description |
|---|---|---|
| Home | `Hero.jsx` | Profile image, name, education details, social links |
| About | `Hero.jsx` | Inline about panel with bio text |
| Certifications | `Hero.jsx` | Meta certifications displayed as a card |
| Projects | `Projects.jsx` | Cards for each project with problem, stack, highlights, and links |
| Skills | `Skills.jsx` | Technical Skills and Networking groups as pill badges |
| Contact | `Contact.jsx` | Email, LinkedIn, GitHub call-to-action with dark navy background |
| Footer | `Footer.jsx` | Copyright and internship availability note |

### Accessibility
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `aria-label` on the `<nav>` element and hamburger `<button>`
- `aria-expanded` on the mobile nav toggle to communicate open/close state
- `alt` text on the profile image

### Performance
- Profile image uses `fetchpriority="high"`, `loading="eager"`, and `decoding="async"` to avoid render-blocking
- Production bundle: **~212 KB JS** (66 KB gzip) · **~12 KB CSS** (2.7 KB gzip)
- No third-party CSS or icon libraries in the bundle

---

## Projects Showcased

### DuelyDo — Syllabus-to-Dashboard Productivity Tool
Converts uploaded course syllabi into an organized semester plan in under 60 seconds. Automatically extracts professor contact info, office hours, and class meeting times.

- **Stack:** React · JavaScript · Supabase · HTML · CSS · Vercel
- **Backend:** Supabase (authentication, PostgreSQL storage, cross-session state)
- **Repo:** [DuelyDo Public Showcase](https://github.com/stanleytarun777/DuelyDo_Public_Showcase)
- **Live:** [duely-nine.vercel.app](https://duely-nine.vercel.app/)

---

### Portfolio Website — This Site
A responsive portfolio site built with React and plain CSS.

- **Stack:** React · JavaScript · CSS · Vercel
- **Repo:** [Portfolio-Website](https://github.com/stanleytarun777/Portfolio-Website)
- **Live:** [portfolio-website-seven-rho-x975x5bbq6.vercel.app](https://portfolio-website-seven-rho-x975x5bbq6.vercel.app/)

---

### Web Calculator — Vanilla JS Exercise
A responsive calculator app with real-time display, chained operations, and edge-case handling built in vanilla JavaScript.

- **Stack:** JavaScript · HTML · CSS
- **Repo:** [Web-Calculator](https://github.com/stanleytarun777/Web-Calculator)
- **Live:** [stanleytarun777.github.io/Web-Calculator](https://stanleytarun777.github.io/Web-Calculator/)

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/stanleytarun777/Portfolio-Website.git
cd Portfolio-Website/portfolio

# Install
npm install

# Develop
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Vite provides instant hot module replacement on every save.

### Scripts

```bash
npm run dev        # Dev server with HMR (Vite)
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint across all .js and .jsx files
```

---

## Customization

### Updating Content

All content is in `src/data/` — no JSX edits needed for text changes.

| File | What to edit |
|---|---|
| `src/data/profile.js` | Name, title, location, bio, email, phone, GitHub, LinkedIn |
| `src/data/projects.jsx` | Project titles, summaries, problems, stacks, GitHub/live URLs |
| `src/data/resume.js` | Education degree, school, graduation date, certifications, work experience |
| `src/data/skills.js` | Skill group names and individual skill items |
| `public/headshot.png` | Profile photo — replace the file, keep the filename |

### Updating Styles

Open `src/index.css`. The color palette is at the top of the file in `:root` — change the custom property values to re-theme the entire site. Component styles are grouped by section with clearly labeled comments.

---

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

**To deploy your own fork:**

1. Fork this repository and push to your GitHub account
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Set the **Root Directory** to `portfolio`
4. Framework preset: **Vite** (auto-detected)
5. Click Deploy — no environment variables required

---

## Contact

**Stanley Nyford**  
Computer Information Systems · Computer Science Concentration  
Nicholls State University — Expected May 2027  
Actively seeking software engineering, web development, and IT internships.

| | |
|---|---|
| Email | [nyfordstanley777@gmail.com](mailto:nyfordstanley777@gmail.com) |
| LinkedIn | [linkedin.com/in/stanley-nyford-75aa853a9](https://www.linkedin.com/in/stanley-nyford-75aa853a9) |
| GitHub | [github.com/stanleytarun777](https://github.com/stanleytarun777) |
