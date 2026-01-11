// ===================================
// HOME PAGE (index.js)
// The landing page of your website
// URL: yoursite.com/
// ===================================

import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home" description="ON Design LLC - Professional OEM equipment design and industrial automation consulting">
      {/* Hero Section - Main attention-grabbing area */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Engineering Excellence for Modern Manufacturing
            </h1>
            <p className={styles.heroSubtitle}>
              {/* TODO: Replace with your value proposition */}
              Professional OEM equipment design, PLC/HMI/SCADA programming, and
              manufacturing consulting services tailored to your industrial needs.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/projects" className="btn btn-primary">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions for industrial automation and equipment design
          </p>

          {/* Service Cards Grid */}
          <div className={styles.servicesGrid}>
            {/* Service Card 1 */}
            <div className="card">
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>OEM Equipment Design</h3>
              <p>
                Custom equipment design solutions tailored to your manufacturing
                processes, from concept to production.
              </p>
              <Link href="/services" className={styles.serviceLink}>
                Learn more →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="card">
              <div className={styles.serviceIcon}>💻</div>
              <h3>PLC/HMI/SCADA Programming</h3>
              <p>
                Expert programming services for industrial control systems,
                ensuring reliable and efficient automation.
              </p>
              <Link href="/services" className={styles.serviceLink}>
                Learn more →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="card">
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Manufacturing Consulting</h3>
              <p>
                Strategic consulting to optimize your manufacturing operations
                and improve production efficiency.
              </p>
              <Link href="/services" className={styles.serviceLink}>
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChoose}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose ON Design?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Industry Expertise</h3>
              <p>
                {/* TODO: Add your years of experience */}
                Decades of combined experience in OEM design and industrial
                automation across multiple manufacturing sectors.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3>Custom Solutions</h3>
              <p>
                Every project is unique. We design solutions specifically for
                your requirements, not one-size-fits-all approaches.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3>Proven Track Record</h3>
              <p>
                Successfully delivered projects for clients in automotive,
                food processing, packaging, and more.
              </p>
            </div>
            <div className={styles.benefit}>
              <h3>Full Project Support</h3>
              <p>
                From initial consultation to final commissioning, we support
                you through every phase of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Let's discuss how we can help optimize your manufacturing operations
              and bring your equipment design vision to life.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
  HOW THIS PAGE WORKS:

  1. LAYOUT WRAPPER:
     - Entire page is wrapped in <Layout>
     - Automatically gets Header and Footer
     - title prop sets browser tab text
     - description prop used for SEO

  2. SECTIONS:
     - Each <section> is a distinct area of the page
     - Hero: Main attention-grabbing headline
     - Services: Overview of what you offer
     - Why Choose: Benefits and differentiators
     - CTA: Call-to-action encouraging contact

  3. UTILITY CLASSES:
     - .container (from globals.css): Centers content, max width
     - .card (from globals.css): White background, shadow
     - .btn-primary/.btn-secondary: Button styles

  4. CSS MODULES:
     - styles.hero, styles.services, etc. from Home.module.css
     - Scoped to this component only
     - Won't conflict with other pages

  5. NAVIGATION:
     - <Link> components navigate to other pages
     - href="/projects" → pages/projects.js
     - href="/contact" → pages/contact.js

  6. CUSTOMIZATION CHECKLIST:
     - [ ] Update hero title and subtitle (lines 17-22)
     - [ ] Adjust service descriptions (lines 42-76)
     - [ ] Update benefits/expertise (lines 85-117)
     - [ ] Modify CTA text (lines 124-126)
     - [ ] Replace emoji icons with actual icons/images if desired
*/
