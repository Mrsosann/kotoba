// var path = require('path');

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        page1: ['./client/index', hotMiddlewareScript],
    },
    output: {
        filename: './dist/bundle.js',
        path: path.resolve('./public'),
        publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }]
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;