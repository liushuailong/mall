// vue cli 3
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       // 配置路径的别名
//       alias: {
//         // '@': 'src',
//         'assets': 'src/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }

// vue cli 4
const path = require('path'); // 引入path模块

// function resolve(dir) {
//   return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
// }

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack:(config) => {
    config.resolve.alias
      // .set('@', resolve('./src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
  }
}
