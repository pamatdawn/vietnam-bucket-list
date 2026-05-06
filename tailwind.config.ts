import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-blue-600', 'bg-blue-50', 'bg-blue-100', 'text-blue-800',
    'bg-red-600',  'bg-red-50',  'bg-red-100',  'text-red-800',
    'bg-pink-600', 'bg-pink-50', 'bg-pink-100', 'text-pink-800',
    'bg-orange-500','bg-orange-50','bg-orange-100','text-orange-800',
    'bg-teal-600', 'bg-teal-50', 'bg-teal-100', 'text-teal-800',
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
