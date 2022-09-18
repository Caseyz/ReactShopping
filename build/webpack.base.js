'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const isEnv = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: path.join(__dirname, '../dist'),
    clean: true
    // publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')],
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        include: [path.resolve(__dirname, '../src')],
        use: [isEnv ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /.less$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          isEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)/, // image
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'assets/imgs/[name].[contenthash:6].[ext]'
        }
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // font
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/fonts/[name].[contenthash:6].[ext]'
        }
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // media
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/media/[name].[contenthash:6].[ext]'
        }
      },
      // chakra version error
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, '../src')
    },
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../assets/index.html'),
      inject: true
    }),
    // inject env variate
    new DefinePlugin({
      'process.env.INTER_ENV': JSON.stringify(process.env.INTER_ENV)
    })
  ]
};
