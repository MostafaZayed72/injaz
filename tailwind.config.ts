import type { Config } from 'tailwindcss'

export default <Config>{
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0050A1',
          dark: '#003D7A',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#424242',
          dark: '#262626',
          light: '#6B6B6B',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
