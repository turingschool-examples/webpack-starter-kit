const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  // CSS and file (image) loaders
  module: {
    rules: [
      {
        test: /\.(css|ttf)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                }
              }
            ]
      }
      // !! ATTEMPT AT INSTALLING FONTS
      // {
      //   test: /\.(woff|woff2|otf|ttf)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 4096,
      //     name: './fonts/[name].[ext]?[hash]' // was '/fonts/[name].[ext]?[hash]',
      //   }
      // }
    ],
  },
  // Below is needed for webpack-dev-server
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
 		contentBase: './dist'
  }
};
