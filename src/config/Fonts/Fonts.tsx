import '@fontsource-variable/baloo-bhai-2'
import '@fontsource/open-sans'

import { Global, css } from '@emotion/react'

export const Fonts = () => (
	<Global
		styles={({ fonts }) => css`
			body {
				font-family: ${fonts.body};
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: ${fonts.title};
			}
		`}
	/>
)
