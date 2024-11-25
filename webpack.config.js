const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for your app
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'main.js', // Bundled output file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean `dist` folder before each build
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use these loaders for CSS
      },
    ],
  },

  // Plugins to extend functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use `template.html` as a base
    }),
  ],

  // Development mode
  mode: 'development', // Use 'production' for production builds

  // Optional: Development server configuration
  devServer: {
    static: './dist', // Serve files from the `dist` directory
    open: true, // Automatically open in the browser
    hot: true, // Enable hot reloading
  },
};
