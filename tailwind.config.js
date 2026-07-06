/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // Keep existing site styling identical by not injecting Tailwind's CSS reset.
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

