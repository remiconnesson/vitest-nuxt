import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default {
	plugins: [
    vue(),
    AutoImport({
        imports: [
          'vue'
        ],
    }),
    Components({
      dirs: ['./components']
    }),
  ],
	test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
}
