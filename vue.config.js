const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: 'docs/main.ts'
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/assets/css/variables/_*.less'),
        resolve('src/assets/css/mixins/*.less')
      ]
    }
  }
}
