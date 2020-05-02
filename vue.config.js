const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

process.env.VUE_APP_SITE_NAME = '@lbzui/vue'
process.env.VUE_APP_SITE_DESCRIPTION = 'Material Components for Vue.js'
process.env.VUE_APP_SITE_URL = isProduction ? 'https://lbzui-vue.lanbizhong.com/' : 'http://localhost:8080/'

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  pages: {
    index: 'docs/main.ts'
  },
  lintOnSave: !isProduction,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'docs/service-worker.js'
    },
    themeColor: '#3700b3',
    msTileColor: '#6200ee',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      lang: 'en',
      dir: 'ltr',
      description: process.env.VUE_APP_SITE_DESCRIPTION,
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
      ],
      orientation: 'any',
      background_color: '#fff'
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
        resolve('src/assets/css/utilities/_*.less')
      ]
    }
  }
}
