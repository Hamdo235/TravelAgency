/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KODBE brand palette — royal blue + teal + orange
        brand: {
          DEFAULT: '#0f2d6b',   // Deep navy blue (primary)
          dark:    '#08193f',
          mid:     '#1a4bba',   // Royal blue
          light:   '#2563eb',
          50:      '#eff6ff',
          100:     '#dbeafe',
        },
        teal: {
          DEFAULT: '#0891b2',
          light:   '#06b6d4',
          50:      '#ecfeff',
          100:     '#cffafe',
        },
        amber: {
          DEFAULT: '#d97706',
          light:   '#f59e0b',
          50:      '#fffbeb',
          100:     '#fef3c7',
        },
        sky: '#f0f7ff',
        muted: '#64748b',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)',      'system-ui', 'sans-serif'],
      },
      animation: {
        'float':   'float 5s ease-in-out infinite',
        'fadeUp':  'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
}
