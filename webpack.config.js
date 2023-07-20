const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: {
    main: "./index.tsx",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    process.env.NODE_ENV === "production"
      ? ""
      : new ESLintPlugin({
          extensions: [".tsx", ".ts"],
        }),
  ],
  module: {
    rules: [
      {
        test: [/\.scss$/i],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        type: "asset/resource",

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      App: path.resolve(__dirname, "App/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Components: path.resolve(__dirname, "src/components"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
