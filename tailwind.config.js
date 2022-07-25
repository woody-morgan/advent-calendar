/** @type {import('tailwindcss').Config} */
// generate custom color using https://tailwindcolorgenerator.com/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const appConfig = require('./src/core/config/appConfig')

module.exports = {
  mod: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: appConfig.mobileAppMaxWidth,
    },
    extend: {
      fontFamily: {
        NotoSansKorean: ['Noto Sans Korean', 'sans-serif'],
      },
      margin: {
        center: '0 auto',
      },
      maxWidth: {
        'mobile-app': appConfig.mobileAppMaxWidth,
      },

      colors: {
        'primary-bg': appConfig.backgroundColor,
        'from-bg': appConfig.backgroundFromColor,
        'to-bg': appConfig.backgroundToColor,
        primary: {
          50: '#EAE7F8',
          100: '#D5D0F1',
          200: '#ABA0E3',
          300: '#8271D6',
          400: '#5841C8',
          500: '#412E9E',
          600: '#34257E',
          700: '#271C5F',
          800: '#1A123F',
          900: '#0D0920',
        },
        secondary: {
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#C2D7FF',
          300: '#A3C3FF',
          400: '#80ACFF',
          500: '#629AFF',
          600: '#1A6AFF',
          700: '#004BD6',
          800: '#00328F',
          900: '#001947',
        },
        link: {
          50: '#F1F7EE',
          100: '#E3EEDD',
          200: '#CBE0BD',
          300: '#AFCF9B',
          400: '#93BF79',
          500: '#79AF58',
          600: '#608D44',
          700: '#496B33',
          800: '#314823',
          900: '#172211',
        },
      },
    },
  },
  plugins: [],
}
