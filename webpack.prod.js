const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ExtractCssLoader = {
  loader: MiniCssExtractPlugin.loader,
};

const postCss = {
  loader: "postcss-loader",
  options: {
    autoprefixer: {
      browsers: ["last 2 versions"]
    },
    plugins: () => [autoprefixer]
  }
};

module.exports = merge(common, {
  mode: "production",

  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, use: [ExtractCssLoader, 'css-loader', postCss, 'sass-loader'] },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename:'styles.css' }),
  ]
});
