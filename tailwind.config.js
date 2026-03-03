/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kiabi: {
          dark: '#040037',
          darkLight: '#0a0060',
          electric: '#00C8FF',
          card: '#F4F6FF',
          green: '#00D68F',
          amber: '#FFB830',
          muted: '#8892B0',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-kiabi': 'linear-gradient(135deg, #040037 0%, #0a0060 50%, #040037 100%)',
        'gradient-card': 'linear-gradient(135deg, #F4F6FF 0%, #EEF2FF 100%)',
        'gradient-electric': 'linear-gradient(135deg, #00C8FF 0%, #0080CC 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(4, 0, 55, 0.08)',
        'card-hover': '0 12px 40px rgba(4, 0, 55, 0.16)',
        'electric': '0 0 24px rgba(0, 200, 255, 0.3)',
        'glow': '0 0 40px rgba(0, 200, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
