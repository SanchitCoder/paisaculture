/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          DEFAULT: '#141821',
          50: '#f7f6f2',
          100: '#eeece6',
          200: '#d8d4ca',
          300: '#bab5a8',
          400: '#928e81',
          500: '#6e6b60',
          600: '#524f46',
          700: '#3a3832',
          800: '#28261f',
          900: '#141821',
        },
        accent: {
          DEFAULT: '#F59E0B',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.25rem, 6.5vw, 5.75rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.012em' }],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw-line': 'draw-line 0.65s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'cinematic': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(20, 24, 33, 0.04), 0 4px 12px rgba(20, 24, 33, 0.04)',
        'card-hover': '0 4px 20px rgba(20, 24, 33, 0.08), 0 1px 4px rgba(20, 24, 33, 0.04)',
        'pill': '0 2px 20px rgba(20, 24, 33, 0.08), 0 1px 4px rgba(20, 24, 33, 0.04)',
        'pill-elevated': '0 4px 32px rgba(20, 24, 33, 0.12), 0 2px 8px rgba(20, 24, 33, 0.06)',
        'glow-primary': '0 0 40px rgba(14, 165, 233, 0.12)',
        'glow-accent': '0 0 40px rgba(245, 158, 11, 0.12)',
      },
    },
  },
  plugins: [],
}
