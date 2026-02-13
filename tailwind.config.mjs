/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#ececec',
          150: '#dadada',
          200: '#c9c9c9',
          300: '#afafaf',
          400: '#8f8f8f',
          500: '#727272',
          600: '#565656',
          700: '#3e3e3e',
          800: '#2a2a2a',
          900: '#1b1b1b',
          950: '#0f0f10',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Helvetica Neue',
          'sans-serif',
        ],
        display: [
          'Space Grotesk',
          'Pretendard Variable',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'Fira Code',
          'monospace',
        ],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.06', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.45', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.8', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.8', fontWeight: '400' }],
        'caption': ['0.8125rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1080px',
      },
      spacing: {
        'section': '5.5rem',
        'section-lg': '7rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
