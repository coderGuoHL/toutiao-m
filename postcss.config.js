// postcss.config.js
module.exports = {
  plugins: {
    // vuecli 默认配置过autoprefixer 如果在此再次配置则 在编译是报警告
    // 'autoprefixer': {
    //   browsers: ['Android >= 8.0']
    // },
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
