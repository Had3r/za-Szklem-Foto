module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontSize: {
        '5-1/2-xl': '3.5rem',
      },
      width: {
        '0.5': '0.125rem',
        '14': '3.5rem',
        '1/7': '15%',
        '5/7': '70%',
      },
      height: {
        '14': '3.5rem',
      },
      colors: {
        primary: '#DBEAF9',
        'primary-light': '#f5f9fb',
        'primary-darker': '#4995e1',
        'primary-gray': '#3D4842',
        secondary: '#ff682b',
        'secondary-light': '#ff986f',
        'tertiary-gray': '#3c4856',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '144': '36rem',
        '160': '40rem',
      },
      container: {
        center: true,
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  plugins: [],
};
