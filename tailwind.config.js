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
      spacing: {
        'gb-header': appConfig.headerHeight,
        'side-padding': appConfig.sidePadding,
      },
      maxWidth: {
        'mobile-app': appConfig.mobileAppMaxWidth,
      },

      colors: {
        'primary-bg': appConfig.backgroundColor,
        'highlighted-text': appConfig.highlightedTextColor,
        'footer-color': appConfig.footerColor,
        primary: {
          300: '#fffff6',
          400: '#fff8ec',
          500: '#f8eee2',
          600: '#eee4d8',
          700: '#e4dace',
          800: '#dad0c4',
          900: '#d0c6ba',
        },
        secondary: {
          50: '#ff937e',
          100: '#ff8974',
          200: '#f77f6a',
          300: '#ed7560',
          400: '#e36b56',
          500: '#d9614c',
          600: '#cf5742',
          700: '#c54d38',
          800: '#bb432e',
          900: '#b13924',
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
