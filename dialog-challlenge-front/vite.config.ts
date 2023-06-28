import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

const manifestForPlugin: Partial<VitePWAOptions> = {
  // add this to cache all the imports
  workbox: {
    globPatterns: ['**/*.{js,css,html,ts,tsx,json,png,svg,ico,jpg,jpeg}'],
  },
  // add this to cache all the
  // static assets in the public folder
  includeAssets: ['**/*'],
  base: '/',
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: 'MySocial - A Social Media App',
    short_name: 'MySocial',
    start_url: '/',
    description: 'A Social Media App',
    background_color: '#011528',
    theme_color: '#011528',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: 'icon_16x16.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: 'icon_32x32.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: 'icon_48x48.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: 'icon_64x64.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
      {
        src: 'icon_128x128.ico',
        sizes: '128x128',
        type: 'image/x-icon',
      },
      {
        src: 'icon_180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    port: 3000,
  },
});
