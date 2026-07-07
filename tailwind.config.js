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
        'crio-teal': '#00C9A7',
        'crio-teal-dark': '#00B896',
        'crio-yellow': '#F5C518',
        'crio-yellow-hover': '#e6b800',
        'crio-text': '#1A1A1A',
        'crio-gray': '#666666',
        'crio-light-gray': '#F8FAFB',
        'crio-border': '#E0E0E0',
        'crio-form-bg': '#EEF5F3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.75rem', { lineHeight: '1.15', fontWeight: '800' }],
      }
    },
  },
  plugins: [],
}
