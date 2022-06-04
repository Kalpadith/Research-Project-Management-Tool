const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath: "/"
    },

    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@core': path.resolve(__dirname, 'src/@core/')
        },
        extensions: [".js", ".jsx", ".json", ".ts", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ]

};
