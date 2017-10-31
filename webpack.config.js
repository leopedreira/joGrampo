const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false}]
                    ]
                }

            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress:{warnings: false},
            output:{comments:false}
        })
    ]
}
