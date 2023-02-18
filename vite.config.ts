import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import path from "path"
import react from "@vitejs/plugin-react-swc"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        outDir: "build",
        lib: {
            // путь к основному файлу библиотеки
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            // название библиотеки
            name: "ReactTSLib",
            // форматы генерируемых файлов
            formats: ["es", "umd"],
            // названия генерируемых файлов
            fileName: (format) => `react-ts-lib.${format}.js`,
        },
        // https://vitejs.dev/config/build-options.html#build-rollupoptions
        rollupOptions: {
            external: ["react", "react-dom", "styled-components"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled",
                },
            },
        },
    },
})
