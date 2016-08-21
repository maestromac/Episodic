var path = require('path');
var webpack = require('webpack');

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
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
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
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: [
      'node_modules',
      'node_modules/blueimp-file-upload/js/vendor'
    ]
  }
};
