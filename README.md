# Rafael Sanguini — Personal Portfolio

A modern, dark-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, semantic code.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)

---

## 📋 Overview

A personal portfolio showcasing projects, skills, and contact information. The site features a responsive dark-mode design with purple accents, smooth scroll animations, an interactive skill section, and a functional contact area with clipboard integration.

Built from scratch as a first portfolio project — focusing on clean code, accessibility, and modern UI/UX practices without relying on any frontend framework.

---

## ✨ Features

### UI / UX
- **Dark mode design** with purple accent palette
- **Fully responsive** — 6 breakpoints from mobile to desktop
- **Smooth scroll** navigation with active link tracking
- **Reveal on scroll** animations via IntersectionObserver
- **Parallax orbs** effect on desktop (mouse movement)
- **Project card glow** — radial gradient follows cursor

### Navigation
- **Sticky navbar** with scroll state
- **Hamburger menu** for mobile with focus management
- **Active section highlighting** based on scroll position

### Sections
- **Hero** — name, bio, stats, and CTAs
- **About** — personal background, education, languages, and soft skills
- **Projects** — featured cards with tech tags, GitHub links, and expandable view
- **Skills** — categorized tech stack with animated progress bars and code snippet
- **Contact** — email, WhatsApp, social links with copy-to-clipboard

### Interactions
- **Copy email** button with toast notification (Clipboard API + fallback)
- **Profile modal** with focus trap and keyboard navigation (Escape to close)
- **Animated skill bars** triggered on viewport entry
- **Lucide icons** dynamically rendered

---

## 🖼️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 (semantic) |
| **Styling** | CSS3 (custom properties, flexbox, grid, clamp) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Icons** | Lucide Icons |
| **Hosting** | Vercel |
| **Version Control** | Git + GitHub |

---

## 🚀 Getting Started

### Try it online

The portfolio is deployed on Vercel:

🔗 **[rafaelsanguini.vercel.app](https://rafaelsanguini.vercel.app)**

### Run locally

1. Clone the repository:
```bash
git clone https://github.com/rsanguini/portfolio.git
cd portfolio
```

2. Open `index.html` in any modern browser — no build step, no dependencies, no server required.

---

## 🏗️ Architecture
```text
portfolio/
├── css/
│   └── style.css          # All styles (custom properties, responsive, animations)
├── js/
│   └── main.js            # All interactions (nav, scroll, modal, clipboard, reveal)
├── assets/
│   ├── hero-photo.jpg     # Hero section portrait
│   ├── about-photo.jpg    # About section portrait
│   └── favicon.png         # Favicon
├── index.html             # Single-page structure
├── .gitignore             # OS, editor, env exclusions
├── LICENSE                # MIT License
└── README.md              # You are here
```

### Key Implementation Details

| Feature | Implementation |
|---------|---------------|
| **Responsive design** | CSS media queries with 6 breakpoints (320px to 1440px+) |
| **Fluid typography** | CSS `clamp()` for scalable font sizes |
| **Scroll animations** | `IntersectionObserver` with staggered delays |
| **Clipboard** | `navigator.clipboard` API with `execCommand` fallback |
| **Modal accessibility** | Focus trap, `aria-expanded`, Escape key, focus return |
| **Mobile menu** | Body scroll lock, outside-click close, `aria-expanded` |
| **Performance** | No external CSS/JS frameworks — single files, minimal overhead |
| **Color system** | CSS custom properties (`--accent`, `--bg`, `--card`, etc.) |

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `≤ 480px` | Small phones |
| `≤ 600px` | Standard phones |
| `≤ 768px` | Large phones / small tablets |
| `≤ 900px` | Tablets |
| `≤ 1200px` | Small laptops |
| `> 1200px` | Desktops |

---

## 🗺️ Roadmap

| Phase | Description | Status |
|-------|-------------|--------|
| **1. Core Layout** | Hero, About, Projects, Skills, Contact | ✅ Completed |
| **2. Interactions** | Scroll animations, modal, clipboard, mobile menu | ✅ Completed |
| **3. Responsive** | Full mobile-to-desktop responsiveness | ✅ Completed |
| **4. Deploy** | Vercel hosting with custom domain | ✅ Completed |
| **5. Future** | Blog section, dark/light toggle, i18n, project filtering | 🔜 Planned |

---

## 👤 Author

**Rafael Sanguini Colagrossi** — Computer Engineering Student · PUC-Campinas

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafaelsanguini)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rsanguini)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:rafaelcolagrossi@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

⭐ If this project was helpful, leave a star — it means a lot!
