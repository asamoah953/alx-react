const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Apply Babel loader to .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/, // CSS loader for importing styles
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      filename: 'index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve content from dist folder
    port: 3000, // Dev server port
    open: true // Opens the app in the browser automatically
  },
  mode: 'development' // Set mode to development or production
};

