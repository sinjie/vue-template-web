const path = require('path')

module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias  // 为指定目录设置全局别名
      .set('@', path.join(__dirname, 'src'))
      .set('@public', path.join(__dirname, 'public'))

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 全局变量文件路径，只有一个时可将数组省去
          resources: ['src/style/var.scss']
        })
        .end()
    })

    config.module
      .rule('svg')
      .exclude
      .add(path.join(__dirname, 'src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

}