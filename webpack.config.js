var path = require('path');

module.exports = {
  node: {
     fs: "empty"
  },
  entry: {

  webbundle: './public/threejs/orbitexample.js'
},
  output: {

    path: path.resolve(__dirname, 'public/bundled'),
    filename: '[name].js'
  },
  module:{

rules: [
  {
           test: /\.(png|svg|jpg|gif)$/,
           use: [
             {
               loader: 'file-loader'
             }
           ]
         },
  {
         test: /\.scss$/,
         use: [{
           loader: 'style-loader'
         }, {
           loader: 'css-loader'
         },
         {
           loader: 'sass-loader'
         }]
       },
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }

      ]
    }
};
