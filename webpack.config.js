const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")    
const HtmlWebpackPlugin = require("html-webpack-plugin")       //新的html
const {CleanWebpackPlugin} = require("clean-webpack-plugin") //删除
const webpack = require("webpack")//热替换
module.exports = {
    //development  或者 production   
    mode :"development",    //不压缩
    // mode:"development",
    devtool:"cheap-module-evel-source-map", //报错
    //入口文件
    entry : {
       main : path.join(__dirname,"./src/index.js")
    },
    //出口文件
    output :{
        filename : "bundle.js",
        path : path.join(__dirname,"dist")
    },
    //配置 
    module:{
        rules:[{
            test:/\.vue$/,
            use:[
                "vue-loader"
            ]
        },
        {
            test : /\.css$/,
            use:[
                "style-loader",
                "css-loader"
            ]
        },
        {
            test : /\.(jpg|png|jpeg|gif|svg)$/,
            use:[
                {
                    loader:"url-loader",  //解析图片
                    options:{
                        limit : 1024
                    }
                }
            ]
        },
        {
            test : /\.styl(us)?$/,
            use:[
                "vue-style-loader",
                "css-loader",
                "stylus-loader"
            ]
        }
    ]
    },
    //服务
    devServer:{
        contentBase : path.join(__dirname,"dist"),
        hot : true//热替换
    },
    //实例化插件
    plugins:[
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),  //热替换
        //生成新的html文件
        new HtmlWebpackPlugin({          
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin()   //删除
    ]
}