const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'];
const cssConfig = isProd ? cssProd : cssDev;

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          // {
          //   loader: 'eslint-loader',
          // },
        ],
      },
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'file-loader?name=img/[name].[ext]',
        // loader: 'url-loader?limit=30000&name=img/[name].[ext]'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].css' : '/css/[name].[hash].css',
      chunkFilename: !isProd ? '[id].css' : '/css/[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  devServer: {
    noInfo: true,
    overlay: true,
    hot: true,
    historyApiFallback: true, //чтобы 404s will fallback to /index.html
    open: true,
    port: 3030,
    proxy:{
      '/api': 'http://localhost:5000'
    }
  },
};

module.exports = (env, options) => {
  // console.log(`Options: `, options);
  const production = options.mode === 'production';
  config.devtool = production ? false : 'cheap-module-source-map';
  // config.devtool = production ? false : 'eval';
  return config;
};
