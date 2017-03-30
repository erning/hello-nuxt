module.exports = {
  build: {
    analyze: false,
    vendor: ['element-ui']
    // filenames: {
    //   css: 'style.[hash:6].css',
    //   vendor: 'vendor.[hash:6].js',
    //   app: 'app.[chunkhash:6].js'
    // }
  },
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    'element-ui/lib/theme-default/index.css'
  ]
}
