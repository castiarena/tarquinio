import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { compilerOptions } from './tsconfig.json'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
	server: {
		open: true,
		host: '0.0.0.0',
	},
	resolve: {
		alias: Object.keys(compilerOptions.paths).reduce((aliases, actualAlias) => {
			return {
				[actualAlias.replace('/*', '')]: path.resolve(
					__dirname,
					compilerOptions.paths[actualAlias].at(0).replace('/*', ''),
				),
				...aliases,
			}
		}, {}),
	},
})
