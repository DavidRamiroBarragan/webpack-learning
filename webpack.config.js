const { mode }                  = require('webpack-nano/argv')
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')
const {WebpackPluginServe} = require("webpack-plugin-serve")

module.exports = {
  watchOptions: {
    aggregateTimeout: 300, //Delay the first rebuilt (in ms)
    poll: 1000, //poll using in interval (in ms or a boolean)
    ignored: /node_modules/, // Ignore to decrease CPU usage
  },
  watch:mode === "development",
  entry: ["./src", "webpack-plugin-serve/client"],
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: 'Demo' } }),
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
    })
  ]
}