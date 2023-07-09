import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme, ResetCSS, Fonts } from './config'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<Fonts />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
)
