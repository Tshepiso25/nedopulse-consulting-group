# NEDOPULSE Consulting Group — Complete Build & Launch Guide

This project is the React + Vite foundation for the NEDOPULSE Consulting Group homepage based on the approved visual mockup.

## 0. What you are building

Final flow:

Local computer
   ↓
React + Vite website
   ↓
GitHub repository
   ↓
Vercel deployment
   ↓
Temporary Vercel URL
   ↓
Buy/connect official domain
   ↓
Vercel custom domain
   ↓
Live NEDOPULSE website

You do NOT need to buy the domain while building.

---

# 1. Install the tools

Install these on Windows:

- Node.js LTS
- Visual Studio Code
- Git

After installation, open PowerShell and verify:

```powershell
node -v
npm -v
git --version
```

If all three return versions, continue.

---

# 2. Extract the project

Extract the ZIP somewhere easy, for example:

```text
Documents/
└── NEDOPULSE/
    ├── index.html
    ├── package.json
    ├── public/
    │   └── hero-devices.jpg
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── styles.css
```

Open the `nedopulse-site` folder in VS Code.

VS Code:
File → Open Folder → select `nedopulse-site`

---

# 3. Install the project dependencies

Open the VS Code terminal:

Terminal → New Terminal

Run:

```powershell
npm install
```

Wait for it to finish.

---

# 4. Start the website locally

Run:

```powershell
npm run dev
```

Vite will show a local address, normally:

```text
http://localhost:5173/
```

Ctrl + click that address.

Your website now runs locally.

You can build the entire site without owning a domain.

---

# 5. Understand the files

## index.html

The browser entry point and basic SEO metadata.

## src/main.jsx

Starts React and loads the application.

## src/App.jsx

Contains the actual page structure:

- navigation
- hero
- five services
- template showcase
- process
- why NEDOPULSE
- CTA
- footer

## src/styles.css

Contains the complete visual system:

- colors
- gradients
- spacing
- cards
- buttons
- responsive layout
- futuristic glow effects

## public/hero-devices.jpg

The current hero visual.

IMPORTANT:
This is a temporary visual based on the approved mockup. Before final launch, replace it with a standalone NEDOPULSE hero graphic so the production website does not depend on a screenshot crop.

---

# 6. The current visual system

Main background:

```css
--bg:#020712;
```

Secondary background:

```css
--bg2:#050b18;
```

Primary cyan:

```css
--cyan:#20e5ff;
```

Blue:

```css
--blue:#238dff;
```

Purple:

```css
--purple:#9b5cff;
```

The major buttons use a cyan → blue → purple gradient.

This is the visual identity we should preserve while we expand the site.

---

# 7. Build the real NEDOPULSE pages

The homepage is the first production page.

Next we should create:

```text
/
├── Home
├── /services
│   ├── /website-development
│   ├── /seo-digital-growth
│   ├── /maintenance-support
│   ├── /software-solutions
│   └── /digital-design-branding
├── /templates
│   ├── /business-pro
│   ├── /portfolio-pro
│   ├── /restaurant-pro
│   └── /school-pro
├── /about
├── /pricing
├── /blog
└── /contact
```

Do not build all of these at once.

Finish the homepage first, then create the template system.

---

# 8. Replace placeholder information

In `src/App.jsx`, replace:

```text
hello@nedopulseconsulting.co.za
```

with your actual business email when ready.

Also replace:

- social links
- template demo links
- template images
- service descriptions
- pricing
- business contact details

---

# 9. Test the production build

Before GitHub/Vercel, run:

```powershell
npm run build
```

You want to see a successful Vite production build.

If it fails, fix the error before deploying.

---

# 10. Create the Git repository

Inside the project folder:

```powershell
git init
git add .
git commit -m "Initial NEDOPULSE website"
git branch -M main
```

Create an EMPTY GitHub repository.

Suggested name:

```text
nedopulse-consulting-group
```

Do not add a README or other files when creating the empty repository if you are going to push this existing local project.

GitHub will give you the repository URL.

Then run:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/nedopulse-consulting-group.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

# 11. Verify GitHub

Open the GitHub repository.

You should see:

```text
index.html
package.json
public/
src/
README.md
```

Your source code is now backed up in GitHub.

---

# 12. Deploy to Vercel

Create/sign into your Vercel account.

Choose:

New Project

Then import:

```text
nedopulse-consulting-group
```

Vercel detects the Vite project.

Use:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Then deploy.

Vercel will give you a temporary address similar to:

```text
nedopulse-consulting-group.vercel.app
```

Test that address.

You now have a live website without owning a domain.

---

# 13. Buy the official domain

Only do this when the website is ready.

You can purchase the domain from a registrar of your choice.

For example, your final domain might be:

```text
nedopulseconsulting.co.za
```

Do not assume that exact domain is available until you search the registrar.

---

# 14. Connect the domain to Vercel

In Vercel:

Project
→ Settings
→ Domains
→ Add Domain

Enter your domain.

Vercel will show the DNS configuration required for your domain.

Go to the registrar where you purchased the domain and enter the DNS records Vercel provides.

Do not guess DNS values.

Vercel's current domain flow guides you through the required records.

---

# 15. Add www

You can configure both:

```text
nedopulseconsulting.co.za
www.nedopulseconsulting.co.za
```

Choose one as the primary domain and redirect the other to it.

Vercel handles the HTTPS certificate after the domain is correctly configured.

---

# 16. Final launch checklist

Before announcing the website:

[ ] Homepage finished
[ ] All buttons work
[ ] Navigation works
[ ] Mobile layout tested
[ ] Tablet layout tested
[ ] Desktop layout tested
[ ] Contact information correct
[ ] Email works
[ ] Template demos work
[ ] Pricing is correct
[ ] No placeholder text
[ ] No broken images
[ ] No console errors
[ ] `npm run build` succeeds
[ ] Vercel deployment succeeds
[ ] Custom domain connected
[ ] HTTPS works
[ ] Favicon added
[ ] Page title correct
[ ] Meta description added
[ ] Google Search Console connected
[ ] Analytics connected
[ ] Privacy/legal pages added where appropriate

---

# 17. How updates will work after launch

This is the important workflow:

```text
YOU
 ↓
Edit code locally
 ↓
npm run dev
 ↓
Test
 ↓
git add .
 ↓
git commit -m "Describe change"
 ↓
git push
 ↓
GitHub
 ↓
Vercel automatically deploys
 ↓
LIVE WEBSITE UPDATED
```

You will not need to manually upload the website to Vercel every time.

---

# 18. Recommended NEDOPULSE development order

PHASE 1
Homepage
↓
PHASE 2
Services pages
↓
PHASE 3
Template gallery
↓
PHASE 4
Individual template demos
↓
PHASE 5
Contact / quote system
↓
PHASE 6
Pricing
↓
PHASE 7
About
↓
PHASE 8
Blog
↓
PHASE 9
SEO + analytics
↓
PHASE 10
Production launch

---

# 19. Long-term automation architecture

Eventually the client workflow can become:

Client
 ↓
Website
 ↓
Choose Template
 ↓
Quote Form
 ↓
Requirements collected
 ↓
AI-assisted planning
 ↓
AI-assisted development
 ↓
Human QA
 ↓
Client review
 ↓
Revisions
 ↓
Deploy
 ↓
Maintenance plan

That is the system we can build around NEDOPULSE instead of treating every project as a completely new freelance job.

