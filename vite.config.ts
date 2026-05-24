import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // MUST come before react()
    ...tanstackStart({
      // Redirect TanStack Start's bundled server entry to `src/server.ts`.
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
