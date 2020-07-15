/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packageJson = require('./package.json');

// PATHS
const MAIN_DIR = path.resolve(__dirname, '');
const IMAGE_DIR = path.resolve(__dirname, 'assets/images');
let BUILD_PATH = path.resolve(__dirname, 'dist/build');
let DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = (env = {}) => {
    if (env === 'mobile') {
        BUILD_PATH = path.resolve(__dirname, 'mobile/www/build');
        DIST_PATH = path.resolve(__dirname, 'mobile/www');
    }

    return {
        entry: {
            main: path.resolve(__dirname, 'src/main.js'),
            vendor: Object.keys(
                packageJson.dependencies
            ),
        },
        mode: 'production',
        output: {
            pathinfo: true,
            path: BUILD_PATH,
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
                IS_DEV: JSON.stringify(true),
                VERSION: JSON.stringify(packageJson.version),
            }),
            new HtmlWebpackPlugin({
                hash: true,
                title: 'base-phaser-cordova-project',
                favicon: `${IMAGE_DIR}/favicon.ico`,
                template: `${MAIN_DIR}/index.html`,
                filename: `${DIST_PATH}/index.html`,
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
