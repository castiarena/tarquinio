import { SerializedStyles } from '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string
			contrast: string
			orange: string
			blue: string
			white: string
			black: string
			gray: string
		}
		fonts: {
			body: string
			title: string
		}
	}
}

import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
	export type Theme = LibTheme
}

declare module 'react' {
	interface Attributes {
		css?: SerializedStyles | ((theme: Theme) => SerializedStyles)
	}
}
