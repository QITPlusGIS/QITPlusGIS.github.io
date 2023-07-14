import { defineConfig } from 'vite';

export default defineConfig({
    // All assets server from relative path
    base: './',
    build: {
        rollupOptions: {
          output: {
            // Remove underscore as GitHub does not like it
            entryFileNames: 'assets/js/[name]-[hash].js',
            chunkFileNames: ({name}) => {
                if (/^_/.test(name ?? '')) {
                    name = name.substring(1);
                    return `assets/js/${name}-[hash].js`;   
                } else {
                    return 'assets/js/[name]-[hash].js';
                }
            },
          },
        }
      },
    
});
