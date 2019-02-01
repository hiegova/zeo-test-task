const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
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

const ExtractCssLoader = {
  loader: MiniCssExtractPlugin.loader,
};

const HtmlBeautify = new HtmlBeautifyPlugin({
  config: {
      html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: false,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ['i', 'b', 'span']
      }
  },
  replace: [ ' type="text/javascript"' ]
});

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, use: [ExtractCssLoader, 'css-loader', postCss, 'sass-loader'] },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename:'styles.css' }),
    HtmlBeautify,
  ]
});
