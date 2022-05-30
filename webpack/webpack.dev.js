const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "development",
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9000,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, 'public')
    },
  },
  watchOptions: {
    ignored: ["**/node_modules", "coverage", "build", "dist"],
    poll: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
  ],
};

module.exports = merge(common, config);
