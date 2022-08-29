module.exports = {
  mod: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: 'rgb(203, 216, 181))',
        secondary: '#00b1d2',
        main: '#718096',
        background: '#fff',
        header: '#0d0106',
        footer: '#ffffff',
        link: '#00b1d2',
        accent: '#2d3748',
      },
    },
  },
  plugins: [],
}
