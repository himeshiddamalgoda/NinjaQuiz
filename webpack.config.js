const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry:'/src/index.js',
    output:{
        path:path.resolve(__dirname,'dist/assets'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        host: 'localhost', 
        port: 3000
        
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }]
    }
    
};