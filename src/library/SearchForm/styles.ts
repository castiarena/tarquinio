import { Theme, css } from '@emotion/react'

export const formWrapper = ({ colors }: Theme) => css`
	display: flex;
	background-color: ${colors.primary};
	padding: 8px;
    gap: 8px;
	border-radius: 12px;
`

export const formSearchInput = ({ colors }: Theme) => css`
	border-radius: 12px;
	background-color: ${colors.white};
	padding: 8px 12px;
	&:focus {
		outline: 0;
		box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
	}
`
