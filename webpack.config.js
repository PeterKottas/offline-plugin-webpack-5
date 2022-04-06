const path = require("path");
const webpack = require("webpack");
var OfflinePlugin = require("@lcdp/offline-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target: "web",
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  entry: {
    site: "./src/entry.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new OfflinePlugin({
      caches: "all",
      appShell: "/",
      autoUpdate: 600000,
      ServiceWorker: {
        events: true,
        entry: "./src/sw.template.js",
      },
    }),
  ],
};
