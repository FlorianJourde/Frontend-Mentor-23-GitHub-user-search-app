/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-background": "var(--clr-body-background)",
        "card-background": "var(--clr-card-background)",
        "button-background": "var(--clr-button-background)",
        "button-text": "var(--clr-button-text)",
        "primary-text": "var(--clr-primary-text)",
        "secondary-text": "var(--clr-secondary-text)",
      },
      boxShadow: {
        'primary': 'var(--bs-primary)',
      }
    },
  },
  plugins: [],
}

