/// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // or 'jsdom' if testing components
    include: ["**/__tests__/**/*.{test,spec}.ts"],
  },
});
