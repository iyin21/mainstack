import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
  },
// })
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./src/test/setup.ts'],
//   },
  resolve: {
    alias: [
        { find: "@assets", replacement: "/src/assets" },
        { find: "@components", replacement: "/src/components" },
        { find: "@pages", replacement: "/src/pages" },
        { find: "@types", replacement: "/src/types" },
        { find: "@utils", replacement: "/src/utils" },
        { find: "@hooks", replacement: "/src/hooks" },
        { find: "@contexts", replacement: "/src/contexts" },
        { find: "@services", replacement: "/src/services" },
    ],
}

})
