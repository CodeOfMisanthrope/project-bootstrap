import path from "node:path";
import esbuild from 'esbuild';

const
  dirname = import.meta.dirname;

// undefined
console.log(dirname);

esbuild.build({
  entryPoints: ['src/index.ts'],
  // entryPoints: ['packages/server/src/index.ts'],
  bundle: true,
  metafile: true,
  outdir: '.esbuild/prod',
  minify: false,
  write: true,
  tsconfig: "tsconfig.json",
  logLevel: "info",
  platform: "node",
  treeShaking: false,
  alias: {
    "~api": path.resolve(dirname, "src", "api"),
    "~constants": path.resolve(dirname, "src", "constants"),
    "~dtos": path.resolve(dirname, "src", "dtos"),
    "~assets": path.resolve(dirname, "assets"),
  },
});
