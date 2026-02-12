import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'maplibre-gl-layer-control-tidop/style.css': resolve(__dirname, '../../dist/maplibre-gl-layer-control-tidop.css'),
      'maplibre-gl-layer-control-tidop': resolve(__dirname, '../../dist/index.mjs'),
    }
  }
});
