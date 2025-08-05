import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
     alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@data": "/data",
      "@CategoryPhone": "/src/assets/CategoryPhone",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});

 