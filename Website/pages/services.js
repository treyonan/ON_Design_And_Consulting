// ===================================
// SERVICES PAGE
// Detailed breakdown of services offered
// URL: yoursite.com/services
// ===================================

import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <Layout title="Services" description="Professional OEM equipment design, PLC/HMI/SCADA programming, and manufacturing consulting services">
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Services</h1>
          <p className={styles.headerSubtitle}>
            Comprehensive industrial automation and equipment design solutions
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.mainServices}>
        <div className="container">
          {/* Service 1: OEM Equipment Design */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h2>OEM Equipment Design</h2>
              <p className={styles.serviceDescription}>
                {/* TODO: Customize service description */}
                Custom equipment design solutions from concept to production.
                We specialize in creating efficient, reliable machinery tailored
                to your specific manufacturing processes and requirements.
              </p>

              <h3 className={styles.subheading}>What We Deliver:</h3>
              <ul className={styles.deliverablesList}>
                <li>Detailed mechanical design and 3D CAD models</li>
                <li>Equipment specifications and component selection</li>
                <li>Safety analysis and compliance documentation</li>
                <li>Prototype development and testing</li>
                <li>Production drawings and manufacturing support</li>
                <li>Installation and commissioning assistance</li>
              </ul>

              <h3 className={styles.subheading}>Ideal For:</h3>
              <p>
                Manufacturers looking to develop custom machinery, upgrade
                existing equipment, or design specialized automation solutions
                for unique production challenges.
              </p>
            </div>
          </div>

          {/* Service 2: PLC/HMI/SCADA Programming */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>💻</div>
              <h2>PLC/HMI/SCADA Programming</h2>
              <p className={styles.serviceDescription}>
                Expert programming services for industrial control systems across
                all major platforms. We create reliable, maintainable automation
                code that maximizes equipment performance and uptime.
              </p>

              <h3 className={styles.subheading}>Platforms We Work With:</h3>
              <ul className={styles.platformsList}>
                <li><strong>PLCs:</strong> Allen-Bradley (Logix family), Siemens (S7/TIA Portal), Modicon, Omron, Mitsubishi</li>
                <li><strong>HMI/SCADA:</strong> FactoryTalk View, WinCC, Ignition, Wonderware, Indusoft</li>
                <li><strong>Motion Control:</strong> Servo systems, VFDs, coordinated motion</li>
                <li><strong>Networks:</strong> EtherNet/IP, Profinet, Modbus, OPC</li>
              </ul>

              <h3 className={styles.subheading}>What We Deliver:</h3>
              <ul className={styles.deliverablesList}>
                <li>Structured, well-documented PLC programs</li>
                <li>Intuitive HMI interfaces for operators</li>
                <li>SCADA systems for process monitoring</li>
                <li>Alarm management and trending</li>
                <li>System integration and communication</li>
                <li>On-site debugging and commissioning</li>
              </ul>

              <h3 className={styles.subheading}>Ideal For:</h3>
              <p>
                Facilities needing control system development, upgrades,
                troubleshooting, or integration of new equipment with existing
                infrastructure.
              </p>
            </div>
          </div>

          {/* Service 3: Manufacturing Consulting */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>🔧</div>
              <h2>Manufacturing Consulting</h2>
              <p className={styles.serviceDescription}>
                Strategic consulting to optimize your manufacturing operations,
                reduce downtime, and improve product quality through smart
                automation and process improvements.
              </p>

              <h3 className={styles.subheading}>Consulting Services:</h3>
              <ul className={styles.deliverablesList}>
                <li>Process analysis and bottleneck identification</li>
                <li>Automation feasibility studies and ROI analysis</li>
                <li>Equipment audits and upgrade recommendations</li>
                <li>Control system architecture design</li>
                <li>Vendor selection and specification support</li>
                <li>Project management and oversight</li>
                <li>Training and knowledge transfer</li>
              </ul>

              <h3 className={styles.subheading}>Our Approach:</h3>
              <p>
                We begin by understanding your business objectives and current
                challenges. Our recommendations are practical, cost-effective,
                and aligned with your long-term manufacturing strategy.
              </p>

              <h3 className={styles.subheading}>Ideal For:</h3>
              <p>
                Companies planning capital investments, experiencing production
                issues, or seeking independent expert guidance on automation
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery</h3>
              <p>
                We start by understanding your requirements, challenges, and
                goals through detailed consultation.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Planning</h3>
              <p>
                Develop comprehensive project plans, specifications, and timelines
                with clear milestones.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Execution</h3>
              <p>
                Deliver solutions with precision, keeping you informed throughout
                the development process.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Support</h3>
              <p>
                Provide commissioning, training, and ongoing support to ensure
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Let's Discuss Your Project</h2>
            <p>
              Ready to optimize your manufacturing operations or start a new
              equipment design project? We're here to help.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
  PAGE ORGANIZATION:

  1. STRUCTURE:
     - Header: Page introduction
     - Main Services: 3 detailed service blocks
     - Process: How we work (4 steps)
     - CTA: Encourage contact

  2. SERVICE BLOCKS:
     - Each major service gets its own section
     - Includes: Description, deliverables, ideal client
     - Detailed enough to set expectations
     - Not overwhelming (keeps it scannable)

  3. LISTS:
     - Bullet points for easy scanning
     - Specific details (PLC brands, deliverables)
     - Shows depth of expertise

  4. CUSTOMIZATION CHECKLIST:
     [ ] Update service descriptions (lines 31, 63, 109)
     [ ] Adjust platforms/deliverables based on your actual capabilities
     [ ] Modify process steps if your workflow differs
     [ ] Add/remove services if needed

  5. WHY THIS LAYOUT?
     - Comprehensive but not overwhelming
     - Addresses "What exactly do you do?"
     - Sets clear expectations for potential clients
     - Demonstrates expertise through specifics
*/
