import tarquinioIso from '@assets/tarquinio.svg'
import { Button, Divider } from '@library'
import { header, logo, menu } from './styles'

export const Header = () => (
    <header css={header}>
        <img src={tarquinioIso} css={logo} />
        <menu css={menu}>
            <Button kind="link">Inicio</Button>
            <Button kind="link">Reservas</Button>
            <Button kind="link">Contacto</Button>
            <Divider direction="vertical" />
            <button>Buscar en tarquinio</button>
        </menu>
    </header>
)
