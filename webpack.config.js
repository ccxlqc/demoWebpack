var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var Uglify = require('uglifyjs-webpack-plugin')
var Minify = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js', // 对应的是entry入口下的 main
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        port: 9999
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: ['style-loader', 'css-loader'] // 从后往前解析
                loader: [Minify.loader, 'css-loader']
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         // 单独抽离的HTML文件进行配置
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'index.html'
            //             }
            //         },
            //         // 单独抽离HTML
            //         {
            //             loader: 'extract-loader'
            //         },
            //         // 找到html文件
            //         {
            //             loader: 'html-loader'
            //         }
            //     ]
            // },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "img/[name].[hash:8].[ext]" // 打包时输出的路径及名称
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'title',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new Uglify(),
        new Minify({
            filename: '[name]_[contenthash:8].css'
        })
    ]
}