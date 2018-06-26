const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
// 定义webpack loader
module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
        }
    },
    {
        test: /\.(scss|css)$/,
        use: isProd ?
            ExtractTextPlugin.extract({
                use: ['css-loader?minimize','sass-loader'],
                fallback: 'vue-style-loader'
            }) :
            ['vue-style-loader', 'css-loader', 'sass-loader']
    }
]



























