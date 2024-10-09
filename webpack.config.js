// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   entry: './public/App.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//     ],
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     hot: true,
//     port: 3000,
//   },
// };

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  target: "node",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
