# Sidhant Jha Portfolio

## Current State
New project. No existing frontend or backend code.

## Requested Changes (Diff)

### Add
- Full-page personal portfolio website for Sidhant Jha (software engineer)
- 11 distinct page sections as separate React components
- Sticky floating navbar with smooth scroll to sections
- Framer Motion scroll-triggered animations (fadeInUp, stagger, hover scale)
- Contact form that submits messages to the backend

**Sections:**
1. Hero — full-screen, name/tagline/description, CTA buttons (View Projects, Download Resume), social icons (GitHub, LinkedIn, Email, LeetCode)
2. About — two-column desktop / stacked mobile, philosophy statement, highlights
3. Experience — vertical timeline with two entries (Placify Technologies AI Intern, Floatr Wealth GET Mobile)
4. Projects — grid of 3 cards (RESET, Geo Viral Tweet Prediction, AI Career Guide), each with tech pills, GitHub/Demo buttons, hover glow
5. Engineering Thinking — 4 philosophy cards (Systems First, Performance & Reliability, Learning New Systems, Communication & Leadership)
6. Skills — responsive grid grouped by category (Languages, Backend, Mobile, Databases, AI & Data, Tools)
7. Education — card with B.Tech CSE details from SOA University, CGPA, coursework
8. Leadership — Toastmasters achievement card
9. Curiosity — aerospace curiosity section with 3 idea cards
10. Contact — email/phone/social display + contact form (name, email, message, send)
11. Footer — name, copyright, social icons

**Backend:**
- `submitContact(name: Text, email: Text, message: Text): async Result` — stores contact form submissions
- `getContacts(): async [ContactEntry]` — admin read of submissions

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Select no extra Caffeine components (contact form uses native backend)
2. Generate Motoko backend with contact form submission storage
3. Build all 11 frontend section components with Framer Motion animations
4. Wire contact form to backend `submitContact` actor call
5. Add Inter font, dark-mode Tailwind config, global CSS variables
6. Implement sticky navbar with section IDs and smooth scroll
7. Validate and deploy
