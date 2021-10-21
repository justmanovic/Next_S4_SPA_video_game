const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      {
        // Pour le SASS :
        test: /\.(sa|sc|c)ss$/, // On applique notre règle aux fichiers .sass, .scss et .cs
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          { loader: 'css-loader', },
          { loader: 'postcss-loader', },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  // plugins:
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  mode: 'production',
};

