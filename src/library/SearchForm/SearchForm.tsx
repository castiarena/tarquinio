import { Button } from '../Button'
import { formWrapper, formSearchInput } from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'

export const SearchForm = ({ placeholder, query, onSubmit }: SearchFromProps) => {
	const { register, handleSubmit } = useForm<SearchFormValues>()

	return (
		<form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
			<input css={formSearchInput} {...register('query', { value: query })} placeholder={placeholder} />
			<Button kind="secondary" type="submit">
				Buscar
			</Button>
		</form>
	)
}

type SearchFromProps = {
	onSubmit: SearchFormSubmitHandler
	placeholder?: HTMLInputElement['placeholder']
	query?: string
}

export type SearchFormSubmitHandler = SubmitHandler<SearchFormValues>

type SearchFormValues = {
	query: string
}
