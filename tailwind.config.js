const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'title4': ['5.5rem', 0.8],
        'title3': ['4.8rem', 0.8],
        'title2': ['3.1rem', 0.8],
        'title1': ['1.8rem', 0.8],
        'screen': ['18vw', 0.8]
      },
      screens: {
        '3xl': '1800px'
      },
      inset: {
        '-1.4': '-0.3125rem',
      },
      height: {
        'sm': '500px',
        'md': '800px'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#434343',
    }),
    fontFamily: {
      'display': ['Raleway Bold', ...defaultTheme.fontFamily.sans],
      'menu': ['Raleway Regular', ...defaultTheme.fontFamily.sans],
      'body': ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
