# 🌌 Mohammed Rounaq Ali — Software Developer Portfolio & Engineering Showcase

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-https%3A%2F%2Fmd--rounaq--ali.netlify.app-6c5ce7?style=for-the-badge&logo=netlify&logoColor=white)](https://md-rounaq-ali.netlify.app/)
[![Resume (PDF)](https://img.shields.io/badge/Resume-PDF%20%7C%20DOCX-00cec9?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://md-rounaq-ali.netlify.app/assets/resume.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)

**A high-performance, responsive developer portfolio and multi-format ATS resume platform featuring a custom in-browser UNIX terminal emulator, rich semantic Schema.org JSON-LD structured data, dark glassmorphism architecture, and GPU-optimized micro-interactions.**

</div>

---

## 📌 Table of Contents
* [🚀 Live Deployment & Verification](#-live-deployment--verification)
* [⚡ Core Engineering Feats](#-core-engineering-feats)
* [💻 In-Browser Terminal Reference Sheet](#-in-browser-terminal-reference-sheet)
* [🏆 Major Achievements & Honors](#-major-achievements--honors)
* [📄 Multi-Format ATS Resume Architecture](#-multi-format-ats-resume-architecture)
* [🛠️ Tech Stack & Clean Architecture](#️-tech-stack--clean-architecture)
* [📂 File Directory Tree](#-file-directory-tree)
* [🖥️ Local Installation & Development](#️-local-installation--development)
* [💼 Recruiter Evaluation & Contact](#-recruiter-evaluation--contact)

---

## 🚀 Live Deployment & Verification

* **Live Interactive Portfolio:** [https://md-rounaq-ali.netlify.app](https://md-rounaq-ali.netlify.app)
* **Hosting & CI/CD Pipeline:** Netlify Continuous Deployment (auto-deploys on `git push origin main`)
* **Security & Encryption:** Automated Let's Encrypt SSL/TLS Certificate (HSTS enforced, HTTPS)
* **Google Search Indexation:** Verified and crawled via Google Search Console HTML verification metadata with full WebSite and ProfilePage JSON-LD structured data schemas.

---

## ⚡ Core Engineering Feats

This portfolio is built from scratch with zero framework bloat, prioritizing layout performance, accessible DOM semantics, and clean architectural organization.

### 1. 💻 In-Browser Terminal Emulator (with Linux Bash History Buffer)
Instead of standard static bio descriptions, the portfolio hosts a fully functional browser command-line interface:
* **Dynamic Keyboard Event Listener:** Intercepts `ArrowUp` and `ArrowDown` keystrokes using native Javascript event listeners.
* **History Memory Buffer:** Stores previously entered commands in an in-memory array list. Pressing up/down cycles through previous inputs exactly like a native Linux bash terminal shell.
* **HTML Sanitization Security:** All CLI commands undergo character escaping filters before rendering in the DOM, preventing Cross-Site Scripting (XSS) input vulnerabilities.

### 2. 📄 Multi-Format ATS Resume Engine (HTML, 1-Page PDF & 1-Page DOCX)
* **LaTeX Computer Modern Typography:** High-aesthetic serif resume built with Latin Modern typography, Harvard/Resume Worded academic layout, and 100% monochrome black styling.
* **Dual Download Channels:** Features instant one-click downloads for both **1-Page Vector PDF** (`Mohammed_Rounaq_Ali_Resume.pdf`) and **1-Page Word DOCX** (`Mohammed_Rounaq_Ali_Resume.docx`) designed specifically for high ATS scanner compatibility (ResumeGo, Jobscan, Taleo, Workday).
* **High ATS Metric Density:** Contains 13+ quantified achievements (>99% latency reduction, 100% benchmark accuracy, 60 FPS rendering, 40% load time reduction) and comprehensive soft skills integration (Agile/Scrum, Problem-Solving, Teamwork, Technical Communication, Leadership).

### 3. 📋 Recruiter Friction-Reduction Clipboard API
* Integrated one-click copy triggers into contact sections (Email and Phone).
* Triggers hardware-accelerated SVG icon updates and spawns self-destructing floating "Copied!" tooltips, lowering friction for quick contact.

### 4. 🤖 Invisible Rich-Snippet Structured SEO (JSON-LD)
* Injected standard schema metadata objects inside the page `<head>` mapped to **Schema.org** structures (`WebSite`, `ProfilePage`, `Person`).
* Explicitly states academic degree parameters (B.Tech CSE), geographical location (Hyderabad, India), core developer competencies, and project references.
* Drastically improves organic crawler parsing, indexation hierarchy, and Google search queries match-making.

### 5. ⚙️ Hardware-Accelerated Tech Ticker & Parallax Controls
* Designed a continuous, infinite-loop technical icon marquee powered exclusively by GPU-accelerated CSS `transform: translate3d` transitions to prevent browser repaint/reflow lag.
* Embedded smooth perspective parallax listeners that translate card layers relative to the viewport’s scroll boundaries for elegant UI depth.

---

## 💻 In-Browser Terminal Reference Sheet

Below is a reference of the commands built directly into the CLI controller:

| Command | Action | Output Description |
|:---|:---|:---|
| `help` | Lists Options | Renders a custom list of all available interactive commands |
| `about` | Prints Bio | Displays graduation year, academic institution, and developer specialties |
| `skills` | Renders Stack | Generates a structured list of core languages, frameworks, AI/ML, databases, and DevOps tools |
| `projects` | Details Assets | Returns live links and tech stacks for *ClaimTrackr*, *NexBrief*, *VoxCalc*, *Block Crush*, *FinTrack*, and *Weather Intel* |
| `achievements` | Displays Honors | Lists national hackathon victories, 1st prize awards, and C-DAC bug bounty assessment records |
| `resume` | ATS Credentials | Direct links to interactive web resume and 1-click downloads for 1-Page PDF & DOCX |
| `contact` | Prints Channels | Outlines instant direct communication channels (Email, WhatsApp, Location) |
| `clear` | Clears Screen | Flushes DOM history inside the terminal card console |

---

## 🏆 Major Achievements & Honors

1. **🏆 1st Prize, Web Development — HackathonZ 2026 (Hack2Hire)**  
   *Malla Reddy University | July 17–18, 2026*  
   Clinched 1st Prize at a national 24-hour hackathon with team Kernel Knights (5 members). Built **TruthLens AI**, an automated news transparency and narrative verification platform that aggregates multi-source coverage, extracts core facts, and detects media framing and bias using automated NLP pipelines.

2. **🎖️ 6th of 260+ Teams — LaunchPadX 2026 (Top 2.3%)**  
   *SNIST in collaboration with VetriaAI | August 22–23, 2026*  
   Placed 6th out of 260+ teams and 1,200+ participants nationwide. Engineered **Life Admin AI**, an autonomous AI agent leveraging the Model Context Protocol (MCP) to execute multi-app actions across daily workflows (email inboxes, calendars, task managers) instead of passive chatbot recommendations.

3. **🛡️ C-DAC BOSS OS Bug Bounty Challenge 2026**  
   *Centre for Development of Advanced Computing (C-DAC) | July 7–8, 2026*  
   Participated in a PAN-India 36-hour authorized OS security assessment of BOSS OS (Bharat Operating System Solutions). Submitted **11 vulnerability findings, all evaluated** by the C-DAC jury across authentication, package management, kernel, and desktop layers.

4. **💡 MSME Idea Hackathon — Stage 2 National Shortlist**  
   *Ministry of Micro, Small & Medium Enterprises, Govt. of India | August 2026*  
   National innovation proposal selected for Stage 2 evaluation under the Ministry of MSME incubation grant scheme among thousands of nationwide student and startup applicants.

---

## 🛠️ Tech Stack & Clean Architecture

| Layer | Technology | Key Responsibility |
|:---|:---|:---|
| **Semantic Foundation** | HTML5 | Accessible document structure, Open Graph tags, and Schema.org JSON-LD metadata |
| **Design Framework** | CSS3 (Modern Glassmorphism) | Custom CSS variables, responsive CSS Grid / Flexbox layouts, dark theme tokens, and keyframe animations |
| **Logic & CLI Engine** | Modern ES6+ JavaScript | Keyboard event bindings, in-memory command history buffer, DOM manipulation, and clipboard copy triggers |
| **Form Processing** | EmailJS API | Asynchronous serverless email dispatch directly to primary inbox with confetti visual triggers |
| **Document Generation** | Python 3 + python-docx + Chromium | Automated 1-page A4 PDF and ATS-compliant DOCX resume compilation |

---

## 📂 File Directory Tree

```text
portfolio-website/
├── achievements/                          # Dedicated Google Sitelink & Case Study subpages
│   ├── hackathonz-2026-1st-prize/         # 1st Prize, Web Development — HackathonZ 2026
│   ├── launchpadx-snist-6th-rank/         # 6th of 260+ teams — LaunchPadX 2026
│   ├── cdac-boss-os-bug-bounty/           # C-DAC BOSS OS Bug Bounty Challenge 2026
│   └── msme-idea-hackathon/               # MSME Idea Hackathon (Stage 2 Shortlist)
├── assets/
│   ├── claimtrackr.jpg                    # ClaimTrackr AI System project card banner
│   ├── nexbrief-v2.jpg                    # NexBrief IT Newsletter Platform preview
│   ├── voxcalc.jpg                        # VoxCalc AI Computational Suite preview
│   ├── block-crush.jpg                    # Block Crush Flutter puzzle game preview
│   ├── fintrack.png                       # FinTrack personal finance tracker preview
│   ├── weather-v2.jpg                     # Weather Intel Flutter REST API preview
│   ├── profile-avatar.png                 # Professional profile representation
│   ├── nptel-logo.png                     # Verified NPTEL certification logo badge
│   ├── Mohammed_Rounaq_Ali_Resume.pdf     # 1-Page A4 ATS-optimized PDF resume
│   ├── Mohammed_Rounaq_Ali_Resume.docx    # 1-Page ATS-optimized Word DOCX resume
│   ├── resume.html                        # LaTeX-styled responsive resume webpage
│   ├── DATABASE_MANAGEMENT_SYSTEM-NPTEL.pdf # NPTEL Elite+Silver DBMS certificate
│   ├── PROGRAMMING_IN_JAVA-NPTEL.pdf      # NPTEL Elite+Silver Java certificate
│   ├── PYTHON_FOR_DATA_SCIENCE-NPTEL.pdf  # NPTEL Elite+Silver Python certificate
│   └── favicon*                           # High-resolution favicon suite (16x16 to 512x512)
├── index.html                             # Main single-page application & semantic layout
├── style.css                              # Design tokens, glassmorphism, animations, & media queries
├── script.js                              # Terminal shell, scroll controller, particles, & EmailJS
├── site.webmanifest                       # Progressive Web App configuration
├── robots.txt                             # Search crawler instruction set
├── sitemap.xml                            # Search engine XML sitemap index (all 6 URLs)
├── llms.txt                               # Google AI Overview & LLM context summary
├── llms-full.txt                          # Comprehensive LLM ground truth context
├── _headers                               # Netlify custom HTTP headers (CORS & caching)
└── README.md                              # Professional repository documentation
```

---

## 🖥️ Local Installation & Development

To clone, explore, and run this repository locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/md-rounaq-ali/portfolio.git
   ```

2. **Navigate into the workspace:**
   ```bash
   cd portfolio
   ```

3. **Launch local preview:**
   * Double-click `index.html` to run statically in any modern browser.
   * **Recommended Developer Setup:** Open the folder in VS Code, install the **Live Server** extension, and click **Go Live** on port `5500`.

---

## 💼 Recruiter Evaluation & Contact

* **Live Portfolio:** [https://md-rounaq-ali.netlify.app](https://md-rounaq-ali.netlify.app)
* **Direct Resume (HTML):** [https://md-rounaq-ali.netlify.app/assets/resume.html](https://md-rounaq-ali.netlify.app/assets/resume.html)
* **Direct PDF Resume:** [Mohammed_Rounaq_Ali_Resume.pdf](https://md-rounaq-ali.netlify.app/assets/Mohammed_Rounaq_Ali_Resume.pdf)
* **Direct Word (.docx) Resume:** [Mohammed_Rounaq_Ali_Resume.docx](https://md-rounaq-ali.netlify.app/assets/Mohammed_Rounaq_Ali_Resume.docx)
* **Email:** [tabrasali7@gmail.com](mailto:tabrasali7@gmail.com)
* **LinkedIn:** [linkedin.com/in/md-rounaq-ali](https://www.linkedin.com/in/md-rounaq-ali/)
* **GitHub:** [github.com/md-rounaq-ali](https://github.com/md-rounaq-ali)

---

*Architected and developed with precision, clean design, and high-performance software engineering standards.*
