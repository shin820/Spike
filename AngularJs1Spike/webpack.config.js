var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/app.js',
        vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })
    ]
}