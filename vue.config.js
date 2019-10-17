const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/css/variables/_*.less'),
        path.resolve(__dirname, 'src/assets/css/mixins/*.less')
      ]
    }
  }
}
