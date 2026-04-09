/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        background: "#010103",
        card: "rgba(255, 255, 255, 0.03)",
        cardBorder: "rgba(255, 255, 255, 0.1)",
        primary: "#e1e7ec",
        secondary: "#6366f1",
        accent: "#0ea5e9",
        textMain: "#f8fafc",
        textMuted: "#94a3b8"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, rgba(138,43,226,0.3) 0deg, rgba(0,240,255,0.3) 180deg, rgba(138,43,226,0.3) 360deg)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glass-hover': '0 8px 32px 0 rgba(14, 165, 233, 0.2)',
        'glass-glow': '0 0 25px rgba(14, 165, 233, 0.4)',
        'premium': '0 20px 40px -20px rgba(0,0,0,0.8)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

