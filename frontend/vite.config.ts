// vite.config.js ou vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
  server: {
    port: 3000, // Define a porta para 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // isso mapeia '@' para a pasta 'src'
    },
  },
});
