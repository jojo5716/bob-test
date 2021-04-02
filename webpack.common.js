const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const JS_RULES = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: {
        test: /node_modules\/(?!(js-form-builder.*))/,
    }
};

const CSS_RULES = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } }
    ]
};

const LESS_RULES = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true,
                strictMath: true,
                noIeCompat: true,
                sourceMap: true
            }
        }
    ]
};

const SASS_RULES = {
    test: /\.(scss|sass|css)$/,
    exclude: /node_modules/,
    loaders: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[local]'
            }
        },
        'sass-loader',
    ]
};

const IMAGES_RULES = {
    test: /\.(png|gif|jpg)/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]'
        }
    }
};

const FONT_RULES = {
    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
    use: {
        loader: "file-loader",
        options: {
            limit: 50000,
            name: '[name].[ext]',
            esModule: false,
        }
    },
};


module.exports = {
    module: {
        rules: [
            JS_RULES,
            CSS_RULES,
            LESS_RULES,
            SASS_RULES,
            IMAGES_RULES,
            FONT_RULES,
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new DuplicatePackageCheckerPlugin()
    ],
    devtool: 'source-map',
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@core': path.resolve(__dirname, 'src/core/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '@views': path.resolve(__dirname, 'src/views/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            'regenerator-runtime': path.resolve(__dirname, 'node_modules/regenerator-runtime'),
        },
    },
};
