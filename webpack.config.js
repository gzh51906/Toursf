// import HtmlWebpackPlugin from "html-webpack-plugin"
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    entry: "./src/main.js",

    mode: "development",

    /* 出口 */
    output: {
        path: __dirname + "/dist",
        filename: "bundle-[name]-[hash:5].js"
    },

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
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
            test: /\.(jpg|png|svg)$/,
            include: path.resolve(__dirname, './assets'),
            use: {
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin()
    ]
}