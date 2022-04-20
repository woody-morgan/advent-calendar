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
      maxWidth: {
        appMaxWidth: 'var(--app-max-width)',
      },
      height: {
        appHeight: 'var(--app-height)',
        appheaderHeight: 'var(--app-header-height)',
      },
      minHeight: {
        appHeight: 'var(--app-height)',
      },
      padding: {
        appheaderHeight: 'var(--app-header-height)',
      },
      margin: {
        appheaderHeight: 'var(--app-header-height)',
      },
      spacing: {
        appheaderHeight: 'var(--app-header-height)',
      },
      colors: {
        primary: 'var(--primary-color)',
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
