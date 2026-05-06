import type { Config } from 'tailwindcss'

export default <Config>{
  content: [],
  theme: {
    extend: {
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
