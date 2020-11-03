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
        'color-primary': '#C7E0F3',
        'color-dark-gray': '#2D2D2D',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '120': '30rem',
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
    },
  },
  variants: {},
  plugins: [],
};
