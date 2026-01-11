# ON Design LLC - Professional Website

A modern, responsive website for ON Design LLC - showcasing OEM equipment design, PLC/HMI/SCADA programming, and manufacturing consulting services.

## 📋 Table of Contents

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Common Tasks](#common-tasks)

---

## 🛠️ Technology Stack

- **React** - UI component library
- **Next.js (Pages Router)** - React framework for routing and optimization
- **JavaScript** - Programming language (no TypeScript for easier learning)
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code quality and consistency

### Why This Stack?

- **Industry standard** - Used by major companies worldwide
- **Well-documented** - Extensive learning resources available
- **Easy to scale** - Can add TypeScript, Tailwind, or other tools later
- **Great performance** - Next.js optimizes automatically
- **Free hosting** - Deploy to Vercel for free

---

## 📁 Project Structure

```
ON_Design_Website/
├── components/              # Reusable React components
│   ├── Header.js           # Site header with logo and navigation
│   ├── Footer.js           # Site footer with links and contact info
│   └── Layout.js           # Page wrapper (adds Header/Footer to every page)
│
├── pages/                   # Website pages (Next.js routing)
│   ├── _app.js             # Application entry point
│   ├── index.js            # Home page (/)
│   ├── about.js            # About page (/about)
│   ├── services.js         # Services page (/services)
│   ├── projects.js         # Projects portfolio (/projects)
│   └── contact.js          # Contact page with form (/contact)
│
├── styles/                  # CSS styling
│   ├── globals.css         # Global styles and CSS variables
│   ├── Header.module.css   # Header component styles
│   ├── Footer.module.css   # Footer component styles
│   ├── Layout.module.css   # Layout component styles
│   ├── Home.module.css     # Home page styles
│   ├── About.module.css    # About page styles
│   ├── Services.module.css # Services page styles
│   ├── Projects.module.css # Projects page styles
│   └── Contact.module.css  # Contact page styles
│
├── public/                  # Static files (images, fonts, etc.)
│   ├── logo-placeholder.svg # Placeholder logo (REPLACE WITH YOURS)
│   ├── favicon.ico         # Browser tab icon
│   └── projects/           # Project images folder
│       ├── project-placeholder-1.jpg
│       ├── project-placeholder-2.jpg
│       └── ...
│
├── package.json             # Project dependencies and scripts
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
└── .gitignore              # Git ignore rules

```

### How Routing Works in Next.js

Next.js uses **file-based routing**. Each file in the `pages/` folder automatically becomes a route:

| File Path           | URL Route                  |
|---------------------|----------------------------|
| pages/index.js      | yoursite.com/             |
| pages/about.js      | yoursite.com/about        |
| pages/services.js   | yoursite.com/services     |
| pages/projects.js   | yoursite.com/projects     |
| pages/contact.js    | yoursite.com/contact      |

No need to configure routes manually!

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed (v18 or higher):

```bash
node --version
# Should show v18.x.x or higher
```

If not installed, download from: https://nodejs.org/

### Installation

1. **Open your terminal** and navigate to the project folder:

```bash
cd C:\Dolese\ON_Design_Website
```

2. **Install dependencies** (this downloads all required packages):

```bash
npm install
```

This will take 1-2 minutes and creates a `node_modules/` folder.

3. **Start the development server**:

```bash
npm run dev
```

4. **Open your browser** and go to:

```
http://localhost:3000
```

You should see your website! 🎉

### What Just Happened?

- `npm install` downloaded React, Next.js, and other dependencies
- `npm run dev` started a local web server on your computer
- The site is running at `localhost:3000` (only visible to you)
- Changes you make to files will automatically update in the browser

---

## 💻 Development

### Available Commands

```bash
# Start development server (with hot-reload)
npm run dev

# Build for production (creates optimized version)
npm run build

# Start production server (run after npm run build)
npm start

# Run ESLint (check code quality)
npm run lint
```

### Development Workflow

1. **Run `npm run dev`** to start the development server
2. **Edit files** in VS Code or your preferred editor
3. **See changes instantly** in your browser (auto-refresh)
4. **Stop the server** by pressing `Ctrl+C` in the terminal

### Key Concepts

#### Components

Components are reusable pieces of UI. Example:

```javascript
// components/Header.js
export default function Header() {
  return (
    <header>
      <h1>ON Design</h1>
    </header>
  );
}
```

Use in pages:

```javascript
import Header from '../components/Header';

export default function Home() {
  return <Header />;
}
```

#### Props

Props pass data to components:

```javascript
// Parent component
<Button text="Click Me" color="blue" />

// Button component
export default function Button({ text, color }) {
  return <button style={{ color }}>{text}</button>;
}
```

#### State

State stores data that can change:

```javascript
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

## 🎨 Customization Guide

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed step-by-step customization instructions.

### Quick Customization Checklist

**High Priority (Do First):**

- [ ] Replace logo: Add your logo as `/public/logo.svg`
- [ ] Update contact info in Footer.js and Contact page
- [ ] Replace company story in About page
- [ ] Update service descriptions in Services page
- [ ] Add your actual projects in Projects page

**Medium Priority:**

- [ ] Replace project images in `/public/projects/`
- [ ] Adjust color scheme if needed (in `styles/globals.css`)
- [ ] Update page meta descriptions for SEO

**Low Priority (Polish):**

- [ ] Add favicon
- [ ] Fine-tune spacing/layout
- [ ] Add social media links

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers free hosting.

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository** and push your code
3. **Sign up for Vercel**: https://vercel.com
4. **Import your GitHub repository**
5. **Click Deploy**

Done! Your site is live at `your-site.vercel.app`

### Option 2: Netlify

Similar to Vercel:

1. Sign up at https://netlify.com
2. Connect your GitHub repository
3. Deploy

### Connecting Your Custom Domain

After deploying to Vercel/Netlify:

1. **Buy a domain** from Namecheap, Google Domains, etc.
2. **In Vercel/Netlify**, go to Project Settings → Domains
3. **Add your domain** (e.g., `ondesign.com`)
4. **Update DNS records** at your domain registrar
5. **Wait 1-24 hours** for DNS propagation

Your site will be live at your custom domain!

---

## 🛠️ Common Tasks

### Add a New Page

1. **Create page file** in `/pages/`:

```javascript
// pages/new-page.js
import Layout from '../components/Layout';

export default function NewPage() {
  return (
    <Layout title="New Page">
      <h1>This is a new page</h1>
    </Layout>
  );
}
```

2. **Add to navigation** in `components/Header.js`:

```javascript
<Link href="/new-page" className={styles.navLink}>
  New Page
</Link>
```

3. **Create CSS file** (optional): `styles/NewPage.module.css`

### Add a New Component

1. **Create component file** in `/components/`:

```javascript
// components/Button.js
export default function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
```

2. **Import and use** in pages:

```javascript
import Button from '../components/Button';

<Button text="Click me" onClick={() => alert('Clicked!')} />
```

### Change Colors

Edit `styles/globals.css` to change the color scheme:

```css
:root {
  --primary-blue: #2563eb;  /* Change this to your brand color */
  --primary-blue-dark: #1e40af;
  /* ... other colors */
}
```

All blue elements will update automatically!

### Add Your Logo

1. Save your logo as SVG: `/public/logo.svg`
2. Update `components/Header.js`:

```javascript
<img
  src="/logo.svg"  // Change from /logo-placeholder.svg
  alt="ON Design LLC Logo"
  className={styles.logoImage}
/>
```

---

## 📚 Learning Resources

- **React Docs**: https://react.dev
- **Next.js Docs**: https://nextjs.org/docs
- **CSS Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org

---

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill the process using port 3000, then restart
npm run dev
```

### Changes not showing up

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

### Module not found errors

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📞 Support

For questions or issues:

1. Check the code comments in each file (heavily documented)
2. Review [CUSTOMIZATION.md](./CUSTOMIZATION.md)
3. Search Next.js documentation: https://nextjs.org/docs
4. Search React documentation: https://react.dev

---

## 📝 License

This is your website! Customize it however you like.

---

**Built with ❤️ for ON Design LLC**
