const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

const ajax_mocks = require('./mocks/devserver/');

const ENTRY_POINTS = {
    index: ['./src/index.js'],
    publicIndex: ['./server/public/js/index.js'],
};

// Output config
const OUTPUT_CONFIG = {
    // A filename pattern for the output files
    filename: '[name].js',
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'server/public/dist/'),
    publicPath: '/static/dist/'
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
        before: ajax_mocks,
        historyApiFallback: true,  // To response for any path in the url
        writeToDisk: true,
    },
    devtool: 'source-map'
});