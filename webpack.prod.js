const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const autoprefixer = require("autoprefixer");

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
      { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', postCss, 'sass-loader'] },
    ]
  }
});
