const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 배포시 production
    devtool: 'eval', // 배포시 hidden-source-map
    resolve: {
        extensions: ['.jsx','.js','.tsx','.ts'],
    },
    entry: {
        app: './client'
    },
    module: {
        rules:[{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader', 
        }]
    },
    plugins: [
        
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
}