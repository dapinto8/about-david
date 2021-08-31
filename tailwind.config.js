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
      width: {
        '120': '30rem'
      },
      height: {
        '0.75': '0.2rem',
        '120': '30rem'
      },
      maxWidth: {
        'xxxs': '6rem',
        'xxs': '16rem'
      },
      flex: {
        '50': ' 1 0 50%'
      },
      lineHeight: {
        'through': '0.6',
        '16': '4rem'
      },
      fontSize: {
        '6vw': '6vw',
        '14vw': '14vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
