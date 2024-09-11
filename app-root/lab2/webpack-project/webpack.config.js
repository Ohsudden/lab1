const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Імпорт HtmlWebpackPlugin

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html', 
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/about.html'),
      filename: 'about.html', 
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    port: 8080, 
    open: true, 
    hot: true, 
    compress: true, 
  },
};
