const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
module.exports = {
  entry: {
    // ...views,
    home: './src/views/home/home.js',
    menu: './src/views/menu/menu.js',
    more: './src/views/more/more.js',
    store: './src/views/store/store.js',
    account: './src/views/account/account.js',
    coummon: './src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[fullhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff | eot | ttf | otf | svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  devServer: {
    // index: path.resolve(__dirname, 'home.html'),
    open: ['/home.html'],
    // 配置前端请求代理
    proxy: {
      // 在开发环境下面代理的目标是http://127.0.0.1:3000
      // 在生产环境下面代理的目标是http://api.cc0820.top:3000
      '^/api': {
        target: 'https://www.starbucks.com.cn/',
      },
      '^/bff': {
        target: 'https://bff.starbucks.com.cn/',
        pathRewrite: { '/api1': '' },
      },
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'css/[main].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/views/home/home.html',
      filename: 'home.html',
      chunks: ['common', 'home'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/views/account/account.html',
      filename: 'account.html',
      chunks: ['common', 'account'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'menu.html',
      template: './src/views/menu/menu.html',
      chunks: ['common', 'menu'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'more.html',
      template: './src/views/more/more.html',
      chunks: ['common', 'more'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'store.html',
      template: './src/views/store/store.html',
      chunks: ['common', 'store'],
    }),
  ],
};