import type { Configuration } from "@rspack/cli";
import path from "node:path";

export default {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  builtins: {
    html: [
      {
        template: "./src/index.html",
        scriptLoading: "module",
      },
    ],
  },
} satisfies Configuration;

// @todo how to configure rspack to force app to use preact/compat via esm.sh?
