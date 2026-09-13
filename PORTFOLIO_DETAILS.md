# Arya Patel — Complete Portfolio Data & Layout Specification

> **Purpose:** This file contains the complete copy, links, media references, projects, certifications, contact details, and layout architecture from the current portfolio. You can use this document directly as a single source of truth when building, redesigning, or populating a new portfolio.

---

## 📑 Table of Contents
1. [Personal Identity & Metadata](#1-personal-identity--metadata)
2. [Contact & Social Links](#2-contact--social-links)
3. [Navigation & Information Architecture](#3-navigation--information-architecture)
4. [Section 1: Hero](#section-1-hero)
5. [Section 2: Profile & About Me](#section-2-profile--about-me)
6. [Section 3: Tech Stack & Skills](#section-3-tech-stack--skills)
7. [Section 5: Selected Work / Projects](#section-5-selected-work--projects)
8. [Section 6: Credentials & Certifications](#section-6-credentials--certifications)
9. [Section 7: Contact & Rich Footer](#section-7-contact--rich-footer)
10. [Component & Animation Architecture Blueprint](#component--animation-architecture-blueprint)
11. [Ready-to-Use JSON Data Dump](#ready-to-use-json-data-dump)

---

## 1. Personal Identity & Metadata

| Field | Value |
| :--- | :--- |
| **Full Name** | `Arya Patel` |
| **Professional Title** | `Full-Stack Developer · AI Products` |
| **Hero Tagline** | `From scratch to Deployment.` |
| **Profile Headline** | `Building Products That Feel Premium And Perform Hard` |
| **Short Bio** | `I’m Arya Patel, a Full-Stack Developer currently pursuing B.Tech at Manipal Institute of Technology. I enjoy turning early ideas into reliable products—designing the interface, engineering the system, and adding AI where it creates genuine value.` |
| **Footer Bio** | `Full-Stack Developer building reliable, AI-powered digital products.` |
| **User Handle** | `aryapatel` / `arya1411` |
| **Status Badges** | `Open To Work`, `Remote + Onsite`, `Immediate Joiner` |
| **Resume Download Link** | [Google Drive Direct Download](https://drive.google.com/uc?export=download&id=1ga1pX3lHRxvJvKyr_BWc54S3ljTUoTf2) |
| **Profile Photo Asset** | `./src/assets/IMG_0155.PNG` |
| **Copyright** | `© 2026 Arya Patel. All rights reserved.` |

---

## 2. Contact & Social Links

| Platform | Link / Details | Action Type |
| :--- | :--- | :--- |
| **Email** | `patelarya424@gmail.com` | `mailto:patelarya424@gmail.com` |
| **Project Inquiry Email** | `patelarya424@gmail.com?subject=Project Inquiry` | `mailto:patelarya424@gmail.com?subject=Project%20Inquiry` |
| **Phone** | `+91 9428578531` | `tel:+9428578531` |
| **GitHub** | [github.com/arya1411](https://github.com/arya1411) | External Link |
| **LinkedIn** | [linkedin.com/in/arya-patel-1405asd](https://www.linkedin.com/in/arya-patel-1405asd) | External Link |
| **X (Twitter)** | [x.com](https://x.com) | External Link |

---

## 3. Navigation & Information Architecture

- **Brand Anchor:** `Arya Patel` (`#`)
- **Nav Links:**
  1. `Profile` -> `#profile`
  2. `Projects` -> `#projects`
  3. `Certifications` -> `#certifications`
  4. `Contact` -> `#contact`
- **Secondary Footer Links:**
  - `Home` (`#`)
  - `Projects` (`#projects`)
  - `About` (`#profile`)
  - `Email` (`mailto:patelarya424@gmail.com`)
  - `Phone` (`tel:+9428578531`)

---

## Section 1: Hero

### Layout Structure
- **Container:** Full screen viewport height (`100svh` / `100vh`), dark luxury aesthetic (`#070412` / pure black).
- **Background FX:** Interactive WebGL Ferrofluid / liquid shader canvas responding to mouse motion.
- **Header:** Sticky/Fixed top navigation with name on left and navigation anchor links on right.
- **Center Content:**
  1. Small uppercase subtitle: `"INTRODUCING"` (staggered fade-in).
  2. Oversized typography title: `"Arya Patel"` (individual character stagger animation with blur-to-focus transition).
  3. Caption text: `"From scratch to Deployment."` (subtle muted grey with slide-up reveal).

---

## Section 2: Profile & About Me

### Layout Structure
- **Section ID:** `#profile`
- **Outer Shell:** Neon electric border container (`ElectricBorder` with warm accent `#d8b89a`) on a dark gradient background (`linear-gradient(170deg, #03050a 0%, #05070d 48%, #070a12 100%)`).
- **Two-Column Grid:**
  - **Left Column (Content & CTAs):**
    - Section Label: `PROFILE`
    - Main Heading: `Building Products That Feel Premium And Perform Hard`
    - Description Paragraph: `I’m Arya Patel, a Full-Stack Developer currently pursuing B.Tech at Manipal Institute of Technology. I enjoy turning early ideas into reliable products—designing the interface, engineering the system, and adding AI where it creates genuine value.`
    - Badges:
      - `Open To Work`
      - `Remote + Onsite`
      - `Immediate Joiner`
    - CTA Button: `Download Resume` -> `https://drive.google.com/uc?export=download&id=1ga1pX3lHRxvJvKyr_BWc54S3ljTUoTf2`
  - **Right Column (Interactive 3D Profile Card):**
    - Component: `ProfileCard`
    - Name: `Arya Patel`
    - Role: `Full-Stack Developer · AI Products`
    - Avatar: `profileImage` (`./src/assets/IMG_0155.PNG`)
    - Contact Action: Opens email client with prefilled inquiry subject.

### 3 Core Pillars (Grid of 3 Cards below Profile)

#### 1. Product Thinking
- **Title:** `Product Thinking`
- **Description:** `I map technical choices to measurable business outcomes and user value.`

#### 2. System Architecture
- **Title:** `System Architecture`
- **Description:** `I design maintainable backend systems with performance, security, and scale in mind.`

#### 3. AI Integration
- **Title:** `AI Integration`
- **Description:** `I ship practical AI features with retrieval, evaluation loops, and production reliability.`

---

## Section 3: Tech Stack & Skills

### Layout Structure
- **Header:**
  - Label: `TECHNOLOGIES`
  - Heading: `Tech Stack`

### A. Infinite Logo Marquee (LogoLoop)
Infinite horizontal smooth ticker featuring SimpleIcons CDN assets:

| Technology | Logo URL |
| :--- | :--- |
| **C++** | `https://cdn.simpleicons.org/cplusplus/e5e7eb` |
| **Python** | `https://cdn.simpleicons.org/python/e5e7eb` |
| **JavaScript** | `https://cdn.simpleicons.org/javascript/e5e7eb` |
| **MongoDB** | `https://cdn.simpleicons.org/mongodb/e5e7eb` |
| **TypeScript** | `https://cdn.simpleicons.org/typescript/e5e7eb` |
| **Tailwind CSS** | `https://cdn.simpleicons.org/tailwindcss/e5e7eb` |
| **Vercel** | `https://cdn.simpleicons.org/vercel/e5e7eb` |
| **GitHub** | `https://cdn.simpleicons.org/github/e5e7eb` |
| **Docker** | `https://cdn.simpleicons.org/docker/e5e7eb` |
| **Prisma** | `https://cdn.simpleicons.org/prisma/e5e7eb` |
| **Vite** | `https://cdn.simpleicons.org/vite/e5e7eb` |
| **Svelte** | `https://cdn.simpleicons.org/svelte/e5e7eb` |
| **React** | `https://cdn.simpleicons.org/react/e5e7eb` |

### B. Categorized Skill Cards (6-Card Grid with Border Glow)

#### 1. MERN Stack
- **Summary:** `Full-stack JavaScript architecture for fast product delivery and scalable APIs.`
- **Tech Items:** `MongoDB`, `Express`, `React`, `Node.js`

#### 2. AI And ML
- **Summary:** `Practical machine-learning workflows with model serving and performance tuning.`
- **Tech Items:** `TensorFlow` *(Exploring)*, `Python`, `NumPy`, `Pandas`

#### 3. Cloud And DevOps
- **Summary:** `Production-ready deployment pipelines with containers and observability.`
- **Tech Items:** `Docker` *(Exploring)*, `Vercel`, `GitHub Actions`, `Linux`

#### 4. Data And APIs
- **Summary:** `Reliable data modeling and API design for real-world web products.`
- **Tech Items:** `PostgreSQL` *(Exploring)*, `MongoDB`, `REST API`, `Prisma` *(Exploring)*

#### 5. Frontend Systems
- **Summary:** `Responsive, accessible interfaces with component-driven architecture.`
- **Tech Items:** `React`, `TypeScript`, `Tailwind CSS`, `Vite`

#### 6. AI Product Layer
- **Summary:** `Integrating retrieval and prompt orchestration into useful product features.`
- **Tech Items:** `LLM Apps`, `RAG` *(Exploring)*, `Prompt Design`, `Evaluation`

---

## Section 5: Selected Work / Projects

### Layout Structure
- **Section ID:** `#projects`
- **Header:**
  - Label: `SELECTED WORK`
  - Heading: `Project Grid`
- **Layout:** Bento-style 12-column grid combining featured hero project, side-by-side secondary projects, and bottom row utilities.

---

### Project Details

#### 1. Code Sentinel ⭐ *(Featured Project)*
- **Badge / Category:** `Featured Project` • `GitHub SaaS`
- **Status:** `In Progress`
- **Title:** `Code Sentinel`
- **Description:** `GitHub SaaS AI-powered automated code review platform where developers connect their GitHub repos and Code Sentinel can analyze code/PRs and give automated review insights.`
- **Key Tags:** `AI Code Review`, `GitHub SaaS`, `Automated PR Insights`
- **Link:** *In active development*

#### 2. Prep AI
- **Category:** `AI Integrated Learning Platform`
- **Title:** `Prep AI`
- **Description:** `Using Pre-trained AI models and AI API used for preparation of Technical Interview Rounds.`
- **Live Demo:** [https://ai-interview-preparation-pied.vercel.app/](https://ai-interview-preparation-pied.vercel.app/)
- **CTA:** `Live Demo →`

#### 3. Integrated Team Task Management and Collaboration Platform
- **Category:** `Project Management Platform`
- **Title:** `Integrated Team Task Management and Collaboration Platform`
- **Description:** `Full-stack platform for team task tracking, assignments, and real-time collaboration.`
- **GitHub Repository:** [https://github.com/arya1411/Task_Manager](https://github.com/arya1411/Task_Manager)
- **CTA:** `GitHub →`

#### 4. Expense Tracker
- **Category:** `Tracker Platform`
- **Title:** `Expense Tracker`
- **Description:** `Track income and expenses with categorized summaries and clear spending insights.`
- **GitHub Repository:** [https://github.com/arya1411/Expense-Tracker](https://github.com/arya1411/Expense-Tracker)
- **CTA:** `GitHub →`

#### 5. Universal Downloader
- **Category:** `Online Tool`
- **Title:** `Universal Downloader`
- **Description:** `A Flask-based web app to download content from multiple social media platforms.`
- **Status:** `Repository coming soon`

---

## Section 6: Credentials & Certifications

### Layout Structure
- **Section ID:** `#certifications`
- **Header:**
  - Label: `CREDENTIALS`
  - Heading: `Certifications`
  - Controls: Desktop horizontal scroll navigation buttons (Left / Right).
- **Display:** Horizontal smooth-snap scrollable card deck with glowing background accents.

---

### Certification Cards

#### 1. Machine Learning with Python — IBM
- **Issuer:** `IBM`
- **Year:** `2026`
- **Type:** `Professional Certificate`
- **Skills:** `Python`, `Machine Learning`, `Data Analysis`, `NumPy`, `Pandas`, `Scikit-learn`, `Statistics`
- **Credential Link:** [Coursera Certificate Verification](https://coursera.org/share/e6d2c7161bc09ed49a677ddc5fdbff14)

#### 2. Artificial Intelligence Fundamentals — IBM
- **Issuer:** `IBM`
- **Year:** `2026`
- **Type:** `Certification`
- **Skills:** `AI`, `Natural Language Processing`, `Data Analysis`
- **Credential Link:** `Pending / Verification URL`

#### 3. Linux on IBM LinuxONE — IBM
- **Issuer:** `IBM`
- **Year:** `2026`
- **Type:** `Certificate`
- **Skills:** `Linux`, `Command Line`, `Docker`
- **Credential Link:** `Pending / Verification URL`

#### 4. Machine Learning Specialization — DeepLearning.AI
- **Issuer:** `DeepLearning.AI`
- **Year:** `2026`
- **Type:** `Specialization`
- **Skills:** `Python`, `ML`, `Neural Nets`
- **Credential Link:** `Pending / Verification URL`

#### 5. Cloud Fundamentals — Google Cloud
- **Issuer:** `Google Cloud`
- **Year:** `2025`
- **Type:** `Skill Badge`
- **Skills:** `GCP`, `Deployment`, `DevOps`
- **Credential Link:** `Pending / Verification URL`

#### 6. Problem Solving — HackerRank
- **Issuer:** `HackerRank`
- **Year:** `2024`
- **Type:** `Skill Certification`
- **Skills:** `DSA`, `C++`, `Algorithms`
- **Credential Link:** `Pending / Verification URL`

---

## Section 7: Contact & Rich Footer

### Layout Structure
- **Section ID:** `#contact`
- **Structure:** Floating interactive contact card nested above a 4-column rich dark gradient footer.

### A. Floating Contact Card
- **Headline:** `Let's Build Something Bold Together`
- **Subheadline:** `Available for freelance projects, product collaborations, and full-stack work involving practical AI.`
- **Interactive Action Box:**
  - Display Email: `patelarya424@gmail.com`
  - Quick Button: `Contact Me` (`mailto:patelarya424@gmail.com?subject=Project%20Inquiry`)

### B. 4-Column Footer
- **Col 1 (Brand):**
  - Title: `Arya Patel`
  - Subtitle: `Full-Stack Developer building reliable, AI-powered digital products.`
- **Col 2 (Menu Navigation):**
  - `Home` (`#`)
  - `Projects` (`#projects`)
  - `About` (`#profile`)
- **Col 3 (Direct Contact):**
  - Email: `patelarya424@gmail.com` (`mailto:patelarya424@gmail.com`)
  - Phone: `+91 9428578531` (`tel:+9428578531`)
- **Col 4 (Socials):**
  - GitHub: [https://github.com/arya1411](https://github.com/arya1411)
  - LinkedIn: [https://www.linkedin.com/in/arya-patel-1405asd](https://www.linkedin.com/in/arya-patel-1405asd)
  - X (Twitter): [https://x.com](https://x.com)
- **Bottom Bar:**
  - `© 2026 Arya Patel. All rights reserved.`

---

## Component & Animation Architecture Blueprint

If you are writing or rebuilding the application in React, Vue, Svelte, or Next.js, here is the technical mapping:

```
App.jsx (Root)
│
├── <HeroSection>
│   ├── <Ferrofluid / WebGL Canvas /> (Fluid cursor reactive background)
│   ├── <HeaderNav /> (Brand + Anchor Jump Links)
│   └── <HeroTypography /> (GSAP Stagger + Blur In on characters)
│
├── <ProfileSection id="profile">
│   └── <ElectricBorder>
│       ├── <ProfileInfo /> (Bio, Status Pills, Resume Link)
│       ├── <ProfileCard /> (Interactive 3D Avatar Tilt Card)
│       └── <ProfilePillarsGrid /> (Product Thinking, System Arch, AI Integration)
│
├── <TechnologiesSection>
│   ├── <LogoLoop /> (SimpleIcons infinite marquee ticker)
│   └── <TechStackGrid>
│       └── <BorderGlow Card x 6 /> (MERN, AI/ML, Cloud/DevOps, Data/APIs, Frontend, AI Product)
│
├── <ProjectsSection id="projects">
│   └── <BentoGrid>
│       ├── <FeaturedProjectCard /> (Code Sentinel - GitHub SaaS)
│       ├── <ProjectCard /> (Prep AI)
│       ├── <ProjectCard /> (Integrated Team Task Management)
│       ├── <ProjectCard /> (Expense Tracker)
│       └── <ProjectCard /> (Universal Downloader)
│
├── <CertificationsSection id="certifications">
│   ├── <ScrollControlButtons />
│   └── <HorizontalSnapCarousel> (6 Certification Cards with Credential Links)
│
└── <FooterSection id="contact">
    ├── <FloatingContactCTA />
    └── <FourColumnFooter />
```

---

## Ready-to-Use JSON Data Dump

Below is the clean JSON representation of all data for easy programmatic import into any project:

```json
{
  "personal": {
    "name": "Arya Patel",
    "title": "Full-Stack Developer · AI Products",
    "headline": "Building Products That Feel Premium And Perform Hard",
    "tagline": "From scratch to Deployment.",
    "bio": "I’m Arya Patel, a Full-Stack Developer currently pursuing B.Tech at Manipal Institute of Technology. I enjoy turning early ideas into reliable products—designing the interface, engineering the system, and adding AI where it creates genuine value.",
    "footerBio": "Full-Stack Developer building reliable, AI-powered digital products.",
    "handle": "aryapatel",
    "status": ["Open To Work", "Remote + Onsite", "Immediate Joiner"],
    "resumeUrl": "https://drive.google.com/uc?export=download&id=1ga1pX3lHRxvJvKyr_BWc54S3ljTUoTf2",
    "avatarPath": "./assets/IMG_0155.PNG"
  },
  "contact": {
    "email": "patelarya424@gmail.com",
    "inquiryEmail": "patelarya424@gmail.com?subject=Project%20Inquiry",
    "phone": "+919428578531",
    "github": "https://github.com/arya1411",
    "linkedin": "https://www.linkedin.com/in/arya-patel-1405asd",
    "twitter": "https://x.com"
  },
  "pillars": [
    {
      "title": "Product Thinking",
      "detail": "I map technical choices to measurable business outcomes and user value."
    },
    {
      "title": "System Architecture",
      "detail": "I design maintainable backend systems with performance, security, and scale in mind."
    },
    {
      "title": "AI Integration",
      "detail": "I ship practical AI features with retrieval, evaluation loops, and production reliability."
    }
  ],
  "technologies": {
    "marquee": [
      { "name": "C++", "icon": "https://cdn.simpleicons.org/cplusplus/e5e7eb" },
      { "name": "Python", "icon": "https://cdn.simpleicons.org/python/e5e7eb" },
      { "name": "JavaScript", "icon": "https://cdn.simpleicons.org/javascript/e5e7eb" },
      { "name": "MongoDB", "icon": "https://cdn.simpleicons.org/mongodb/e5e7eb" },
      { "name": "TypeScript", "icon": "https://cdn.simpleicons.org/typescript/e5e7eb" },
      { "name": "Tailwind CSS", "icon": "https://cdn.simpleicons.org/tailwindcss/e5e7eb" },
      { "name": "Vercel", "icon": "https://cdn.simpleicons.org/vercel/e5e7eb" },
      { "name": "GitHub", "icon": "https://cdn.simpleicons.org/github/e5e7eb" },
      { "name": "Docker", "icon": "https://cdn.simpleicons.org/docker/e5e7eb" },
      { "name": "Prisma", "icon": "https://cdn.simpleicons.org/prisma/e5e7eb" },
      { "name": "Vite", "icon": "https://cdn.simpleicons.org/vite/e5e7eb" },
      { "name": "Svelte", "icon": "https://cdn.simpleicons.org/svelte/e5e7eb" },
      { "name": "React", "icon": "https://cdn.simpleicons.org/react/e5e7eb" }
    ],
    "cards": [
      {
        "title": "MERN Stack",
        "detail": "Full-stack JavaScript architecture for fast product delivery and scalable APIs.",
        "items": [{ "name": "MongoDB" }, { "name": "Express" }, { "name": "React" }, { "name": "Node.js" }]
      },
      {
        "title": "AI And ML",
        "detail": "Practical machine-learning workflows with model serving and performance tuning.",
        "items": [{ "name": "TensorFlow", "learning": true }, { "name": "Python" }, { "name": "NumPy" }, { "name": "Pandas" }]
      },
      {
        "title": "Cloud And DevOps",
        "detail": "Production-ready deployment pipelines with containers and observability.",
        "items": [{ "name": "Docker", "learning": true }, { "name": "Vercel" }, { "name": "GitHub Actions" }, { "name": "Linux" }]
      },
      {
        "title": "Data And APIs",
        "detail": "Reliable data modeling and API design for real-world web products.",
        "items": [{ "name": "PostgreSQL", "learning": true }, { "name": "MongoDB" }, { "name": "REST API" }, { "name": "Prisma", "learning": true }]
      },
      {
        "title": "Frontend Systems",
        "detail": "Responsive, accessible interfaces with component-driven architecture.",
        "items": [{ "name": "React" }, { "name": "TypeScript" }, { "name": "Tailwind CSS" }, { "name": "Vite" }]
      },
      {
        "title": "AI Product Layer",
        "detail": "Integrating retrieval and prompt orchestration into useful product features.",
        "items": [{ "name": "LLM Apps" }, { "name": "RAG", "learning": true }, { "name": "Prompt Design" }, { "name": "Evaluation" }]
      }
    ]
  },
  "projects": [
    {
      "title": "Code Sentinel",
      "category": "GitHub SaaS",
      "status": "In Progress",
      "featured": true,
      "description": "GitHub SaaS AI-powered automated code review platform where developers connect their GitHub repos and Code Sentinel can analyze code/PRs and give automated review insights.",
      "liveUrl": null,
      "githubUrl": null
    },
    {
      "title": "Prep AI",
      "category": "AI Integrated Learning Platform",
      "status": "Completed",
      "featured": false,
      "description": "Using Pre-trained AI models and AI API used for preparation of Technical Interview Rounds.",
      "liveUrl": "https://ai-interview-preparation-pied.vercel.app/",
      "githubUrl": null
    },
    {
      "title": "Integrated Team Task Management and Collaboration Platform",
      "category": "Project Management Platform",
      "status": "Completed",
      "featured": false,
      "description": "Full-stack platform for team task tracking, assignments, and real-time collaboration.",
      "liveUrl": null,
      "githubUrl": "https://github.com/arya1411/Task_Manager"
    },
    {
      "title": "Expense Tracker",
      "category": "Tracker Platform",
      "status": "Completed",
      "featured": false,
      "description": "Track income and expenses with categorized summaries and clear spending insights.",
      "liveUrl": null,
      "githubUrl": "https://github.com/arya1411/Expense-Tracker"
    },
    {
      "title": "Universal Downloader",
      "category": "Online Tool",
      "status": "Coming Soon",
      "featured": false,
      "description": "A Flask-based web app to download content from multiple social media platforms.",
      "liveUrl": null,
      "githubUrl": null
    }
  ],
  "certifications": [
    {
      "issuer": "IBM",
      "title": "Machine Learning with Python",
      "type": "Professional Certificate",
      "date": "2026",
      "skills": ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas", "Scikit-learn", "Statistics"],
      "credentialUrl": "https://coursera.org/share/e6d2c7161bc09ed49a677ddc5fdbff14"
    },
    {
      "issuer": "IBM",
      "title": "Artificial Intelligence Fundamentals",
      "type": "Certification",
      "date": "2026",
      "skills": ["AI", "Natural Language Processing", "Data Analysis"],
      "credentialUrl": "#"
    },
    {
      "issuer": "IBM",
      "title": "Linux on IBM LinuxONE",
      "type": "Certificate",
      "date": "2026",
      "skills": ["Linux", "Command Line", "Docker"],
      "credentialUrl": "#"
    },
    {
      "issuer": "DeepLearning.AI",
      "title": "Machine Learning Specialization",
      "type": "Specialization",
      "date": "2026",
      "skills": ["Python", "ML", "Neural Nets"],
      "credentialUrl": "#"
    },
    {
      "issuer": "Google Cloud",
      "title": "Cloud Fundamentals",
      "type": "Skill Badge",
      "date": "2025",
      "skills": ["GCP", "Deployment", "DevOps"],
      "credentialUrl": "#"
    },
    {
      "issuer": "HackerRank",
      "title": "Problem Solving",
      "type": "Skill Certification",
      "date": "2024",
      "skills": ["DSA", "C++", "Algorithms"],
      "credentialUrl": "#"
    }
  ]
}
```
