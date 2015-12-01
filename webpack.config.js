var path = require('path');

module.exports = {
    entry: [
        './src/bootstrap.jsx',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                loader: "style!css!less",
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './src'
    }
};
