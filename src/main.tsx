import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from '@emotion/react'
import { theme, ResetCSS, Fonts } from './config'


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<Fonts />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
)
