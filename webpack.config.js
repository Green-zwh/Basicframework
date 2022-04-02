const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    // 配置别名后需要重启项目
    config.resolve.alias.set('@', resolve('src'))
  },
  module: {
    rules: [{
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      }

    ]

  }
}