import { Theme, css } from '@emotion/react'
import { DividerDirections } from './types'

export const divider =
	(direction?: DividerDirections) =>
	({ colors }: Theme) => css`
		${direction === 'horizontal'
			? css`
					height: 2px;
					width: 100%;
			  `
			: css`
					width: 2px;
			  `}
		display: block;
		background-color: ${colors.primary};
	`
