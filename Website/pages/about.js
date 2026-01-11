// ===================================
// ABOUT PAGE
// Tell your company story and credentials
// URL: yoursite.com/about
// ===================================

import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout title="About Us" description="Learn about ON Design LLC - our expertise, mission, and commitment to industrial automation excellence">
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>About ON Design LLC</h1>
          <p className={styles.headerSubtitle}>
            Engineering solutions built on expertise, innovation, and dedication
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>
              {/* TODO: Replace with your actual company story */}
              ON Design LLC was founded with a singular mission: to deliver
              exceptional OEM equipment design and industrial automation
              solutions that drive manufacturing excellence. Our team combines
              decades of hands-on experience with cutting-edge technology to
              solve complex engineering challenges.
            </p>
            <p>
              What started as a vision to provide specialized consulting services
              has grown into a trusted partner for manufacturers across multiple
              industries. We pride ourselves on understanding not just the
              technical requirements, but the business objectives behind every
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className={styles.expertise}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <div className={styles.expertiseGrid}>
            {/* Expertise Item 1 */}
            <div className={styles.expertiseItem}>
              <h3>OEM Equipment Design</h3>
              <p>
                From initial concept through final production, we design custom
                equipment solutions tailored to your specific manufacturing
                processes. Our designs prioritize efficiency, reliability, and
                ease of maintenance.
              </p>
              <ul className={styles.expertiseList}>
                <li>Mechanical design and CAD modeling</li>
                <li>Equipment specification and selection</li>
                <li>Safety and compliance engineering</li>
                <li>Prototyping and testing</li>
              </ul>
            </div>

            {/* Expertise Item 2 */}
            <div className={styles.expertiseItem}>
              <h3>PLC/HMI/SCADA Programming</h3>
              <p>
                Expert programming services for industrial control systems across
                all major platforms. We create intuitive, reliable automation
                solutions that improve operational efficiency.
              </p>
              <ul className={styles.expertiseList}>
                <li>Allen-Bradley, Siemens, Modicon programming</li>
                <li>HMI/SCADA development and integration</li>
                <li>Process optimization and troubleshooting</li>
                <li>System upgrades and migrations</li>
              </ul>
            </div>

            {/* Expertise Item 3 */}
            <div className={styles.expertiseItem}>
              <h3>Manufacturing Consulting</h3>
              <p>
                Strategic guidance to optimize your manufacturing operations,
                reduce downtime, and improve product quality through smart
                automation and process improvements.
              </p>
              <ul className={styles.expertiseList}>
                <li>Process analysis and optimization</li>
                <li>Automation feasibility studies</li>
                <li>Equipment audits and recommendations</li>
                <li>Training and knowledge transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className="card">
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. Every solution we deliver is
                built to the highest standards of engineering excellence.
              </p>
            </div>
            <div className="card">
              <h3>Client Partnership</h3>
              <p>
                Your success is our success. We work collaboratively, treating
                your challenges as our own and celebrating wins together.
              </p>
            </div>
            <div className="card">
              <h3>Continuous Innovation</h3>
              <p>
                The manufacturing landscape evolves rapidly. We stay ahead of
                industry trends to bring you the latest technologies and methods.
              </p>
            </div>
            <div className="card">
              <h3>Transparent Communication</h3>
              <p>
                No surprises. We maintain open, honest communication throughout
                every project, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={styles.industries}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <div className={styles.industriesList}>
            {/* TODO: Add/remove industries based on your actual experience */}
            <div className={styles.industry}>Automotive Manufacturing</div>
            <div className={styles.industry}>Food & Beverage Processing</div>
            <div className={styles.industry}>Packaging & Converting</div>
            <div className={styles.industry}>Pharmaceutical & Medical</div>
            <div className={styles.industry}>Material Handling</div>
            <div className={styles.industry}>Assembly & Fabrication</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
  PAGE STRUCTURE EXPLAINED:

  1. PAGE HEADER:
     - Clean title and subtitle
     - Sets context for the page

  2. STORY SECTION:
     - Company background and mission
     - Personal connection with visitors
     - TODO: Replace with YOUR actual story

  3. EXPERTISE SECTION:
     - Detailed breakdown of services
     - Bullet lists for specifics
     - Shows depth of capabilities

  4. VALUES SECTION:
     - What you stand for
     - Differentiates you from competitors
     - Builds trust with potential clients

  5. INDUSTRIES SECTION:
     - Social proof through industry experience
     - Helps visitors see if you serve their sector

  CUSTOMIZATION PRIORITY:
  1. HIGH: Replace company story (line 28-42)
  2. MEDIUM: Update expertise details (lines 55-95)
  3. MEDIUM: Adjust industries served (line 134)
  4. LOW: Tweak values if needed (lines 104-126)

  WHY THIS STRUCTURE?
  - Builds credibility progressively
  - Story → Expertise → Values → Proof
  - Addresses "Who are you?" → "What can you do?" → "Why trust you?"
*/
