/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0a0c', accent: '#4fd1a5' },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee 48s linear infinite reverse',
        spin360: 'spin360 10s linear infinite',
      },
    },
  },
  plugins: [],
}
