const path = require("path");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BaseConfig = require("./webpack.base");

module.exports = merge(BaseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      // compress css
      new CssMinimizerPlugin(),
      // compress js
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            // remove console.log
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          minChunks: 1,
          chunks: "initial",
          minSize: 0,
          priority: 1,
        },
        commons: {
          name: "commons",
          minChunks: 2,
          chunks: "initial",
          minSize: 0,
        },
      },
    },
  },
  plugins: [
    // copy static source
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../assets"),
          to: path.join(__dirname, "../dist"),
          filter: (source) => !source.includes("index.html"),
        },
      ],
    }),
    // extract css
    new MiniCssExtractPlugin({
      filename: "css/[name]..[contenthash:8].css",
    }),
    // gzip
    new CompressionPlugin({
      test: /.(js|css)$/,
      filename: "[path][base].gz",
      algorithm: "gzip",
    }),
  ],
});
