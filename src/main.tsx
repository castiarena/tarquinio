import { createRoot } from 'react-dom/client'
import { App } from './App'
import { StrictMode } from 'react'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
