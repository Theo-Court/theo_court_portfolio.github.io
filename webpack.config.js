const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: process.env.PUBLIC_URL || '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL)
    })
  ]
};
