import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", './lib/index.js'),
            name: 'react-dialog',
            fileName: (format) => `react-dialog.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
    plugins: [react()]
})