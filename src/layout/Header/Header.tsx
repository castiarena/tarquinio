import tarquinioIso from '@assets/tarquinio.svg'
import { Button, Divider, SearchForm } from '@library'
import type { SearchFormSubmitHandler } from '@library'
import { header, logo, menu } from './styles'

export const Header = () => {
	const handleSubmit: SearchFormSubmitHandler = (event) => {
		console.log(event)
	}

	return (
		<header css={header}>
			<img src={tarquinioIso} css={logo} />
			<menu css={menu}>
				<Button kind="link">Inicio</Button>
				<Button kind="link">Reservas</Button>
				<Button kind="link">Contacto</Button>
				<Divider direction="vertical" />
				<SearchForm placeholder="Buscar en tarquinio" onSubmit={handleSubmit} />
			</menu>
		</header>
	)
}
