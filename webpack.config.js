const path = require('path');

module.exports = {
  "mode": "none",
  "entry": "./src/scripts.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        test: /\.(css|scss)$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
        ]
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
    ]
  }
};
