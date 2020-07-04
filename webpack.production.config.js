/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// PATH CONSTS
const MAIN_DIR = path.resolve(__dirname, '');
const IMAGE_DIR = path.resolve(__dirname, 'assets/images');

module.exports = (env = {}) => {
    let buildPath = path.resolve(__dirname, 'dist/build');
    let distPath = path.resolve(__dirname, 'dist');

    if (env === 'mobile') {
        buildPath = path.resolve(__dirname, 'mobile/www/build');
        distPath = path.resolve(__dirname, 'mobile/www');
    }

    return {
        entry: {
            main: path.resolve(__dirname, 'src/main.js'),
            vendor: Object.keys(
                require('./package.json').dependencies
            ),
        },
        mode: 'production',
        output: {
            pathinfo: true,
            path: buildPath,
            publicPath: './build/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
        },
        plugins: [
            new Dotenv({
                path: './.env', // load this now instead of the ones in '.env'
            }),
            new webpack.DefinePlugin({
                CANVAS_RENDERER: JSON.stringify(true),
                WEBGL_RENDERER: JSON.stringify(true),
                IS_DEV: JSON.stringify(false),
                VERSION: JSON.stringify(require('./package.json').version),
                // if we have an .env file, use it, otherwise use the func argument
                'process.env.HOST': JSON.stringify(process.env.HOST || env.HOST),
            }),
            new HtmlWebpackPlugin({
                hash: true,
                minify: {
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                },
                title: 'base-phaser-cordova-project',
                favicon: `${IMAGE_DIR}/favicon.ico`,
                template: `${MAIN_DIR}/index.html`,
                filename: `${distPath}/index.html`,
                publicPath: './build',
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: 'assets',
                    to: '../assets',
                }],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    include: path.join(__dirname, 'src'),
                },
            ],
        },
        optimization: {
            splitChunks: {
                name: 'vendor',
                chunks: 'all',
            },
        },
    };
};
