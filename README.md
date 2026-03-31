<div align="center">

# Riddhima Rai — Personal Portfolio

### A modern, dark-themed portfolio built with Django and deployed on Vercel

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-lac-two-q17eba73w5.vercel.app/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Django](https://img.shields.io/badge/Django-6.0.3-092E20?style=for-the-badge&logo=django&logoColor=white)](https://djangoproject.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## Features

- **Dark Glassmorphism Theme** — Sleek dark background with vibrant green (#1DB954) neon accents
- **Smooth Scroll Navigation** — Pill-style navbar with dot indicators and section highlighting
- **Scroll Animations** — Fade-up effects on all elements as you scroll through sections
- **Particle Background** — Interactive particles.js canvas creating a dynamic atmosphere
- **Responsive Design** — Adapts to desktop, tablet, and mobile viewports
- **Live Contact Form** — Directly connected to Outlook inbox via FormSubmit
- **Custom Illustrations** — Personalized profile artwork in the hero section

---

## Walkthrough

### Home Section
The hero section features a split-screen layout with a left-aligned introduction (name, bio, tagline, CV download, and social links) and a custom illustration on the right.

---

### Skills Section  
A mesmerizing triple-row marquee with 34 skills auto-scrolling in alternating directions — covering Python, ML, Data Visualization, Web Development, and DevOps.

---

### Projects Section
Three featured projects displayed in a glassmorphism card grid, each with descriptions and live GitHub links.

| Project | Tech Stack |
|---------|-----------|
| Predictive Analytics Studio | Django, ML, Scikit-learn |
| Password Strength and Risk Analyzer | Java, Decision Tree |
| LA Crime Intelligence Dashboard | Power BI, DAX |

---

### Certificates Section
Six professional certificates displayed in a matching card grid with descriptions and Google Drive verification links.

| Certificate | Issuer |
|------------|--------|
| Master Generative AI | Udemy |
| OCI 2025 Data Science | Oracle University |
| Microsoft Excel Introduction | Simplilearn |
| Data Analytics Jobs Simulator | Deloitte |
| Graph Theory Programming Camp | AlgoUniversity |
| Build Generative AI Apps | Udemy |

---

### Achievements and Badges
Five achievement cards with custom SVG icons, including GSSoC 2025 contribution, Oracle certification, and Python/SQL badges.

---

### Contact Section
A dual-pane layout with stacked contact info cards (Email, LinkedIn, GitHub, Phone) on the left and a live message form on the right — connected directly to Outlook.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.12, Django 6.0.3 |
| Frontend | HTML5, CSS3 (Vanilla), JavaScript |
| Styling | Custom Glassmorphism, CSS Animations, Particle.js |
| Static Files | WhiteNoise 6.6.0 |
| Deployment | Vercel (Serverless Python) |
| Contact Form | FormSubmit.co to Outlook |

---

## Project Structure

```
portfolio/
├── manage.py
├── requirements.txt
├── vercel.json
├── build_files.py
│
├── portfolio/              # Django settings and WSGI
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── personal_portfolio/     # App with views
│   └── views.py
│
├── templates/              # HTML templates
│   ├── index.html          # Master template
│   └── sections/
│       ├── home.html
│       ├── skills.html
│       ├── projects.html
│       ├── education.html
│       ├── certificates.html
│       ├── training.html
│       ├── achievements.html
│       └── contact.html
│
├── static/                 # Static assets
│   ├── css/style.css
│   ├── js/main.js
│   ├── img/
│   │   ├── certificates/
│   │   └── *.png
│   ├── images/
│   └── assets/cv.pdf
│
├── staticfiles/            # Collected static (for Vercel)
└── screenshots/            # Portfolio screenshots
```

---

## Getting Started

### Prerequisites
- Python 3.12+
- pip

### Installation

```bash
# Clone the repository
git clone https://github.com/ridddhhimaaa/Riddhima-Portfolio.git
cd Riddhima-Portfolio

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r portfolio/requirements.txt

# Collect static files
cd portfolio
python manage.py collectstatic --noinput

# Run the development server
python manage.py runserver
```

Visit http://127.0.0.1:8000/ to view the portfolio locally.

### Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the portfolio/ directory
cd portfolio
vercel --prod
```

---

## Sections Overview

| # | Section | Description |
|---|---------|-------------|
| 1 | Home | Hero with intro, tagline, CV download, social icons, and profile photo |
| 2 | Skills | 34 animated marquee skills across ML, Web Dev, and DevOps |
| 3 | Projects | 3 featured projects with descriptions and GitHub links |
| 4 | Education | Timeline: B.Tech CSE (LPU), Class 12 and 10 |
| 5 | Certificates | 6 certificates with images and verification links |
| 6 | Training | C++ OOP and DSA summer training at CSE Pathshala |
| 7 | Achievements | GSSoC, Oracle OCI, Python and SQL badges |
| 8 | Contact | Live contact form, Email, LinkedIn, GitHub, Phone |

---

## Author

**Riddhima Rai**  
B.Tech CSE — Lovely Professional University

- Email: riddhima.rai23@lpu.in
- LinkedIn: https://www.linkedin.com/in/riddhima-rai-120737291/ 
- GitHub: https://github.com/ridddhhimaaa

---

<div align="center">

**If you liked this portfolio, give it a star!**

Made by Riddhima Rai

</div>
