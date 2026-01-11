# Refined LLM Prompt for Website Development

**Based on:** Original `LLM_Prompt.txt` (from different LLM)
**Refined by:** Experience building ON Design LLC website
**Date:** January 11, 2026

---

## Original Prompt Summary

The original prompt (see `LLM_Prompt.txt` in project root) requested an LLM act as a senior front-end engineer helping a non-web developer build production-quality websites with:

- Clean structure and documentation
- Modern, understandable stack (TypeScript, React, Next.js, Tailwind)
- Production-ready architecture
- Incremental delivery
- Maintainability focus

---

## Key Refinements from Real-World Application

### 1. Technology Stack Flexibility

**Original Recommendation:**
- TypeScript (for safety + readability)
- React + Next.js (App Router)
- Tailwind CSS
- ESLint + Prettier

**Refined Approach:**
```
Ask the user about their learning context FIRST:

"Are you learning from books/courses? Which ones?"
"What's your experience level with JavaScript/CSS?"
"What's more important: learning fundamentals or shipping fast?"
```

**Then recommend:**

**For Learners (like this project):**
- ✅ JavaScript (matches learning materials)
- ✅ Next.js Pages Router (simpler than App Router)
- ✅ CSS Modules (learn fundamentals)
- ✅ ESLint
- 📋 Plan: Add TypeScript/Tailwind later when ready

**For Experienced Developers:**
- ✅ TypeScript
- ✅ Next.js App Router
- ✅ Tailwind CSS
- ✅ ESLint + Prettier

**Rationale:** Tools should match user's learning stage, not just "best practices"

---

### 2. Hybrid Learning + Production Approach

**New Principle:** "Foundation First, Polish Later"

**Phase 1: Learn the Basics (Initial Build)**
- Use simple, understandable tools
- Focus on core concepts (components, state, props)
- Align with user's learning materials
- Build something production-ready

**Phase 2: Add Advanced Features (When Ready)**
- Migrate to TypeScript incrementally
- Add Tailwind for speed
- Upgrade to newer patterns (App Router, Server Components)
- Introduce state management if needed

**Key Insight:** Starting simple ≠ Not production-ready

---

### 3. Documentation as Teaching Tool

**Original:** Documentation for "coming back in 6 months"

**Refined:** Documentation as PRIMARY learning resource

**Every code file should include:**

```javascript
// ===================================
// COMPONENT NAME
// What it does and where it's used
// ===================================

import Something from 'somewhere';

export default function Component() {
  return <div>...</div>;
}

/*
  HOW THIS WORKS:

  1. CONCEPTS EXPLAINED
     - What is this pattern?
     - Why use it this way?

  2. CUSTOMIZATION
     - What can you change?
     - Where to make changes?

  3. EXAMPLES
     - Show before/after
     - Demonstrate variations
*/
```

**Create Multiple Documentation Levels:**
1. **QUICK_START.md** - Get running in 5 minutes
2. **CUSTOMIZATION.md** - Step-by-step with line numbers
3. **README.md** - Complete reference
4. **Inline comments** - Teach concepts in context

---

### 4. Incremental Delivery Refinement

**Original:** 6-step process (skeleton → layout → one page → iterate → polish → tests)

**Refined:** Focus on "Complete & Customizable" approach

**Step 1: Create Complete Boilerplate (All at Once)**
- All pages with placeholder content
- All components functional
- Complete styling system
- Professional design

**Why?** User can:
- See the full structure immediately
- Navigate complete site
- Understand relationships between pages
- Get excited about end result

**Step 2: Provide Clear Customization Roadmap**
- Checklist with priorities
- Exact file paths and line numbers
- Before/after examples
- User replaces content at their pace

**Key Insight:** For solo learners, seeing the complete picture first is better than incremental builds

---

### 5. Explaining Design Decisions

**New Requirement:** Always explain WHY you chose each technology

**Example:**
```
"I'm recommending CSS Modules over Tailwind because:

1. Your books teach CSS fundamentals (box model, specificity)
2. Learning actual CSS builds better foundation
3. Tailwind can be added later in ~1 hour
4. CSS Modules are production-ready

We can revisit this choice after you're comfortable with CSS."
```

**Don't just follow the prompt's defaults** - evaluate and explain

---

### 6. Git Workflow for Beginners

**New Section:** Help with Git setup and common issues

**Issues we encountered:**
1. CRLF vs LF line endings (Windows)
2. Reserved filenames (`nul`, `con`, `prn`)
3. VS Code settings vs Git config
4. Understanding warnings vs errors

**Provide:**
- `.gitattributes` file for line ending consistency
- Clear distinction: warnings (safe to ignore) vs errors (must fix)
- Explanations of what Git is doing and why
- Commands with explanations, not just "run this"

---

### 7. Content Organization Guidance

**Original Prompt Missing:** Where to put actual content before adding to site

**Add to Initial Setup:**

```
Would you like me to create a content organization folder?

ON_Design_Content/
├── logos/           # Your SVG, PNG logos
├── projects/        # Project photos
├── documents/       # Company info, bios
└── copy/           # Written content drafts

This keeps source materials separate from website files.
```

---

### 8. Troubleshooting Section

**New Requirement:** Include common Windows development issues

**Common Issues:**
- Node.js not installed / wrong version
- Port 3000 already in use
- Module not found (need `npm install`)
- Changes not showing (need hard refresh)
- PowerShell execution policy
- Spaces in file paths
- CRLF line endings
- Reserved Windows filenames

**Provide solutions proactively in README**

---

### 9. Deployment Education

**Original:** "Deploy to Vercel"

**Refined:** Explain complete deployment workflow

**Include:**
1. What is a domain name? Where to buy?
2. What is hosting? How do files become a website?
3. Local development vs Production
4. Free hosting options (Vercel, Netlify)
5. Custom domain setup (step-by-step)
6. Timeline expectations (DNS propagation, etc.)

**Key Insight:** Non-developers need the entire mental model, not just commands

---

### 10. File References with Line Numbers

**New Standard:** When telling user to customize something:

❌ **Vague:** "Update the contact info in the Footer"

✅ **Specific:**
```
File: components/Footer.js
Lines: 42-45

Find this:
  <p className={styles.text}>Email: info@ondesign.com</p>

Replace with:
  <p className={styles.text}>Email: your.actual.email@domain.com</p>
```

**Every customization instruction should include:**
- Exact file path
- Line numbers
- Before code
- After code
- Explanation of what it does

---

## Refined Workflow

### Phase 0: Understand Context (NEW)

**Ask these questions FIRST:**

1. **Learning Context**
   - "Are you learning from books/courses? Which ones?"
   - "What programming languages do you know?"
   - "Have you built websites before?"

2. **Business Context**
   - "What does your company do?"
   - "Who is your target audience?"
   - "What's your timeline for launching?"

3. **Technical Context**
   - "Do you have Node.js installed?" (`node --version`)
   - "Are you comfortable with terminal/command line?"
   - "What operating system?" (Windows has specific issues)

4. **Goals**
   - "Want to learn deeply or ship quickly?"
   - "Will you maintain this yourself or hire help later?"
   - "Any specific features required?"

**Then adapt recommendations to their context**

---

### Phase 1: Align on Intent (Original, Enhanced)

Before writing code:

1. **Restate Understanding**
   - "You want [X] for [audience Y]"
   - "Success looks like [Z]"

2. **Propose Tech Stack** (Based on Phase 0 answers)
   - List what you're recommending
   - **Explain WHY for each choice**
   - Mention alternatives and tradeoffs
   - **Ask for confirmation**

3. **Call Out Assumptions**
   - "I'm assuming you want [X]"
   - "If that's wrong, let me know"

4. **Show Deployment Path**
   - Where will this be hosted?
   - How much will it cost?
   - What's the complete workflow?

---

### Phase 2: Create Complete Boilerplate (Refined)

**Deliver everything at once:**
- All pages (complete, not incremental)
- All components
- All styling
- All documentation

**Why?** Better for solo learners:
- See complete picture
- Navigate full site
- Understand structure
- Placeholder content clearly marked

**Include:**
- Placeholder images (SVG with labels)
- TODO comments in code
- Example data structures
- Complete file tree

---

### Phase 3: Provide Customization Roadmap (NEW)

**Create CUSTOMIZATION.md with:**

1. **Prioritized Checklist**
   - High: Logo, contact info, hero text
   - Medium: About story, services, projects
   - Low: Colors, fonts, advanced features

2. **For Each Item:**
   - What to customize
   - Why it matters
   - Exact file path and line numbers
   - Before/after code examples
   - Tips for writing good content

3. **Common Tasks Section**
   - How to add a page
   - How to change colors
   - How to add images
   - How to add email to form

---

### Phase 4: Testing & Deployment (Enhanced)

**Before deployment checklist:**
- [ ] All placeholder content replaced
- [ ] Tested on mobile, tablet, desktop
- [ ] All links work
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Reviewed by someone else

**Deployment with explanation:**
1. What is Git and why use it?
2. What is GitHub and how does it work?
3. What is Vercel/Netlify?
4. Step-by-step deployment
5. How to update after deploying
6. Custom domain setup (optional)

---

## Enhanced Output Format

### 1. Understanding Section
```markdown
## Understanding

**Business:** [What they do]
**Audience:** [Who they serve]
**Goal:** [What success looks like]

## Technology Recommendations

**Stack:**
- React - [Why this is right for you]
- Next.js - [Why this over alternatives]
- JavaScript - [Why NOT TypeScript right now]
- CSS Modules - [Why this over Tailwind]

**Can add later when ready:**
- TypeScript (1 hour to migrate)
- Tailwind CSS (1 hour to integrate)
- CMS (when you need easier content updates)

Do these choices work for you?
```

### 2. Before Creating Files

```markdown
## What I'm About to Build

**5 Pages:**
1. Home - Hero, services overview, CTA
2. About - Company story, expertise, values
3. Services - Detailed service descriptions
4. Projects - Portfolio with filtering
5. Contact - Form + contact information

**Key Features:**
- Responsive design (mobile/tablet/desktop)
- Professional blue/gray color scheme
- Interactive contact form
- Project filtering
- SEO-ready

**What you'll need to customize:**
- [List of placeholder content]

Ready to proceed?
```

### 3. File-by-File Explanation (NEW)

After creating files, provide:

```markdown
## Complete File Walkthrough

### Configuration Files
1. **package.json** - [What it does, when to edit]
2. **next.config.js** - [What it does, when to edit]
...

### Components
1. **Header.js** - [What it does, how it works, where to customize]
...

### Pages
1. **index.js (Home)** - [Structure, key concepts, customization points]
...

[Detailed explanation for EVERY file created]
```

### 4. Next Steps Section

```markdown
## Your Next Steps

**Right Now (5 minutes):**
1. Run `npm run dev`
2. Open `localhost:3000`
3. Browse all pages
4. Verify everything works

**This Week:**
1. Read through CUSTOMIZATION.md
2. Gather content (logo, photos, text)
3. Start customizing (follow checklist)

**This Month:**
1. Replace all placeholder content
2. Add email integration to form
3. Test thoroughly
4. Deploy to Vercel

**Questions to consider:**
- Do you have a domain name in mind?
- Do you have project photos ready?
- Is there content you need help writing?
```

---

## New Principles Added

### Principle 1: Teach Through Code
Code comments are the primary teaching tool. Every file is a lesson.

### Principle 2: Foundation Before Frameworks
Learn JavaScript before TypeScript. Learn CSS before Tailwind. You can always add tools later.

### Principle 3: Complete Picture First
Show the full website structure, then customize. Better than incremental builds for solo learners.

### Principle 4: Explain Every Decision
Never say "use X" without explaining why X over Y, and when Y might be better.

### Principle 5: Path Numbers
Line numbers in every customization instruction. No hunting for code.

### Principle 6: Context-Aware Recommendations
Books teaching JavaScript? Use JavaScript. Experienced dev? Use TypeScript. Same principles, different tools.

### Principle 7: Warnings vs Errors
Teach the difference. Git warnings about CRLF? Safe. Module not found? Must fix.

### Principle 8: Complete Workflows
Not just "deploy" but: what → where → how → why → what does it cost → what's the timeline?

---

## What Worked Well

✅ **Boilerplate approach** - User can see complete site immediately
✅ **Extensive documentation** - Multiple formats (README, CUSTOMIZATION, QUICK_START)
✅ **Inline teaching** - Code comments explain concepts
✅ **Tech stack alignment** - Matched user's learning materials (JavaScript books)
✅ **Line number references** - Made customization precise and easy
✅ **File-by-file walkthrough** - Comprehensive understanding
✅ **Troubleshooting sections** - Addressed real issues (Git, Windows, etc.)

---

## What Could Be Improved

### 1. Earlier Context Gathering
Ask about user's learning context BEFORE proposing stack

### 2. Content Organization
Offer to create separate content folder earlier in process

### 3. Visual Design System
Could provide Figma/design file showing color palette, typography visually

### 4. Video Walkthroughs
Could record short videos showing:
- How to run dev server
- How to customize a page
- How to deploy

### 5. Starter Content Templates
Provide template text for About page, services, etc. that users can adapt

---

## Recommended Additions to Original Prompt

Add these sections to the original prompt:

### Section 10: User Context Discovery
```
Before proposing tech stack, ask about:
- Learning resources (books, courses)
- Experience level
- Timeline and goals
- Operating system
```

### Section 11: Teaching Philosophy
```
Treat code as teaching tool:
- Extensive inline comments
- Concept explanations
- Multiple documentation formats
- Examples and comparisons
```

### Section 12: Windows Development Considerations
```
Address Windows-specific issues:
- CRLF vs LF line endings
- Reserved filenames
- PowerShell vs Command Prompt
- Path spaces
```

### Section 13: Complete Workflows
```
Explain entire processes, not just commands:
- Domain → DNS → Hosting → Deployment
- Git → GitHub → Vercel → Live site
- Local → Build → Production
```

### Section 14: Post-Delivery Guidance
```
After building, provide:
- File-by-file walkthrough
- Customization roadmap with line numbers
- Next steps (immediate, short-term, long-term)
- Context document for future conversations
```

---

## Template for Future Projects

When starting a new website project:

### Step 1: Discovery (15 minutes)
- [ ] Ask about learning context
- [ ] Ask about business context
- [ ] Ask about technical setup
- [ ] Ask about goals and timeline

### Step 2: Proposal (Before coding)
- [ ] Propose tech stack with explanations
- [ ] Show example of what you'll build
- [ ] List customization requirements
- [ ] Get user confirmation

### Step 3: Build (1-3 hours)
- [ ] Create complete boilerplate
- [ ] Add extensive inline comments
- [ ] Include placeholder content with clear TODOs
- [ ] Create comprehensive documentation

### Step 4: Deliver (30 minutes)
- [ ] Walk through every file
- [ ] Explain key concepts demonstrated
- [ ] Provide customization roadmap
- [ ] Give clear next steps

### Step 5: Support (Ongoing)
- [ ] Answer questions with file/line references
- [ ] Help troubleshoot issues
- [ ] Guide through customization
- [ ] Assist with deployment

---

## Conclusion

The original LLM prompt was excellent. These refinements are based on real-world application with a learner building their first production website.

**Key Enhancement:** Adapt tools to user's learning stage, not just "best practices." Foundation first, advanced features later.

**Result:** User gets production-quality code they can understand, customize, and learn from.

---

**Use this refined approach for future website projects with learners or non-developers.**
