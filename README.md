# Sean Niel Dizon — Portfolio Website

A professional, production-grade portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for recruiters and clients with a focus on accessibility, performance, and maintainability.

## 🚀 Tech Stack

- **Framework:** Next.js 13.5.6 (Pages Router)
- **Language:** TypeScript 5.3.3
- **Styling:** Tailwind CSS 3.4.17
- **Animation:** Framer Motion 12.23.26
- **Fonts:** Inter & Poppins (via `next/font`)
- **Animations:** Lottie React 2.4.1
- **Email:** Nodemailer 7.0.12

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Local Development

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dizon-portfolio

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
dizon-portfolio/
├── components/          # React components
│   ├── About.tsx       # About section with skills & education
│   ├── Contact.tsx     # Contact form with validation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation with active section tracking
│   ├── ProjectCard.tsx # Reusable project card component
│   ├── Projects.tsx    # Projects showcase
│   └── Reveal.tsx      # Animation wrapper component
├── data/               # Data files
│   └── projects.ts     # Project data
├── lib/                 # Utility functions
│   ├── fonts.ts        # Next.js font configuration
│   └── utils.ts        # Helper functions
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with fonts
│   ├── index.tsx       # Home page with SEO
│   └── api/            # API routes
│       └── contact.ts  # Contact form API endpoint
├── public/             # Static assets
│   ├── images/         # Image files
│   └── lottie/         # Lottie animation JSON files
└── styles/             # Global styles
    └── globals.css     # Tailwind & custom CSS
```

## 🎨 Design System

### Colors

The design system uses a nature-inspired palette:

- **Primary:** Sunlit Clay (`#dda15e`) - Accent color for CTAs and highlights
- **Neutral:** Black Forest (`#283618`) - Background and text
- **Accent:** Olive Leaf (`#606c38`) - Secondary accents
- **Light:** Cornsilk (`#fefae0`) - Light text

All colors are defined in `tailwind.config.js` with full scale (50-900) for flexibility.

### Typography

- **Body:** Inter (via `next/font`) - Clean, readable sans-serif
- **Headings:** Poppins (via `next/font`) - Modern, professional display font

Fonts are optimized with `next/font` for zero layout shift and optimal performance.

### Spacing & Layout

- Max-width container: `1280px`
- Content max-width: `768px`
- Consistent spacing scale using Tailwind's spacing utilities
- Border radius: `xl` (0.75rem), `2xl` (1rem), `3xl` (1.5rem)

## ♿ Accessibility Features

- **WCAG AA Compliant:** Color contrast ratios meet 4.5:1 minimum
- **Keyboard Navigation:** Full keyboard support with visible focus states
- **Skip to Content:** Skip link for screen readers
- **ARIA Labels:** Proper labeling for interactive elements
- **Semantic HTML:** Proper use of `<section>`, `<article>`, `<nav>`, etc.
- **Form Validation:** Client-side validation with accessible error messages
- **Focus Management:** Modal focus trapping and restoration

## 🚀 Performance Optimizations

- **Image Optimization:** All images use `next/image` with lazy loading
- **Font Optimization:** Self-hosted fonts via `next/font` (zero layout shift)
- **Code Splitting:** Automatic code splitting with Next.js
- **CSS Optimization:** Tailwind CSS purges unused styles in production
- **Lazy Loading:** Images and animations load on demand
- **Priority Loading:** Hero image uses `priority` flag

## 📧 Contact Form Setup

The contact form requires SMTP configuration via environment variables:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM="Portfolio Contact <your-email@example.com>"
CONTACT_TO=recipient@example.com
```

Create a `.env.local` file in the root directory with these variables.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel will automatically:
- Build the Next.js application
- Optimize images
- Set up CDN
- Provide HTTPS

### Other Platforms

The application can be deployed to any platform that supports Node.js:

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 Design Decisions

### Why Pages Router?

The project uses Next.js Pages Router (not App Router) because:
- Established, stable API
- Simpler for portfolio sites
- Full control over routing
- Better compatibility with existing patterns

### Why Framer Motion?

- Smooth, performant animations
- Declarative API
- Built-in accessibility considerations
- Small bundle size impact

### Why Tailwind CSS?

- Rapid development
- Consistent design system
- Automatic purging of unused CSS
- Excellent developer experience
- Mobile-first responsive design

### Color Palette Choice

The nature-inspired palette (olive, forest, clay) was chosen to:
- Stand out from typical tech portfolios
- Convey growth and professionalism
- Maintain excellent contrast ratios
- Create a memorable brand identity

## ✅ QA Checklist

### Responsiveness

- [x] Mobile (375px) - All sections render correctly
- [x] Tablet (768px) - Layout adapts appropriately
- [x] Desktop (1280px+) - Full layout with optimal spacing
- [x] Touch targets are at least 44x44px
- [x] Text is readable without zooming

### Accessibility

- [x] Keyboard navigation works throughout
- [x] Focus states are visible (2px outline, 4px ring)
- [x] Color contrast meets WCAG AA (4.5:1)
- [x] All images have alt text or aria-hidden
- [x] Form labels are properly associated
- [x] Error messages are announced to screen readers
- [x] Skip to content link works

### Performance

- [x] Lighthouse Desktop Score ≥ 90
- [x] Images are optimized (next/image)
- [x] Fonts load without layout shift
- [x] No console errors or warnings
- [x] CSS is purged in production
- [x] Lazy loading for below-fold content

### Functionality

- [x] Navigation scrolls to sections smoothly
- [x] Active section highlighting works
- [x] Contact form validates and submits
- [x] Modal dialogs open/close correctly
- [x] External links open in new tabs
- [x] Resume download works

### Browser Compatibility

- [x] Chrome/Edge (latest)
- [x] Firefox (latest)
- [x] Safari (latest)
- [x] Mobile browsers (iOS Safari, Chrome)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sean Niel S. Dizon**

- Email: saynoseanniel@gmail.com
- GitHub: [@seannieldizon](https://github.com/seannieldizon)
- LinkedIn: [Sean Niel Dizon](https://linkedin.com/in/sean-niel-dizon-296b49382)

---

Built with ❤️ using Next.js and TypeScript
