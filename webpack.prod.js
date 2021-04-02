const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const common = require('./webpack.common.js');

const ENTRY_POINTS = {
    index: ['./example/index.js'],
};

const OUTPUT_CONFIG = {
    path: path.resolve(__dirname, 'server/public/dist/'),
    filename: '[name].js',
    library: 'BobTest',
    libraryTarget: 'umd'
};

const OPTIMIZATION = {
    splitChunks: {
        minSize: 30000,
        maxInitialRequests: 50,
        maxAsyncRequests: 50,
        minChunks: 1,
    },
    minimize: true,
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
                output: {
                    comments: false
                },
            },
        })
    ]
};

module.exports = merge(common, {
    mode: 'production',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: [
        new webpack.DefinePlugin({
            // removes a lot of debugging code in React
            'process.env': {
                BROWSER: true,
                VERSION: JSON.stringify(packageJSON.version)
            }
        }),
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/,
            /en|es/
        ),
        new webpack.optimize.AggressiveMergingPlugin(),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    optimization: OPTIMIZATION,
});
