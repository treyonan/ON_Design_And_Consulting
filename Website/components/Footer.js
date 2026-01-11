// ===================================
// FOOTER COMPONENT
// This appears at the bottom of every page
// Contains: Company info, Quick links, Contact info
// ===================================

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  // Get current year dynamically (updates automatically each year)
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Three column layout */}
        <div className={styles.grid}>

          {/* Column 1: Company Info */}
          <div className={styles.column}>
            <h3 className={styles.heading}>ON Design LLC</h3>
            <p className={styles.text}>
              {/* TODO: Replace with your company tagline */}
              Professional OEM equipment design and industrial automation
              consulting for modern manufacturing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/services" className={styles.link}>
                Services
              </Link>
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactInfo}>
              {/* TODO: Replace with your actual contact information */}
              <p className={styles.text}>Email: info@ondesign.com</p>
              <p className={styles.text}>Phone: (555) 123-4567</p>
              <p className={styles.text}>Location: Your City, State</p>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} ON Design LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/*
  HOW THIS WORKS:

  1. DYNAMIC YEAR:
     - new Date().getFullYear() gets current year (2026)
     - Updates automatically - no need to change manually
     - Stored in 'currentYear' variable

  2. JSX EXPRESSIONS:
     - {currentYear} injects JavaScript value into HTML
     - Anything in curly braces {} is JavaScript
     - Outside braces is HTML-like JSX

  3. LAYOUT STRUCTURE:
     - Grid with 3 columns (defined in CSS)
     - Each column is a <div className={styles.column}>
     - CSS handles responsive layout (stacks on mobile)

  4. CUSTOMIZATION POINTS:
     - Company tagline (line 23)
     - Contact info (lines 50-52)
     - Add social media links if desired
     - Add additional quick links

  5. WHY COMPONENTS?
     - Footer is used on EVERY page
     - Write once, use everywhere
     - Change here, updates all pages automatically
*/
