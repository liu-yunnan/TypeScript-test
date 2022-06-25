// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件  npm i -D clean-webpack-plugin
// 可以删除打包好的文件中的所有文件，以便于清除冗余文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// webpack中的所有配置信息都应该写在module.exports中
module.exports={
  // 指定入口文件
  entry:"../part3/src/index.ts",
  // 指定打包文件所在目录
  output:{
    // 指定打包文件的目录
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js",
    // 告诉webpack不用箭头
    environment:{
      arrowFunction:false
    }
  },
// 指定webpack打包时要使用的模块
  module:{
    // 指定要加载的规则
    rules:[
      {
        // test指定的是规则生效的文件
        test:/\.ts$/,
        // use 要使用的loader
        use:[
          {
            // 指定加载器
            loader:"babel-loader",
            // 设置babel
            options:{
              // 设置预定义的环境
              presets:[
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets:{
                      "chrome":"88",
                    },
                    // 指定corejs的版本
                    "corejs":"3",
                    // 使用corejs的方式"usage"表示按需加载
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude:/node_modules/
      }
    ]
  },
  // 设置mode   development为开发环境，production为生产环境
  mode: 'development',
  // 配置webpack插件
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:‘这是一个自定义的title文件’
      template:"./src/index.html"
    }),
  ],
  // 用来设置引用模块
  resolve:{
    extensions:['.ts','.js']
  }
}