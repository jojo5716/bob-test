const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

const ENTRY_POINTS = {
    index: ['./example/index.js'],
};

// Output config
const OUTPUT_CONFIG = {
    // A filename pattern for the output files
    filename: '[name].js',
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'example/dist/'),
    publicPath: '/__dist__/'
};

const PLUGINS = [
    new DashboardPlugin(),
];

module.exports = merge(common, {
    mode: 'development',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: PLUGINS,
    devServer: {
        contentBase: './example',
        port: 8080,
        historyApiFallback: true,  // To response for any path in the url
        writeToDisk: true,
    },
    devtool: 'source-map'
});