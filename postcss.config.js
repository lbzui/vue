module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'no-autoplace'
      },
      importFrom: ['src/assets/css/variables/variables.css']
    },
    'postcss-pxtorem': {
      unitPrecision: 8,
      propList: ['font', 'font-size', 'line-height']
    }
  }
};
