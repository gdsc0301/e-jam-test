import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm' : '320px',
      'md' : '640px',
      'lg' : '1024px',
      'xl' : '1245px'
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'davy-gray'         : '#4D5254',
        'crayola'           : '#2C7EF8',
        'apple'             : '#59AE43',
        'deep-carmine-pink' : '#F82C2C',
        'gunmetal'          : '#252F3D'
      }
    },
  },
  plugins: [],
}
export default config
