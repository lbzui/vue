const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

process.env.VUE_APP_SITE_URL = 'https://lbzui-vue.lanbizhong.com/'

module.exports = {
  pages: {
    index: 'docs/main.ts'
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  pwa: {
    themeColor: '#3700b3',
    msTileColor: '#6200ee',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      dir: 'ltr',
      lang: 'en',
      description: 'Material Components for Vue.js',
      background_color: '#fff',
      orientation: 'any',
      icons: [
        {
          src: './img/logo/pwa/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/logo/pwa/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/logo/favicon/32x32.png',
      favicon16: 'img/logo/favicon/16x16.png',
      appleTouchIcon: 'img/logo/apple/180x180.png',
      maskIcon: 'img/logo/apple/16x16.svg',
      msTileImage: 'img/logo/ms/144x144.png'
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
