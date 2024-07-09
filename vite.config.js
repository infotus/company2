// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  base: process.env.GITHUB_PAGES  
  ? "company2"            
  : "./", 
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})