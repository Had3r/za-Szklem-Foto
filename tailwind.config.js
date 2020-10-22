module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        'color-primary': '#C7E0F3',
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
