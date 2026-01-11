# Website Customization Guide

This guide walks you through customizing your website step-by-step. Work through these in order for best results.

## 📋 Customization Checklist

### Phase 1: Essential Branding (Do This First)

#### 1. Add Your Logo

**What to do:** Replace the placeholder logo with your actual logo

**Steps:**

1. Save your logo as an SVG file named `logo.svg`
2. Place it in: `C:\Dolese\ON_Design_Website\public\logo.svg`
3. Open `components/Header.js`
4. Find line ~21:

```javascript
// BEFORE:
<img src="/logo-placeholder.svg" alt="ON Design LLC Logo" />

// AFTER:
<img src="/logo.svg" alt="ON Design LLC Logo" />
```

**Why SVG?** SVG files scale perfectly at any size and look crisp on all screens.

**Don't have SVG?** You can use PNG or JPG instead:
```javascript
<img src="/logo.png" alt="ON Design LLC Logo" />
```

---

#### 2. Update Contact Information

**Location:** `components/Footer.js`

**Find lines 42-45** and replace with your actual contact info:

```javascript
// BEFORE:
<p className={styles.text}>Email: info@ondesign.com</p>
<p className={styles.text}>Phone: (555) 123-4567</p>
<p className={styles.text}>Location: Your City, State</p>

// AFTER (example):
<p className={styles.text}>Email: your.email@ondesign.com</p>
<p className={styles.text}>Phone: (405) 555-1234</p>
<p className={styles.text}>Location: Oklahoma City, OK</p>
```

**Also update:** `pages/contact.js` lines 128-157 with the same information.

---

#### 3. Update Company Tagline

**Location:** `components/Footer.js`

**Find lines 22-25** and customize your company description:

```javascript
// Replace with your unique value proposition
<p className={styles.text}>
  Your custom tagline about what makes ON Design special...
</p>
```

---

### Phase 2: Content Customization

#### 4. Home Page - Hero Section

**Location:** `pages/index.js`

**Lines 16-21** - Update the main headline and subtitle:

```javascript
<h1 className={styles.heroTitle}>
  Your Custom Headline Here
</h1>
<p className={styles.heroSubtitle}>
  Your value proposition - what you do and who you serve
</p>
```

**Example:**
```javascript
<h1 className={styles.heroTitle}>
  Industrial Automation Excellence Since 2010
</h1>
<p className={styles.heroSubtitle}>
  Specialized OEM equipment design and PLC programming for
  food processing, packaging, and automotive manufacturing.
</p>
```

---

#### 5. Home Page - Services Section

**Location:** `pages/index.js`

**Lines 42-76** - Customize the three service cards:

For each service, update:
- The description text
- The "Learn more" link (can keep as is)

**Tips:**
- Be specific about what you deliver
- Focus on benefits, not just features
- Keep descriptions concise (2-3 sentences)

---

#### 6. About Page - Your Story

**Location:** `pages/about.js`

**Lines 28-42** - This is THE most important content to customize:

```javascript
<p>
  Replace this entire section with YOUR company story:
  - When and why you started ON Design
  - What problem you solve for clients
  - Your background and expertise
  - What drives your approach
</p>
```

**Writing tips:**
- Write in first person ("We founded ON Design...")
- Be authentic and specific
- Mention real experiences or projects (without NDA violations)
- Keep it 2-3 paragraphs

---

#### 7. About Page - Expertise Areas

**Location:** `pages/about.js`

**Lines 55-95** - Update the expertise sections:

Each expertise block has:
- Description paragraph
- Bulleted list of deliverables

**Customize based on YOUR actual capabilities:**
- Remove items you don't offer
- Add items you do offer
- Adjust PLC brands, SCADA platforms, etc. to match your experience

**Example adjustment:**
```javascript
// If you specialize in Siemens instead of Allen-Bradley:
<li>Siemens S7 (TIA Portal, Step 7), Allen-Bradley (Logix family)</li>
```

---

#### 8. About Page - Industries Served

**Location:** `pages/about.js`

**Lines 133-140** - Update industries based on your actual experience:

```javascript
// Add or remove industries you've worked with
<div className={styles.industry}>Automotive Manufacturing</div>
<div className={styles.industry}>Food & Beverage Processing</div>
// Add more or remove as needed
```

---

#### 9. Services Page - Detailed Descriptions

**Location:** `pages/services.js`

**Lines 31-150** - This is your most detailed service content:

For EACH of the 3 main services:
1. Update the description paragraph
2. Adjust the "What We Deliver" bullet points
3. Update "Platforms We Work With" (for PLC section)
4. Customize "Ideal For" description

**Important:** Be honest about your capabilities. Don't claim expertise you don't have.

---

#### 10. Projects Page - Your Portfolio

**Location:** `pages/projects.js`

**Lines 25-80** - Replace ALL placeholder projects with your actual projects:

**For each project, provide:**

```javascript
{
  id: 1,  // Unique number
  title: 'Actual Project Name',
  category: 'OEM Design' or 'PLC Programming' or 'Consulting',
  industry: 'Automotive' or 'Food & Beverage' or 'Packaging' etc.,
  description: 'Brief description of the project and results achieved',
  image: '/projects/your-actual-image.jpg',
  technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
}
```

**Example real project:**

```javascript
{
  id: 1,
  title: 'Conveyor System Integration',
  category: 'PLC Programming',
  industry: 'Food & Beverage',
  description: 'Integrated 5 new conveyor lines into existing production facility. Programmed Allen-Bradley ControlLogix PLC with coordinated motion control, reducing changeover time by 40%.',
  image: '/projects/conveyor-project.jpg',
  technologies: ['Allen-Bradley Logix', 'Kinetix Servo', 'FactoryTalk View'],
}
```

**Tips for projects:**
- Include measurable results when possible (% improvement, time saved, etc.)
- Respect NDAs - keep client names confidential if required
- Use industry categories instead of specific companies
- Focus on YOUR contribution and the technical challenge solved

---

#### 11. Add Project Photos

**What to do:** Replace placeholder images with actual project photos

**Steps:**

1. Save your project photos as JPG or PNG files
2. Name them descriptively: `conveyor-system.jpg`, `packaging-line.jpg`, etc.
3. Place in: `C:\Dolese\ON_Design_Website\public\projects/`
4. Update the `image` field in your project objects (see step 10 above)

**Photo tips:**
- Use landscape orientation (wider than tall)
- Recommended size: 800x600 pixels minimum
- Make sure you have permission to use the photos
- Avoid showing confidential information in photos

---

#### 12. Contact Page - Business Hours & Details

**Location:** `pages/contact.js`

**Lines 133-159** - Update all contact details:

```javascript
// Email
<p>info@ondesign.com</p>  // Change to your actual email

// Phone
<p>(555) 123-4567</p>  // Change to your actual phone

// Location
<p>Your City, State ZIP</p>  // Your actual location

// Business Hours
<p>Monday - Friday: 8:00 AM - 5:00 PM</p>  // Your actual hours
```

---

### Phase 3: Visual Customization (Optional)

#### 13. Change Color Scheme

**Location:** `styles/globals.css`

**Lines 48-56** - Update the color variables:

```css
:root {
  /* Change these to match your brand */
  --primary-blue: #2563eb;      /* Your primary brand color */
  --primary-blue-dark: #1e40af;  /* Darker version */
  --primary-blue-light: #3b82f6; /* Lighter version */
}
```

**How to choose colors:**
- Use a color picker tool: https://coolors.co
- Keep contrast in mind (text must be readable)
- Test on both light and dark backgrounds

**All blue elements will automatically update!**

---

#### 14. Adjust Fonts

**Location:** `styles/globals.css`

**Lines 21-26** - Change the font family:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
  /* Add your preferred font at the beginning of the list */
}
```

**To use Google Fonts:**

1. Visit https://fonts.google.com
2. Choose a font (e.g., "Inter" or "Roboto")
3. Add to `pages/_app.js`:

```javascript
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
```

4. Update `globals.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

---

#### 15. Adjust Spacing

**Location:** `styles/globals.css`

**Lines 68-73** - Spacing system:

```css
:root {
  --spacing-xs: 0.5rem;   /* Extra small spacing */
  --spacing-sm: 1rem;     /* Small spacing */
  --spacing-md: 1.5rem;   /* Medium spacing */
  --spacing-lg: 2rem;     /* Large spacing */
  --spacing-xl: 3rem;     /* Extra large spacing */
  --spacing-2xl: 4rem;    /* Double extra large spacing */
}
```

Increase these values for more spacious design, decrease for more compact.

---

### Phase 4: Advanced Customizations

#### 16. Add Contact Form Email Integration

**Current state:** Form just logs to console (doesn't send emails)

**Options to add email:**

**Option A: Formspree (Easiest)**

1. Sign up at https://formspree.io (free tier available)
2. Create a new form
3. Get your form endpoint URL
4. Update `pages/contact.js`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  } else {
    setSubmitStatus('error');
  }
};
```

**Option B: EmailJS**

Similar to Formspree - sign up, get API key, add to form handler

**Option C: Backend API**

Create your own API endpoint to handle email sending (more advanced)

---

#### 17. Add More Pages

**Example: Add a "Blog" page**

1. Create `pages/blog.js`:

```javascript
import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout title="Blog">
      <h1>Our Blog</h1>
      <p>Blog content here...</p>
    </Layout>
  );
}
```

2. Add to navigation in `components/Header.js`:

```javascript
<Link href="/blog" className={styles.navLink}>
  Blog
</Link>
```

3. Create styles: `styles/Blog.module.css`

---

#### 18. Add Social Media Links

**Location:** `components/Footer.js`

Add after the contact details section:

```javascript
<div className={styles.socialLinks}>
  <a href="https://linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
  {/* Add more as needed */}
</div>
```

Add styles to `styles/Footer.module.css`:

```css
.socialLinks {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.socialLinks a {
  color: var(--gray-300);
  transition: color 0.2s ease;
}

.socialLinks a:hover {
  color: var(--primary-blue-light);
}
```

---

## 🔍 Testing Your Changes

After each change:

1. **Save the file**
2. **Check your browser** (should auto-refresh)
3. **Test on mobile** (use browser DevTools responsive mode)
4. **Check all pages** (make sure nothing broke)

### Browser DevTools for Mobile Testing

**Chrome/Edge:**
- Press `F12`
- Click the device icon (toggle device toolbar)
- Select "iPhone 12" or "iPad" from dropdown

**Test these screen sizes:**
- Mobile: 375px width (iPhone)
- Tablet: 768px width (iPad)
- Desktop: 1200px+ width

---

## ❓ Common Questions

**Q: How do I know which file to edit?**

A: Look at the file path in the checklist above. Each item tells you exactly which file and which line numbers.

**Q: I broke something! How do I undo?**

A: If using Git:
```bash
git checkout -- filename.js  # Undo changes to specific file
```

Or manually restore from backup.

**Q: Can I add TypeScript later?**

A: Yes! Rename `.js` files to `.tsx` and add type annotations gradually.

**Q: Can I add Tailwind CSS later?**

A: Yes! Install Tailwind and gradually replace CSS Modules with Tailwind classes.

**Q: How do I change the layout structure?**

A: Edit `components/Layout.js` to change the overall page structure (header/footer position, etc.)

---

## 📝 Customization Completion Checklist

Mark off as you complete each section:

### Essential
- [ ] Logo added and working
- [ ] Contact information updated (Footer and Contact page)
- [ ] Company tagline updated
- [ ] Home page hero section customized
- [ ] About page story written
- [ ] Services page descriptions updated
- [ ] Projects replaced with actual projects
- [ ] Project images added
- [ ] Contact form details updated

### Optional
- [ ] Color scheme adjusted
- [ ] Fonts customized
- [ ] Social media links added
- [ ] Email integration added to contact form
- [ ] Additional pages created
- [ ] Custom favicon added

---

## 🚀 Ready to Deploy?

Once you've customized your content:

1. Test thoroughly on desktop and mobile
2. Have someone else review it
3. Follow the deployment guide in [README.md](./README.md)
4. Deploy to Vercel or Netlify
5. Connect your custom domain

---

**Need help?** Refer back to the code comments in each file - they explain what everything does!
