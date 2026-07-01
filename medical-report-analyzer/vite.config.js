
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools' // Ye add karo

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Aur ye add karo
  ],
})