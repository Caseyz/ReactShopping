const path = require("path");
const { merge } = require("webpack-merge");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const BaseConfig = require("./webpack.base");

module.exports = merge(BaseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8080,
    compress: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../assets"),
    },
  },
  plugins: [new ReactRefreshPlugin()],
});
