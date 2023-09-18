import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Fonts, ResetCSS, theme } from './config'
import { ThemeProvider } from '@emotion/react'

export const App = () => (
	<ThemeProvider theme={theme}>
		<ResetCSS />
		<Fonts />
		<RouterProvider router={router} />
	</ThemeProvider>
)
