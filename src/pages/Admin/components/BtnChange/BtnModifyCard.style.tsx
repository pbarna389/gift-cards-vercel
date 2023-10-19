import { ButtonBase } from '@constants/styles'
import { styled } from 'styled-components'

export const BtnChangeStyled = styled(ButtonBase)`
	justify-content: center;
	opacity: 0.9;
	transition: 0.2s ease-in;
	margin: 1rem 0;
	max-width: 15rem;
	border-radius: 0.8rem;

	&:hover {
		opacity: 1;
		color: #fff;
		background-color: #6e6e6e;
	}

	@media screen and (width < 767px) {
		max-width: 5rem;
	}

	@media screen and (width < 565px) {
		max-width: 15rem;
	}

	@media screen and (width < 300px) {
		max-width: 6rem;
	}
`
