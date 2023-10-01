import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // ...
  //       Features: './src/component/Features.jsx', // Adjust the path accordingly
  //     },
  //   },
  // },
})
