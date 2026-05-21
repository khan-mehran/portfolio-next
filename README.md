# Mehran Khan — Personal Portfolio

A production-ready personal portfolio website built with **Next.js 14**, **Framer Motion**, **GSAP**, and **Tailwind CSS**. Features dark/light mode, smooth animations, a working contact form, and a fully responsive design.

**Live Demo:** [mehran.dev](https://mehran.dev) &nbsp;·&nbsp; **Email:** [mehrankhanciit@gmail.com](mailto:mehrankhanciit@gmail.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS + CSS Custom Properties |
| Animations | Framer Motion + GSAP (ScrollTrigger) |
| Theme | next-themes (dark default) |
| Forms | react-hook-form + Zod validation |
| Email | Nodemailer (Gmail SMTP) |
| Icons | Lucide React |
| Font | Plus Jakarta Sans (next/font) |
| Deployment | Vercel (recommended) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Skills Marquee, Services, Featured Projects, Experience, Stats, Testimonials Slider, FAQ, Contact Banner |
| `/about` | Bio, modern tech grid (Expert/Advanced/Proficient), career timeline |
| `/projects` | Filterable project grid with pagination (6 per page) |
| `/blog` | Blog post listing with cover cards |
| `/blog/[slug]` | Individual post with markdown renderer |
| `/contact` | Contact form (sends real emails) + info cards |

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/portfolio-next.git
cd portfolio-next
npm install
```

### 2. Configure Environment Variables

Copy the example file and fill in your Gmail App Password:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
EMAIL_USER=mehrankhanciit@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **How to get a Gmail App Password:**
> 1. Enable 2-Step Verification on your Google account
> 2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
> 3. Create an App Password for **Mail**
> 4. Paste the 16-character password (no spaces) into `EMAIL_PASS`

Without this, the form still works in dev — submissions are logged to the console.

### 3. Add Your Profile Photo

Place your photo at:

```
public/profile.jpg
```

The hero section displays it automatically. Without the file, it falls back to the `MK` initials placeholder.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — Navbar, Footer, ThemeProvider
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── projects/page.tsx       # Projects page (filterable + paginated)
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post detail
│   ├── contact/page.tsx        # Contact page with live form
│   └── api/contact/route.ts    # Email API route (Nodemailer)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Glassmorphism navbar, mobile menu
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── CursorGlow.tsx      # Mouse-following glow (desktop)
│   │   └── PageTransition.tsx
│   ├── sections/
│   │   ├── Hero.tsx            # Split layout, typewriter, profile photo
│   │   ├── SkillsMarquee.tsx   # Infinite dual-row marquee
│   │   ├── Services.tsx        # 6 service cards
│   │   ├── FeaturedProjects.tsx
│   │   ├── ExperienceSection.tsx # Vertical timeline
│   │   ├── Stats.tsx           # GSAP countTo numbers
│   │   ├── TestimonialSlider.tsx # Auto-play carousel
│   │   ├── Faq.tsx             # Accordion
│   │   └── ContactBanner.tsx   # Bottom CTA
│   ├── animations/
│   │   ├── FloatingOrbs.tsx
│   │   ├── AnimatedText.tsx
│   │   └── CountUp.tsx
│   ├── FloatingGraphic.tsx     # GSAP floating SVGs per section
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Input.tsx
│
├── data/
│   ├── projects.ts             # 6 sample projects
│   ├── posts.ts                # 4 sample blog posts
│   └── skills.ts               # Tech stack, timeline, stats
│
├── lib/
│   └── utils.ts                # cn(), formatDate()
│
├── public/
│   ├── profile.jpg             # ← Add your photo here
│   └── resume.pdf              # ← Replace with your actual CV
│
└── styles/ (via app/globals.css)
```

---

## Customisation

### Update Personal Info

Edit these files with your own content:

| File | What to update |
|---|---|
| `data/projects.ts` | Your real projects |
| `data/posts.ts` | Your blog posts |
| `data/skills.ts` | Tech stack, timeline, stats |
| `components/layout/Navbar.tsx` | Logo text / name |
| `components/layout/Footer.tsx` | Social links, name |
| `components/sections/Hero.tsx` | Bio text, social links |
| `components/sections/ContactBanner.tsx` | Email address |
| `app/contact/page.tsx` | Contact email, social links |
| `app/layout.tsx` | SEO metadata |

### Add Your Real Projects

Edit `data/projects.ts`:

```ts
{
  id: "1",
  title: "Your Project Name",
  description: "Short description shown on the card.",
  tags: ["Next.js", "TypeScript"],
  category: "Full Stack",   // "Frontend" | "Backend" | "Full Stack"
  github: "https://github.com/you/project",
  live: "https://yourproject.com",
  featured: true,           // shows on home page
  year: "2024",
}
```

### Colour / Brand Changes

All brand colours are defined in two places:

- `tailwind.config.ts` — `theme.extend.colors.brand`
- `app/globals.css` — CSS custom properties (`:root` and `.dark`)

Change `#41b883` to your own colour in both files.

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**:

```
EMAIL_USER = mehrankhanciit@gmail.com
EMAIL_PASS = your_app_password
```

### Other Platforms

```bash
npm run build
npm start
```

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## License

MIT — free to use and adapt for your own portfolio.

---

<p align="center">Built with ❤️ by <strong>Mehran Khan</strong></p>
