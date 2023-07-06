import { useState } from 'react'
import tarquinioIso from './assets/tarquinio.svg'
import { Theme, css } from '@emotion/react'

function App() {
	return (
		<div
			css={({ color }: Theme) => css`
				background-color: ${color.primary};
			`}
		>
			<img src={tarquinioIso} />
		</div>
	)
}

export default App
