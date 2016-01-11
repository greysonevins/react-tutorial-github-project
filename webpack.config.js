module.exports = {
    entry: './app/App.js',
    output: {
        path: './public/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

