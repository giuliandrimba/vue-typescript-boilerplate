module.exports = {
  chainWebpack: config => {
    config.module.rule('raw-loader')
      .test(/\.glsl$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
