const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const imgLoader = {
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'img/',
    publicPath: 'img/'
  }
};

const imgOptimize = {
  loader: "image-webpack-loader",
  options: {
    mozjpeg: {
      progressive: true,
      quality: 65
    },
    optipng: {
      enabled: true
    },
    pngquant: {
      quality: "65-90",
      speed: 4
    },
    gifsicle: {
      interlanced: false
    },
  }
};

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.pug$/, use: ['html-loader', 'pug-html-loader'] },
      { test: /\.(gif|png|jpe?g|svg)$/i, use: [imgLoader, imgOptimize] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({ template: 'src/templates/index.pug', filename: 'index.html' }),
  ]

};
