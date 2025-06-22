/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom font family for Inter
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // Add custom animations
      animation: {
        'slide-in': 'slide-in 1.2s ease-out',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      // Define keyframes for animations
      keyframes: {
        'slide-in': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};