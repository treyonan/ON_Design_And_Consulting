// ===================================
// CONTACT PAGE
// Contact form and business information
// URL: yoursite.com/contact
// ===================================

import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  /*
    FORM STATE:
    - Stores all form field values in one object
    - Updates as user types in fields
    - Submitted to handle form submission
  */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  /*
    SUBMISSION STATUS:
    - null: Not submitted yet
    - 'success': Form submitted successfully
    - 'error': Something went wrong
  */
  const [submitStatus, setSubmitStatus] = useState(null);

  /*
    HANDLE INPUT CHANGES:
    - Runs every time user types in a field
    - 'e' is the event object (contains information about what happened)
    - e.target.name = which field (name, email, etc.)
    - e.target.value = what user typed
  */
  const handleChange = (e) => {
    const { name, value } = e.target;

    /*
      SPREAD OPERATOR:
      - ...formData copies all existing form data
      - [name]: value updates just the changed field
      - Result: New object with one field updated

      Example: If user types "John" in name field:
      Before: { name: '', email: '', ... }
      After:  { name: 'John', email: '', ... }
    */
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*
    HANDLE FORM SUBMISSION:
    - Runs when user clicks Submit button
    - 'e' is the event object
  */
  const handleSubmit = (e) => {
    // Prevent default form submission (which would reload the page)
    e.preventDefault();

    /*
      TODO: ADD EMAIL INTEGRATION
      Currently this just logs to console.
      In production, you would:
      1. Send to an API endpoint
      2. Use a service like EmailJS, SendGrid, or Formspree
      3. Send to your backend server

      Example with fetch (API call):
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    */

    console.log('Form submitted:', formData);

    // Simulate successful submission
    setSubmitStatus('success');

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <Layout title="Contact Us" description="Get in touch with ON Design LLC for OEM design, PLC programming, and manufacturing consulting services">
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className={styles.headerSubtitle}>
            Let's discuss how we can help with your next project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column: Contact Information */}
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p className={styles.contactDescription}>
                Ready to start your next project or have questions about our
                services? We're here to help. Fill out the form or reach out
                directly using the information below.
              </p>

              {/* Contact Details */}
              <div className={styles.contactDetails}>
                {/* TODO: Replace with your actual contact information */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>info@ondesign.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>Your City, State ZIP</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>⏰</div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {/* Name Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Phone Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Company Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your company name"
                  />
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you! Your message has been sent successfully. We'll get
                    back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Sorry, something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
  FORM HANDLING EXPLAINED:

  1. CONTROLLED COMPONENTS:
     - Input value tied to state: value={formData.name}
     - onChange updates state when user types
     - React controls the input (single source of truth)
     - Alternative: Uncontrolled (using refs)

  2. FORM STATE OBJECT:
     - Single object holds all fields
     - Easier to manage than separate useState for each field
     - Easy to submit all data together

  3. EVENT HANDLING:
     - e.preventDefault() stops page reload
     - e.target gets the input element
     - e.target.name gets field name attribute
     - e.target.value gets current input value

  4. COMPUTED PROPERTY NAMES:
     - [name]: value uses variable as key
     - If name = "email", becomes { email: value }
     - Allows one function for all inputs

  5. CONDITIONAL RENDERING:
     - {submitStatus === 'success' && <Message />}
     - Only shows message when condition is true
     - Displays feedback to user

  CUSTOMIZATION CHECKLIST:
  [ ] Replace contact information (lines 133-159)
  [ ] Add email integration (line 79-89)
  [ ] Adjust business hours if needed
  [ ] Optionally add social media links
  [ ] Consider adding reCAPTCHA for spam prevention

  EMAIL INTEGRATION OPTIONS:
  1. Formspree: Easiest, free tier available
  2. EmailJS: Client-side email sending
  3. SendGrid API: Professional, requires backend
  4. Custom backend: Build your own API endpoint
  5. Netlify Forms: If hosting on Netlify

  SECURITY NOTE:
  - Never expose API keys in client-side code
  - Use environment variables for sensitive data
  - Validate input on both client and server
  - Add rate limiting to prevent spam
*/
