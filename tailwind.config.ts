/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
        },
        purple: {
          400: '#a78bfa',
        },
        green: {
          400: '#4ade80',
        },
        yellow: {
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
}
