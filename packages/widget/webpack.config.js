const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  output: {
    filename: "lyket.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
  },
  devtool: "source-map",
};
