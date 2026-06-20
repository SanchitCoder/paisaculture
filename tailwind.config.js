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
          DEFAULT: '#1B365D',
          50: '#EEF2F7',
          100: '#D5DEEA',
          200: '#ABBDD5',
          300: '#819CC0',
          400: '#4A6F96',
          500: '#1B365D',
          600: '#172E4F',
          700: '#122541',
          800: '#0E1C33',
          900: '#091425',
        },
        dark: {
          DEFAULT: '#1B365D',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#152847',
        },
        accent: {
          DEFAULT: '#C1272D',
          50: '#FDF2F3',
          100: '#FCE4E6',
          200: '#F9C9CD',
          300: '#F0A0A7',
          400: '#DC5060',
          500: '#C1272D',
          600: '#A5212A',
          700: '#841B22',
          800: '#631419',
          900: '#420E11',
        },
        canvas: {
          DEFAULT: '#FFFFFF',
          alt: '#F4F6F9',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.85rem, 6.5vw, 5.75rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.65rem, 3.5vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.012em' }],
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
        'card': '0 1px 2px rgba(27, 54, 93, 0.04), 0 4px 12px rgba(27, 54, 93, 0.04)',
        'card-hover': '0 4px 20px rgba(27, 54, 93, 0.08), 0 1px 4px rgba(27, 54, 93, 0.04)',
        'pill': '0 2px 20px rgba(27, 54, 93, 0.08), 0 1px 4px rgba(27, 54, 93, 0.04)',
        'pill-elevated': '0 4px 32px rgba(27, 54, 93, 0.12), 0 2px 8px rgba(27, 54, 93, 0.06)',
        'glow-primary': '0 0 40px rgba(27, 54, 93, 0.12)',
        'glow-accent': '0 0 40px rgba(193, 39, 45, 0.12)',
      },
    },
  },
  plugins: [],
}
