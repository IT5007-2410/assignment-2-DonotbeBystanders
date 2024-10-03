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
  mode: "development", // 或者 'production'
  entry: "./src/index.jsx", // 入口文件
  target: "node", // 指定为 Node.js 环境
  output: {
    filename: "App.js", // 输出文件名
    path: path.resolve(__dirname, "public"), // 输出目录
  },
  module: {
    rules: [
      // 如果使用 TypeScript，增加以下规则
      {
        test: /\.jsx?$/, // 匹配 .js 或 .jsx 文件
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
    extensions: [".js", ".ts"], // 解析的文件扩展名
  },
};
