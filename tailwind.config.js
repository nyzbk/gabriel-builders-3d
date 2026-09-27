/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#131517',
          'ember': '#C86428',
          'oak': '#24221F',
          'steel': '#63707B',
          'concrete': '#EAECEE',
          'muted': '#8A959E',
          'border': 'rgba(200, 100, 40, 0.25)'
        }
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Space Grotesk', 'sans-serif'],
        'mono': ['Space Mono', 'monospace']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
