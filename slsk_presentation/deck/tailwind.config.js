/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa',
        primary: '#001629',
        secondary: '#7c5071',
        surface: '#ffffff',
        'on-surface': '#191c1d',
        'on-surface-variant': '#42474d',
        'outline-variant': '#c3c7ce',
        outline: '#73777e',
        'primary-container': '#002b49',
        'on-primary-container': '#cfe5ff',
        'secondary-container': '#fec7ed',
        'surface-container-low': '#f3f4f5',
        'surface-container-high': '#e7e8e9',
        'surface-container-highest': '#e1e3e4',
        'tertiary-fixed': '#bcf0ae',
        'tertiary-container': '#023103',
        'on-primary': '#ffffff',
        'on-background': '#191c1d',
      },
      fontFamily: {
        headline: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
