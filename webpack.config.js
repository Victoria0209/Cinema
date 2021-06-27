const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.js',
        single: './src/main_single-film.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.(png|jpe?g|svg|ttf|eot|woff)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                    }
                }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CopyPlugin({
            patterns:[
                {from:'src/assets/img', to: 'img'},
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'single/index.html',
            template: "src/single.html",
            chunks: ['single']
        }),
        // new webpack.ProvidePlugin({
        //     //   $: 'jquery',
        //     //   'window.JQuery': 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        // })
    ]

};