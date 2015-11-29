var path = require('path');

module.exports = {
    entry: [
        './src/app.jsx',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: './src'
    }
};
