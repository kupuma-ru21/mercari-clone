const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main/index.tsx",
  output: {
    path: path.join(__dirname, "public/js"),
    publicPath: "/public/js",
    fileName: "bundle.js",
  },
  resoleve: {
    extensions: [".ts", ".tsx", ".js"],
    aliad: {
      "@": path.join(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: "./public",
    writeToDisk: true,
    historyApiFallback: true,
    port: 2001,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [new CleanWebpackPlugin()],
};
