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
var autoprefixer = require('autoprefixer')

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
            loader: 'url?limit=8192&context=public&name=[path][name].[ext]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        ],
        resolve: {
              extensions: ['', '.js', '.jsx', '.css']
          }
    },
    postcss: function() {
        return [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ]
          }),
        ];
   },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;