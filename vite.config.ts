import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served as a GitHub Pages project site at /shevtech/ — base must match the
// repo name so built asset URLs resolve under that subpath.
export default defineConfig({
  base: '/shevtech/',
  plugins: [react()],
});
