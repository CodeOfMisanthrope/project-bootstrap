// import path from "node:path";
// import webpack from "webpack";
// import {VueLoaderPlugin} from "vue-loader";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import {lightningCssMinify} from "css-minimizer-webpack-plugin";

import path from "node:path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dirname = import.meta.dirname;

const config = {
   extends: path.resolve(dirname, "webpack.base.config.ts"),

   devtool: false,

   mode: "development",

   entry: {
      main: path.resolve(dirname, "src", "index.tsx"),
   },

   devServer: {
      historyApiFallback: true,
      // static: "vendor"
   },

   cache: {
      type: "filesystem",
      idleTimeout: 1000000000,
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /(node_modules)|(vendor)/,
            loader: "ts-loader",
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(png|svg|ico)$/i,
            type: "asset",
         },
      ],
   },

   plugins: [
      // new webpack.DllReferencePlugin({
      //   manifest: require("./vendor/main-manifest.json")
      // }),

      new HtmlWebpackPlugin({
         template: "./assets/templates/index.html",
      }),
   ],
};

export default config;
