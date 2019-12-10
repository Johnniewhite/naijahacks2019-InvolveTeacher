const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: "css-loader",
              options: {
              
              }
            },

            {
              loader: "sass-loader",
              options: {
            
              }
            }
          ]
        })
      }
    ]
  },
   devtool: isProduction ? "source-map" : "inline-source-map",
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    CSSExtract,
    new HtmlWebpackPlugin({
        template: 'public/index.html'
     })
  ]
  }
}
