/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pizza: '#2342',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      // sans: 'Roboto Mono, monospace',
    },
  },
  plugins: [],
};
