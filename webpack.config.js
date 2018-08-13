const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].chunk.js"
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.jpg$/,
            use: [
                {
                    loader: "url-loader", 
                    options: {limit: 10000}
                }
            ]
        }
    ]
  }
}
