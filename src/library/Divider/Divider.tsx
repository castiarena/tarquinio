import { HTMLAttributes } from 'react';
import { divider } from './styles';
import type { DividerDirections } from './types'

export const Divider = ({ direction, ...props }: DividerProps) => <span css={divider(direction)} {...props} />


type DividerProps = HTMLAttributes<HTMLSpanElement> & {
    direction?: DividerDirections
}