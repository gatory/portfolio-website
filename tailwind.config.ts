import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
}

export default config