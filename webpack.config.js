// 這邊使用 HtmlWebpackPlugin，將 bundle 好得 <script> 插入到 body  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'index.html',
  inject: false,
});

// 檔案起始點從 entry 進入，也可以是多個檔案。output 是放入產生出來的結果的相關參數。loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案轉譯成瀏覽器可以閱讀的 JavaScript。devServer 則是 webpack-dev-server 設定。plugins 放置所使用的外掛
module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
    ],
  },
  devServer: {
    inline: true,
    port: 8080,
  },
  plugins: [HTMLWebpackPluginConfig],
};