WebpackErrorNotificationPlugin = require('webpack-error-notification')
webpack = require('webpack')

function makeConfig() {
  return {
    entry: {
      index: ['./source/index.js']
    },
    target: 'node',
    output: {
      path: './lib',
      filename: '[name].dist.js',
      publicPath: '/lib/',
      libraryTarget: 'commonjs2'
    },
    externals: [
      // all none-relative paths are external
      /^[a-z\-0-9]+/
    ],

    resolve: {
      extensions: ['', '.js', '.json']
    },

    devtool: 'source-map',
    module: {
      loaders: [
          {test: /\.json$/, loader: 'json'},
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules)/,
            query: {
              presets: ['stage-1'],
              plugins: ['transform-es2015-modules-commonjs']
            }
          }

        ]
      },
    plugins: [
      (new webpack.NoErrorsPlugin()),
      (new WebpackErrorNotificationPlugin())
      ]
    }
}

module.exports = makeConfig();
