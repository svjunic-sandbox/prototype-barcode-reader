console.log(process.env.NODE_ENV);

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DOCUMENT_ROOT = '../../docs/';

module.exports = function() {
  const entries = {
    'zxing/js/index': path.join(__dirname, './resources/index.js')
  };

  const watchOptions = {
    poll: 1000
  };

  const output = {
    path: path.join(__dirname, DOCUMENT_ROOT),
    filename: '[name].js'
    //jsonpFunction: 'svjunic'
  };

  let optimization = {
    splitChunks: {
      name: 'zxing/js/vendor',
      chunks: 'initial'
    }
  };

  if (process.env.NODE_ENV === 'production') {
    optimization = Object.assign(optimization, {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true
            }
          }
        })
      ]
    });
  }

  const resolve = {
    modules: [path.resolve(__dirname, 'resources'), 'node_modules']
  };

  const baseConfig = {
    target: 'web',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },

    plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.optimize.AggressiveMergingPlugin()]
  };

  return [
    Object.assign(
      {
        mode: 'production',
        watchOptions: watchOptions,
        entry: entries,
        resolve: resolve,
        output: output,
        optimization: optimization
      },
      baseConfig
    )
  ];
};
