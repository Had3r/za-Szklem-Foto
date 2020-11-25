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
        '1/7': '15%',
        '5/7': '70%',
      },
      colors: {
        primary: '#DBEAF9',
        'primary-darker': '#4995e1',
        'primary-gray': '#3D4842',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '144': '36rem',
        '160': '40rem',
      },
      keyframes: {
        brightenBg: {
          '0%': { backgroundColor: 'rgb(0,0,0,0.8)' },
          '100%': { backgroundColor: 'rgb(0,0,0,0.3)' },
        },
      },
      animation: {
        brightenBg: '2s ease-in-out 1 forwards',
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
