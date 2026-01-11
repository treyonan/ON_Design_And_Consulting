# Quick Start Guide

## Get Your Website Running (Right Now!)

### Step 1: Open Terminal

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

### Step 2: Navigate to Project

```bash
cd C:\Dolese\ON_Design_Website
```

### Step 3: Install Dependencies (First Time Only)

```bash
npm install
```

This takes 1-2 minutes. You'll see packages being downloaded.

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:

```
> on-design-website@1.0.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in XXXms
```

### Step 5: Open in Browser

Open your web browser and go to:

```
http://localhost:3000
```

**You should see your website! 🎉**

---

## What You'll See

Your website with:
- ✅ Professional header with logo and navigation
- ✅ Home page with hero section and services
- ✅ About page
- ✅ Services page
- ✅ Projects portfolio
- ✅ Contact form
- ✅ Footer with contact info

---

## Making Changes

1. **Open a file** in VS Code (or any text editor)
2. **Make a change** (e.g., edit text)
3. **Save the file** (`Ctrl+S`)
4. **Check your browser** - it auto-refreshes!

No need to restart the server!

---

## Stop the Server

Press `Ctrl + C` in the terminal

---

## Next Steps

1. **Read [CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Step-by-step guide to replace placeholder content
2. **Add your logo** - See CUSTOMIZATION.md Section 1
3. **Update contact info** - See CUSTOMIZATION.md Section 2
4. **Add your projects** - See CUSTOMIZATION.md Section 10

---

## Troubleshooting

**Problem:** `npm: command not found`

**Solution:** Install Node.js from https://nodejs.org

---

**Problem:** `Port 3000 is already in use`

**Solution:**
```bash
# Stop any running dev servers, then:
npm run dev
```

---

**Problem:** Changes aren't showing

**Solution:**
- Hard refresh: `Ctrl + Shift + R`
- Or restart dev server: `Ctrl+C`, then `npm run dev`

---

## Important Files to Customize

| File | What to Change |
|------|----------------|
| `components/Header.js` | Logo |
| `components/Footer.js` | Contact info |
| `pages/index.js` | Home page content |
| `pages/about.js` | Your company story |
| `pages/services.js` | Service descriptions |
| `pages/projects.js` | Your actual projects |
| `pages/contact.js` | Contact details |

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions!

---

**Ready? Run `npm run dev` and let's build your website! 🚀**
