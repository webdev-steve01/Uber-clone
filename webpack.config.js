
const path = require("path");
const { platform } = require("process");
const { Template } = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./components/src/auth.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true
};
