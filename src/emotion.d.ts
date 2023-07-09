import '@emotion/react'

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

// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { SerializedStyles } from '@emotion/react'
import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
	export interface Theme extends LibTheme {}
}

declare module 'react' {
	interface Attributes {
		css?: SerializedStyles | ((theme: Theme) => SerializedStyles)
	}
}
