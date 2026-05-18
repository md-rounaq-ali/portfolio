# 🌌 My portfolio website

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-https%3A%2F%2Fmd--rounaq--ali.netlify.app-blueviolet?style=for-the-badge&logo=netlify&logoColor=white)](https://md-rounaq-ali.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A high-fidelity, secure, and responsive developer portfolio featuring a custom-engineered in-browser UNIX terminal emulator, rich semantic SEO markup, and GPU-optimized micro-interactions.**

</div>

---

## 📌 Table of Contents
* [🚀 Live Deployment & Visuals](#-live-deployment--visuals)
* [⚡ Core Engineering Feats](#-core-engineering-feats)
* [💻 In-Browser Terminal Reference Sheet](#-in-browser-terminal-reference-sheet)
* [🛠️ Tech Stack & Clean Architecture](#️-tech-stack--clean-architecture)
* [📂 File Directory Tree](#-file-directory-tree)
* [🖥️ Local Installation & Development](#️-local-installation--development)
* [💼 Recruiter Evaluation Quick-Links](#-recruiter-evaluation-quick-links)

---

## 🚀 Live Deployment & Visuals

* **Live Interactive URL:** [https://md-rounaq-ali.netlify.app](https://md-rounaq-ali.netlify.app)
* **Hosting Infrastructure:** Netlify Continuous Deployment (CD)
* **Security Layer:** Automatically provisioned Let's Encrypt SSL/TLS Certificate (HTTPS)
* **Google SEO Status:** Formally verified and crawled via Google Search Console HTML Meta verification.

---

## ⚡ Core Engineering Feats

This website is not just a static business card. It was designed to showcase high-performance front-end programming, layout performance, and clean codebase organization.

### 1. 💻 In-Browser Terminal Emulator (with Linux Bash History)
Instead of standard static bio descriptions, the portfolio hosts a fully functional browser command-line interface:
* **Dynamic Keyboard Event Listener:** Intercepts `'ArrowUp'` and `'ArrowDown'` keystrokes using native Javascript event handlers.
* **History Memory Buffer:** Stores previously entered commands in an in-memory array list. Pressing up/down cycles through previous inputs exactly like a native Linux bash terminal shell.
* **HTML Sanitization Security:** All CLI commands undergo character escaping filters before rendering in the DOM, preventing Cross-Site Scripting (XSS) input vulnerabilities.

### 2. 📋 Recruiter Friction-Reduction Clipboard API
* Integrated one-click copy triggers into contact sections (Email and Phone).
* Triggers hardware-accelerated SVG icon updates and spawns self-destructing floating "Copied!" tooltips, lowering friction for quick contact.

### 3. 🤖 Invisible Rich-Snippet Structured SEO (JSON-LD)
* Injected standard schema metadata objects inside the page `<head>` mapped to **Schema.org** structures.
* Explicitly states academic degree parameters (B.Tech CSE), geographical location (Hyderabad, India), core developer competencies, and project references.
* Drastically improves organic crawler parsing, indexation hierarchy, and Google search queries match-making.

### 4. ⚙️ Hardware-Accelerated Tech Ticker & Parallax Controls
* Designed a continuous, infinite-loop technical icon marquee. Powered exclusively by GPU-accelerated CSS `transform: translate3d` transitions to prevent browser repaint/reflow lag.
* Embedded smooth perspective parallax listeners. Translates card layers relative to the viewport’s scroll boundaries for elegant UI depth.

---

## 💻 In-Browser Terminal Reference Sheet

Below is a map of the commands built directly into the CLI controller:

| Command | Action | Output Description |
|:---|:---|:---|
| `help` | Lists Options | Renders a custom list of all available commands |
| `about` | Prints Bio | Displays graduation year, academic institution, and developer specialties |
| `skills` | Renders Stack | Generates a structured list of core languages, frameworks, and tools |
| `projects` | Details Assets | Returns live links and tech stacks for *Block Crush*, *FinTrack*, and *Weather Intel* |
| `contact` | Prints Channels | Outlines instant direct channels (Email, WhatsApp, Location) |
| `clear` | Clears Screen | Flushes DOM history inside the terminal card console |

---

## 🛠️ Tech Stack & Clean Architecture

| Layer | Technology | Key Responsibility |
|:---|:---|:---|
| **Semantic Foundation** | HTML5 | Secure document layout, accessibility compliance, and SEO schemas |
| **Design Frame** | CSS3 | Custom HSL design tokens, Glassmorphism cards, fluid grid layouts, and custom scrollbars |
| **Logic & CLI Engine** | ES6+ JavaScript | Keyboard event bindings, history buffer array state, and clip copy helpers |
| **API Integration** | Web3Forms & EmailJS | Automated back-end contact form submissions directly to primary inbox |

---

## 📂 File Directory Tree

This project has been structured strictly to match production-grade engineering repository standards:

```text
portfolio-website/
├── assets/
│   ├── block-crush.jpg       # Flutter Puzzle Game preview screen
│   ├── fintrack.png          # Python Finance Tracker preview panel
│   ├── weather.png           # Flutter live API Weather preview panel
│   ├── profile-avatar.png    # Professional profile representation
│   ├── nptel-logo.png        # Verified NPTEL certification logo badge
│   ├── favicon.svg           # Branded site favicon vector
│   └── resume.html           # ATS-friendly responsive resume page
├── index.html                # Main semantic framework & JSON-LD metadata
├── style.css                 # HSL variables, core stylesheet, & animation keys
├── script.js                 # Terminal shell, scroll controller, & feedback scripts
└── README.md                 # Professional technical repository guide
```

---

## 🖥️ Local Installation & Development

To clone, explore, and run this repository locally, execute the following commands in your shell terminal:

1. **Clone the repository locally:**
   ```bash
   git clone https://github.com/md-rounaq-ali/portfolio.git
   ```

2. **Navigate into the workspace:**
   ```bash
   cd portfolio
   ```

3. **Launch local previews:**
   * Double-click `index.html` to run statically in any modern browser.
   * **Professional Developer Setup:** Open the folder in VS Code, install the **Live Server** extension, and hit **Go Live** to launch on `http://127.0.0.1:5500`.

---

## 💼 Recruiter Evaluation Quick-Links

* **Live Portfolio Link:** [https://md-rounaq-ali.netlify.app](https://md-rounaq-ali.netlify.app)
* **Direct Professional Contact:** [LinkedIn Profile](https://www.linkedin.com/in/md-rounaq-ali/)
* **Email Communication:** tabrasali7@gmail.com
* **Verified WhatsApp Channel:** [+91 9030059421](https://wa.me/919030059421)

---

*Developed with passion, precision, and clean code. Clean architecture builds beautiful software.*
