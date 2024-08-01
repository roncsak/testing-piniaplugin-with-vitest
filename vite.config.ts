/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import vue from '@vitejs/plugin-vue';
import { transformAssetUrls } from 'vite-plugin-vuetify'
import { coverageConfigDefaults } from 'vitest/config';

// Utilities
import { defineConfig } from 'vite';
// import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {},
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
  ],
  define: {
    'process.env': {},
    'import.meta.vitest': undefined,
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  //   extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  // },
  server: {
    // host: '127.0.0.1',
    port: 3000,
  },
  test: {
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    globals: true,
  },
});
