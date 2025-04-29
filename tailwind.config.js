/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-900': 'var(--primary-900)',
        'primary-800': 'var(--primary-800)',
        'primary-700': 'var(--primary-700)',
        'primary-600': 'var(--primary-600)',
        'primary-500': 'var(--primary-500)',
        'primary-400': 'var(--primary-400)',
        'primary-300': 'var(--primary-300)',
        'primary-200': 'var(--primary-200)',
        'primary-100': 'var(--primary-100)',
        'secondary-900': 'var(--secondary-900)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-100': 'var(--secondary-100)',
      },
    },
  },
  plugins: [],
}
