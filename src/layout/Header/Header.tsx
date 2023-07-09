import { css } from '@emotion/react'
import tarquinioIso from '../../assets/tarquinio.svg'

const logo = () => css`
    width: 40px;
`

const header = () => css`
    display: flex;
    align-items: center;
`

export const Header = () => {
    return <header css={header}>
        <img src={tarquinioIso} css={logo} />
        <h1>Tarquinio</h1>
    </header>
}