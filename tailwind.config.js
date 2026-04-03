/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ice: '#00d4ff',
        dark: '#000000',
        light: '#ffffff',
      },
      fontFamily: {
        bold: ['Inter var', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'pulse-ice': 'pulseIce 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseIce: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 212, 255, 0)' },
        },
      },
    },
  },
  plugins: [],
}
