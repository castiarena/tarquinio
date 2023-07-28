import { Theme, css } from '@emotion/react'
import tarquinioIso from '../../assets/tarquinio.svg'

const logo = () => css`
	width: 175px;
`

const menu = () => css`
	display: flex;
	flex-direction: row;
	gap: 16px;
`

const header = ({ colors }: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 64px;
	background: ${colors.white};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const headerButton = ({ colors, fonts }: Theme) => css`
	color: ${colors.primary};
	font-weight: bold;
	font-family: ${fonts.body};
	padding: 12px 16px;
	border-radius: 12px;
	&:hover {
		background-color: ${colors.primary}09;
		cursor: pointer;
	}
`

export const Header = () => (
	<header css={header}>
		<img src={tarquinioIso} css={logo} />
		<menu css={menu}>
			<button css={headerButton}>Inicio</button>
			<button css={headerButton}>Reservas</button>
			<button css={headerButton}>Contacto</button>
			{/* Divider */}
			<button>Buscar en tarquinio</button>
		</menu>
	</header>
)
