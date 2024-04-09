// modules
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

// overwrite configs
export default defineConfig({
  plugins: [dts({ include: ['src/*.ts'] })],
  build: {
    minify: false,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'XPathParser',
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
  },
});
