var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//require('es6-promise').polyfill()  //posble fix for 'Promise is not defined' in node 0.10.26


module.exports = {
	entry: {
        js: './assets/js/App.jsx',
        css: './assets/styles/importer.scss'
    },
    output: {
        filename: "./public/js/bundle.js"
    },
    devtool: 'source-map', //generate source-maps
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'] // allow to import .jsx into components
    },
    module:{
        loaders: [
            //REACT
            {
                test: /\.jsx?$/,  // look for .jsx and js files
                loader: 'babel', // convert to es5
                exclude: /(node_modules|server.js)/,
                query: {
                    presets: ['es2015', 'stage-0', 'react'] // support for es6|es7|react
                }
            },

            // SASS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },


    plugins: [
        new ExtractTextPlugin('./public/css/bundle.css', {
            allChunks: true
        })
        // # fro production
        //new webpack.optimize.UglifyJsPlugin({
        //    mangle: false,
        //    minimize: true
        //})
    ]
};