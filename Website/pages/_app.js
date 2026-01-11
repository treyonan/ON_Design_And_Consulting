// ===================================
// _APP.JS - Application Entry Point
// This file wraps ALL pages in your application
// Special Next.js file - must be named _app.js
// ===================================

import '../styles/globals.css'; // Import global styles

/*
  WHAT IS THIS FILE?
  - Next.js automatically uses this file
  - It wraps every page in your site
  - Perfect place for global styles, layouts, or state

  HOW IT WORKS:
  - Component: The current page component (Home, About, etc.)
  - pageProps: Data for that page
  - Next.js calls this for EVERY page navigation

  EXAMPLE FLOW:
  User visits /about
  → Next.js loads pages/about.js
  → Wraps it with this _app.js
  → Returns: <Component {...pageProps} />
  → Component = About page
*/

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/*
  WHY SPREAD OPERATOR {...pageProps}?

  The ... is called "spread operator" in JavaScript
  It "spreads out" all properties from an object

  Example:
  pageProps = { title: "About", data: {...} }

  <Component {...pageProps} />
  becomes:
  <Component title="About" data={...} />

  It passes all props to the page component without
  needing to know what they are.

  CUSTOMIZATION:
  You can add providers here later:
  - Authentication
  - Theme providers
  - State management (Redux, Context)

  Example:
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
*/
