# Stanley Nyford — Portfolio Website

A personal portfolio website built with **React + Vite** and plain CSS — no UI frameworks, no component libraries. Every layout, interaction, and style is hand-written to demonstrate real front-end competency.

**Live:** [portfolio-website-seven-rho-x975x5bbq6.vercel.app](https://portfolio-website-seven-rho-x975x5bbq6.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Plain CSS (custom properties, media queries) |
| Deployment | Vercel |
| Linting | ESLint |

---

## Project Structure

```
portfolio/
├── public/
│   └── headshot.png              # Profile image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky nav with mobile hamburger menu
│   │   ├── Hero.jsx              # Identity card, social links, certifications, about
│   │   ├── Projects.jsx          # Project cards with stack, problem, and highlights
│   │   ├── Skills.jsx            # Technical skills and networking skill groups
│   │   ├── Contact.jsx           # Contact section with email, LinkedIn, GitHub
│   │   └── Footer.jsx            # Footer with copyright
│   ├── data/
│   │   ├── profile.js            # Name, contact info, links, bio
│   │   ├── projects.jsx          # Project titles, summaries, stacks, URLs
│   │   ├── resume.js             # Education, certifications, work experience
│   │   └── skills.js             # Skill groups and items
│   ├── App.jsx                   # Root component and layout
│   ├── main.jsx                  # React entry point
│   └── index.css                 # All styles — variables, components, responsive breakpoints
├── package.json
└── vite.config.js
```

---

## Features

- **Responsive layout** — mobile-first design with breakpoints at 640px and 1024px
- **Sticky navigation** — collapses to a hamburger menu on small screens
- **Identity card** — profile image, social buttons, education details, and certifications in one panel
- **Project cards** — each card surfaces the problem solved, tech stack, and key features
- **Skills grid** — Technical Skills and Networking displayed as readable pill groups
- **Contact section** — direct email, LinkedIn, and GitHub links in a dedicated call-to-action
- **Fast image loading** — `fetchpriority="high"`, `loading="eager"`, `decoding="async"` on the profile image
- **No Tailwind, no UI libraries** — all CSS is hand-written using custom properties and media queries

---

## Projects Showcased

### DuelyDo
A productivity platform that converts course syllabi into an organized semester plan. Parses uploads in under 60 seconds, automatically extracts professor contact info, office hours, and class meeting times, and displays everything in a unified task dashboard.

- **Stack:** React, JavaScript, Supabase, HTML, CSS, Vercel
- **Repo:** [DuelyDo Public Showcase](https://github.com/stanleytarun777/DuelyDo_Public_Showcase)
- **Live:** [duely-nine.vercel.app](https://duely-nine.vercel.app/)

### Portfolio Website
This site. Designed and built from scratch with React and plain CSS to present projects and technical background clearly to recruiters.

- **Stack:** React, JavaScript, CSS, Vercel
- **Repo:** [Portfolio-Website](https://github.com/stanleytarun777/Portfolio-Website)
- **Live:** [portfolio-website-seven-rho-x975x5bbq6.vercel.app](https://portfolio-website-seven-rho-x975x5bbq6.vercel.app/)

### Web Calculator
A responsive calculator built entirely in vanilla JavaScript — no libraries. Handles real-time arithmetic, chained operations, and edge-case input flows with zero external dependencies.

- **Stack:** JavaScript, HTML, CSS
- **Repo:** [Web-Calculator](https://github.com/stanleytarun777/Web-Calculator)
- **Live:** [stanleytarun777.github.io/Web-Calculator](https://stanleytarun777.github.io/Web-Calculator/)

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/stanleytarun777/Portfolio-Website.git
cd Portfolio-Website/portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server with hot reload
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Customization

All content is driven by data files in `src/data/` — no hunting through JSX to update text.

| File | What to edit |
|---|---|
| `src/data/profile.js` | Name, contact info, bio, social links |
| `src/data/projects.jsx` | Project titles, summaries, stacks, GitHub/live URLs |
| `src/data/resume.js` | Education, certifications, work experience |
| `src/data/skills.js` | Skill groups and individual skill items |
| `public/headshot.png` | Profile image — replace the file, keep the filename |

To update styles, edit `src/index.css`. The full color palette and spacing scale are defined as CSS custom properties at the top of the file under `:root`.

---

## Deployment

The site is deployed on **Vercel** with automatic deployments triggered on every push to `main`.

To deploy your own fork:

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Set the **Root Directory** to `portfolio`
4. Vercel auto-detects Vite — no additional build configuration required

---

## Contact

**Stanley Nyford** — Computer Information Systems student at Nicholls State University, actively seeking software engineering, web development, and IT internships.

- Email: [nyfordstanley777@gmail.com](mailto:nyfordstanley777@gmail.com)
- LinkedIn: [linkedin.com/in/stanley-nyford-75aa853a9](https://www.linkedin.com/in/stanley-nyford-75aa853a9)
- GitHub: [github.com/stanleytarun777](https://github.com/stanleytarun777)
