var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/app.js',
        common: ['angular']
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