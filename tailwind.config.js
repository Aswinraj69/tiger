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
        primary: '#dc2b27',
        'primary-dark': '#b01f1c',
        'primary-light': '#ff3d38',
        secondary: '#FFD700',
        accent: '#8B00FF',
        dark: '#0A0A0A',
        'dark-card': '#151515',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'scroll-horizontal': 'scrollHorizontal 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 20px rgba(220, 43, 39, 0.5))' },
          'to': { filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))' },
        },
        scrollHorizontal: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
