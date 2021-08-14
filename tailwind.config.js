module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      black: '#000',
      primary: '#EC7F00',
      dark: '#212121',
      gray: '#424242'
    },
    extend: {
      height: {
        '0.75': '0.2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
