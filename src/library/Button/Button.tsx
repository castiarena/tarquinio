import { Attributes, ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { primary, secondary, link } from './styles'

const DEFAULT_BUTTON_KIND: ButtonsKind = 'primary'
const buttonStyleByKind: Record<ButtonsKind, Attributes['css']> = {
    primary,
    secondary,
    link
}

export const Button: FC<ButtonProps> = ({ kind = DEFAULT_BUTTON_KIND, ...props }) => (
    <button css={buttonStyleByKind[kind]} {...props} />
)

type ButtonsKind = 'primary' | 'secondary' | 'link'
type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        kind?: ButtonsKind
    }
>