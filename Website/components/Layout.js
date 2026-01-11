// ===================================
// LAYOUT COMPONENT
// Wraps every page with consistent Header and Footer
// Think of it as the "frame" around page content
// ===================================

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title, description }) {
  /*
    PROPS EXPLAINED:
    - children: The page content that goes between Header and Footer
    - title: Page-specific title for browser tab (optional)
    - description: Page description for SEO (optional)
  */

  // Default values if not provided
  const pageTitle = title
    ? `${title} | ON Design LLC`
    : 'ON Design LLC - OEM Equipment Design & Industrial Automation';
  const pageDescription =
    description ||
    'Professional OEM equipment design, PLC/HMI/SCADA programming, and manufacturing consulting services.';

  return (
    <>
      {/*
        HEAD COMPONENT:
        - Sets metadata for the page (browser tab, search engines)
        - Each page can have different title/description
      */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*
        PAGE STRUCTURE:
        - Header (logo + nav) at top
        - Main content in middle (this is {children})
        - Footer at bottom
      */}
      <div className={styles.pageWrapper}>
        <Header />

        {/* Main content area - this is where page content appears */}
        <main className={styles.mainContent}>{children}</main>

        <Footer />
      </div>
    </>
  );
}

/*
  HOW THIS WORKS:

  1. COMPONENT COMPOSITION:
     - Layout is a "wrapper" component
     - Takes other components as 'children'
     - Like a picture frame around artwork

  2. USAGE IN PAGES:
     In pages/index.js:
     <Layout title="Home">
       <h1>Welcome!</h1>  ← This becomes {children}
     </Layout>

  3. HEAD COMPONENT:
     - From Next.js (import Head from 'next/head')
     - Sets <head> section of HTML page
     - Changes browser tab title
     - Important for SEO (search engine optimization)

  4. PROPS:
     - Function receives props as an object: { children, title, description }
     - Can be used with default values if not provided
     - Makes component flexible and reusable

  5. WHY THIS PATTERN?
     - DRY principle: Don't Repeat Yourself
     - Header/Footer written ONCE, used on ALL pages
     - Change header once, updates everywhere
     - Consistent structure across entire site

  6. FRAGMENTS (<> </>):
     - React components must return single element
     - <> </> is shorthand for React.Fragment
     - Groups elements without adding extra DOM nodes
*/
