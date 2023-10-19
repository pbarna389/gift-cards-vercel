import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const SearchInput = styled.input`
	${sharedProps}
	margin: 0.5rem 0;
	padding: 0.6rem;
	color: #adb5bd;
	font-size: 1rem;
	background-color: #212529;
	border: 1px solid #adb5bd;
	border-radius: 5px;
	transition: border-color 0.3s ease-in;
	outline: none;
	z-index: 11;

	&:focus {
		border-color: #86b7fe;
	}
`
