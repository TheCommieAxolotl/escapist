import { terser } from "rollup-plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig({
    input: "src/index.js",
    output: {
        file: "out/index.js",
        format: "iife",
        name: "escapist",
        plugins: [terser()],
    },
});
