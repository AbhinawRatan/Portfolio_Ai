import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression for production
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    }),
    // Bundle analyzer (generates stats.html)
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    // Enable minification
    minify: 'terser',
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
    // Configure terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom', 'react-router-hash-link'],
          ui: ['react-fast-marquee']
        }
      }
    },
    // Enable source maps for debugging (can be disabled for production)
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096 // Inline assets smaller than 4kb
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  // Enable compression
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
