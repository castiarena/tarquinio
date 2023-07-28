import { Link } from 'react-router-dom'
import tarquinioIso from '../../assets/tarquinio.svg'
import { header, headerButton, logo, menu } from './styles'

export const Header = () => (
    <header css={header}>
        <img src={tarquinioIso} css={logo} />
        <menu css={menu}>
            <Link to="/" css={headerButton}>Inicio</Link>
            <Link to="/reserve" css={headerButton}>Reservas</Link>
            <Link to="/contact" css={headerButton}>Contacto</Link>
            {/* Divider */}
            <button>Buscar en tarquinio</button>
        </menu>
    </header>
)
