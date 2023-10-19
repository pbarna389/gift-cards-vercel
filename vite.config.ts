// https://vitejs.dev/config/
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		{
			...replace({
				'process.env.REACT_APP_API_KEY': JSON.stringify(
					process.env.REACT_APP_API_KEY
				),
			}),
			enforce: 'pre',
		},
	],
	optimizeDeps: { exclude: ['swiper/react', 'swiper/types'] },
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		reporters: ['default'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
	},
})
