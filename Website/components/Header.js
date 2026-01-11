// ===================================
// HEADER COMPONENT
// This appears at the top of every page
// Contains: Logo + Navigation Menu
// ===================================

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section - Left side */}
        <div className={styles.logo}>
          <Link href="/">
            {/*
              TODO: Replace /logo-placeholder.svg with your actual logo
              - Save your logo SVG as: /public/logo.svg
              - Then change src to: /logo.svg
            */}
            <img
              src="/logo-placeholder.svg"
              alt="ON Design LLC Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Navigation Menu - Right side */}
        <nav className={styles.nav}>
          {/*
            Link component from Next.js:
            - Enables client-side navigation (fast page changes)
            - No full page reload when clicking links
            - href prop determines the destination
          */}
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

/*
  HOW THIS WORKS:

  1. IMPORTS:
     - Link: Next.js component for navigation between pages
     - styles: CSS module with styles specific to this component

  2. COMPONENT STRUCTURE:
     - Returns JSX (looks like HTML, but it's JavaScript)
     - className connects to CSS styles (not "class" like HTML)

  3. NAVIGATION:
     - Each Link has an href that matches a file in /pages
     - href="/" → /pages/index.js (Home)
     - href="/about" → /pages/about.js (About page)
     - href="/services" → /pages/services.js (Services page)
     - etc.

  4. CUSTOMIZATION:
     - To add your logo: Replace /logo-placeholder.svg with /logo.svg
     - To add a new page: Add a new Link here + create the page file
     - To change nav order: Rearrange the Link components
*/
