<<<<<<< HEAD
const path = require("path");
const { platform } = require("process");
const { Template } = require("webpack");

module.exports = {
  mode: 'production',
=======
const path = require('path')
const { platform } = require('process')
const { Template } = require('webpack')

module.exports = {
  mode: "development",
>>>>>>> 3f89da8275cdf2f0c3259ac21cc4d36f42cc0e19
  entry: "./components/src/auth.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
<<<<<<< HEAD
  watch: true
};
=======
  watch: true
};
>>>>>>> 3f89da8275cdf2f0c3259ac21cc4d36f42cc0e19
