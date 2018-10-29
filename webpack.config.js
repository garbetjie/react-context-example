// Load in environment variables.
require('dotenv-expand')(require('dotenv').config());

// Load in libraries.
const Path = require('path');
const OS = require('os');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Create plugin instances.
const extractSassPluginInstance = new ExtractTextPlugin('css/playout-[contenthash].css');

module.exports = {

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            tencent: Path.resolve(__dirname, './src/util/index.js')
        }
    },

    entry: {
        main: [
            './src/index.jsx',
        ]
    },
    devtool: "eval-source-map",
    output: {
        path: Path.resolve(__dirname, 'public'),
        filename: 'js/[name]-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: Path.join(process.env['HOME'], '.cache', 'babel-loader'),
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSassPluginInstance.extract(['css-loader', 'sass-loader', 'postcss-loader'])
            },
            {
                test: /\.(ttf|eot|woff)$/,
                use: ['file-loader?name=fonts/[name].[ext]']
            },
            {
                test: /\.handlebars$/,
                use: ['handlebars-loader'],
            },
            {
                test: /\.(a?png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/dist/[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        // Extract the CSS/SASS/SCSS into separate files (non-JS files).
        extractSassPluginInstance,

        // Ensure the main index.html file is generated from a template file.
        new HtmlWebpackPlugin({
            newRelic: {
                enabled: (process.env.NEW_RELIC_ENABLED || '').toLowerCase() === 'true',
                licenceKey: process.env.NEW_RELIC_LICENCE_KEY,
                applicationId: process.env.NEW_RELIC_APPLICATION_ID,
            },
            template: './index.handlebars'
        })
    ]
};

// Only apply these in production.
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({ sourceMap: true })
    );
}