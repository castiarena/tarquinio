import { Theme, css } from '@emotion/react'

const sharedButtonStyle = ({ fonts }: Theme) => css`
	transition: all 200ms ease-in;
	font-weight: bold;
	font-family: ${fonts.body};
	padding: 12px 16px;
	border-radius: 12px;
	&:hover {
		cursor: pointer;
	}
`

export const primary = (theme: Theme) => css`
	${sharedButtonStyle(theme)};
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	&:hover {
		background-color: ${theme.colors.primary}DD;
	}
`
export const secondary = (theme: Theme) => css`
	${sharedButtonStyle(theme)};
	background-color: ${theme.colors.orange};
	color: ${theme.colors.white};
	&:hover {
		background-color: ${theme.colors.orange}CC;
	}
`
export const link = ({ colors, fonts }: Theme) => css`
	${sharedButtonStyle({ colors, fonts })};
	color: ${colors.primary};
	&:hover {
		background-color: ${colors.primary}09;
	}
`
