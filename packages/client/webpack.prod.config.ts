import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";

const dirname = import.meta.dirname;

const config = {
  extends: path.resolve(dirname, "webpack.base.config.ts"),

  devtool: false,

  mode: "production",

  entry: {
    main: path.resolve(dirname, "src", "index.tsx")
  },

  output: {
    path: path.resolve(dirname, "dist"),
    assetModuleFilename: "[hash][ext]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          // loader: 'ts-loader',
          // options: {
          // 	transpileOnly: true,
          // },
          loader: "swc-loader",
          options: {
            configFile: path.resolve(dirname, "swc.config.json"),
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        type: "asset"
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/templates/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: "all",
        parallel: false,
        minify: TerserPlugin.swcMinify,
      }),
      // new CssMinimizerPlugin({
      //   minify: CssMinimizerPlugin.lightningCssMinify,
      // }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        "react": {
          test: /[/\\]node_modules[/\\]react[/\\]/,
          filename: "react.[contenthash].js",
        },
        "react-dom": {
          test: /[/\\]node_modules[/\\]react-dom[/\\]/,
          filename: "react-dom.[contenthash].js",
        },
        "react-router": {
          test: /[/\\]node_modules[/\\]react-router[/\\]/,
          filename: "react-router.[contenthash].js",
        }
      }
    }
  }
};

export default config;
