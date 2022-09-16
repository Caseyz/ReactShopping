const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProdConfig = require('./webpack.prod');
const { merge } = require('webpack-merge');

const speedMeasurePlugin = new SpeedMeasurePlugin();

module.exports = speedMeasurePlugin.wrap(
  merge(ProdConfig, {
    plugins: [new BundleAnalyzerPlugin()]
  })
);
