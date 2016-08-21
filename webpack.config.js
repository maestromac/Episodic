var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/episodic.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  "scripts": {
    "postinstall": "./node_modules/.bin/webpack"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: [/\.css$/],
        loader:'style!css',
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: [
      'node_modules',
      'node_modules/blueimp-file-upload/js/vendor'
    ]
  },
  devtool: 'source-map'
};
