import path from "node:path";

const dirname = import.meta.dirname;

const config = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],

    alias: {
      "~api": path.resolve(dirname, "src", "api"),
      "~components": path.resolve(dirname, "src", "components"),
      "~const": path.resolve(dirname, "src", "const"),
      "~core": path.resolve(dirname, "src", "core"),
      "~dtos": path.resolve(dirname, "src", "dtos"),
      "~lib": path.resolve(dirname, "src", "lib"),
      "~main": path.resolve(dirname, "src", "main"),
      "~mixins": path.resolve(dirname, "src", "mixins"),
      "~utils": path.resolve(dirname, "src", "utils"),
      "~views": path.resolve(dirname, "src", "views"),
      "~pages": path.resolve(dirname, "src", "pages"),
      "~layouts": path.resolve(dirname, "src", "layouts"),
      "~assets": path.resolve(dirname, "assets"),
      "~store": path.resolve(dirname, "src", "store"),
      "~preload": path.resolve(dirname, "src", "preload"),
      "~router": path.resolve(dirname, "src", "router"),
    },

    // modules: [path.resolve(dirname, "..", "..", "node_modules")],
  },
};

export default config;
