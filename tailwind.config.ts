import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-be-vietnam)', 'sans-serif'],
      },
      colors: {
        primary: '#c8102e',
        secondary: '#f5a623',
      },
      keyframes: {
        'check-pop': {
          '0%':   { transform: 'scale(0)',   opacity: '0' },
          '55%':  { transform: 'scale(1.35)' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        'progress-shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'check-pop':        'check-pop 0.28s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
        float:              'float 3.5s ease-in-out infinite',
        'progress-shimmer': 'progress-shimmer 2s linear infinite',
        'fade-in':          'fade-in 0.15s ease-out',
        'slide-up':         'slide-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
