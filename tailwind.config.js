module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Lato', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
