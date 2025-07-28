/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981", // emerald-500
          dark: "#047857",    // emerald-800
          light: "#6ee7b7",   // emerald-300
        },
        accent: {
          DEFAULT: "#0ea5e9", // sky-500
        },
        background: "#f0fdfa", // teal-50
        foreground: "#1e293b", // slate-800
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  safelist: [
    {
      pattern: /bg-(emerald|sky)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['dark'],
    },
    {
      pattern: /text-(emerald|sky)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['dark'],
    },
    {      pattern: /border-(emerald|sky)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['dark'],
    },
  ],
  corePlugins: {
    preflight: true, // Enable Tailwind's base styles
  },
  future: {
    hoverOnlyWhenSupported: true, // Enable hover styles only when supported
  },
  experimental: {
    optimizeUniversalDefaults: true, // Optimize default styles for better performance
  },
  important: true, // Add !important to all Tailwind classes
  prefix: 'tw-', // Add a prefix to all Tailwind classes
  separator: ':', // Use colon as the separator for responsive and state variants
  themeVariants: {
    light: 'light', // Define light theme variant
    dark: 'dark', // Define dark theme variant
  },
  plugins: [
    require('@tailwindcss/forms'), // Add Tailwind Forms plugin
    require('@tailwindcss/typography'), // Add Tailwind Typography plugin
    require('@tailwindcss/aspect-ratio'), // Add Tailwind Aspect Ratio plugin
  ],
}