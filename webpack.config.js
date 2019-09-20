// import HtmlWebpackPlugin from "html-webpack-plugin"
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: "./src/main.js",

    devServer: {
        contentBase: "./src",
        open: true
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }], "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.jpg$/,
                use: ['file-loader']
            }, {
                test: /\.png$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
}