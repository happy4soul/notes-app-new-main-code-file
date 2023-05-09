const path = require('path')

module.exports = {//specific to nodejs
    entry : {
        index : ['babel-polyfill', './src/index.js'],
        edit : ['babel-polyfill', './src/edit.js']
    },
    output : {
        path : path.resolve(__dirname, 'public/scripts'),//absolute path, that is the complete path starting from Users/Desktop.....
        filename : '[name]-bundle.js'
    },
    module : {//property provided by webpack that allows us to configure the js module system.
        rules : [{//we can set the rules for the modules here.
            test: /\.js$/,
            exclude: /node_modules_/,//excludes the folders/file that we want to be excluded.
            // this satement means that we are excluding all paths that contain nodemodules anywhere inside.
            use: {//an object which stores the parameters that are to be used
                loader : 'babel-loader',
                options: {//is an object where we can specify all the options we need
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        // contentBase value needs to be an absolute path that lets the dev server know where is the folder that we are trying to serve.
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}