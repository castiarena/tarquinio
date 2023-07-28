import { Attributes, HTMLAttributes } from 'react'
import { primary, secondary, link } from './styles'

const DEFAULT_BUTTON_KIND: ButtonsKind = 'primary'
const buttonStyleByKind: Record<ButtonsKind, Attributes['css']> = {
    primary,
    secondary,
    link
}

export const Button = ({ kind = DEFAULT_BUTTON_KIND, ...props }: ButtonProps) => (
    <button css={buttonStyleByKind[kind]} {...props} />
)

type ButtonsKind = 'primary' | 'secondary' | 'link'
type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    kind?: ButtonsKind
}