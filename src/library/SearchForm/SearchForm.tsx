import { formWrapper } from './styles'

export const SearchForm = ({ placeholder, value, onSubmit }: SearchFromProps) => {
    <form css={formWrapper} onSubmit={onSubmit}>
        <input placeholder={placeholder} value={value} />
    </form>
}

type SearchFromProps = {
    onSubmit?: HTMLFormElement['onSubmit']
    placeholder?: HTMLInputElement['placeholder']
    value?: HTMLInputElement['value']
}