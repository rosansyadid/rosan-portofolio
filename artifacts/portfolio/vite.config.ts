import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ============================================================================
// ENVIRONMENT VARIABLES WITH DEFAULTS
// ============================================================================

const port = Number(process.env.PORT || "5173");
const basePath = process.env.BASE_PATH || "/";

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${process.env.PORT}"`);
}

// ============================================================================
// REPLIT PLUGINS CONFIGURATION
// ============================================================================

const replitPlugins =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
        ),
        await import("@replit/vite-plugin-dev-banner").then((m) =>
          m.devBanner(),
        ),
      ]
    : [];

// ============================================================================
// VITE CONFIGURATION
// ============================================================================

export default defineConfig({
  base: basePath,

  // ========================================
  // PLUGINS
  // ========================================
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...replitPlugins,
  ],

  // ========================================
  // MODULE RESOLUTION
  // ========================================
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  // ========================================
  // PROJECT ROOT
  // ========================================
  root: path.resolve(import.meta.dirname),

  // ========================================
  // BUILD CONFIGURATION
  // ========================================
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  // ========================================
  // DEV SERVER CONFIGURATION
  // ========================================
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    open: true,
    fs: {
      strict: true,
    },
  },

  // ========================================
  // PREVIEW SERVER CONFIGURATION
  // ========================================
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
