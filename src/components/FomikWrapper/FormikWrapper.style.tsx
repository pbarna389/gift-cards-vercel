import { ErrorMessage, Field, Form } from 'formik'

import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;

	@media screen and (width <= 767px) {
		align-items: center;
		width: 90%;
		gap: 0;
	}
`

export const StyledWarningButtonsWrapper = styled(Wrapper)`
	gap: 2rem;
	flex-direction: row;
`

export const StyledTextField = styled(Field)`
	display: block;
	border: none;
	border-radius: 5px;
	outline: none;
	background-color: #e2e3e5;
	font-size: 1rem;
	color: black;
	padding: 0.6rem;
	resize: none;
	margin: 1rem 0;

	@media screen and (width >= 960px) {
		flex-direction: column;
		max-width: 100%;
	}
`
export const StyledFomikModalWrapper = styled(Wrapper)`
	width: 50vh;
	height: 20vh;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	font-size: 2rem;
`

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffc107;
	border: none;
	border-radius: 5px;
	font-size: 1.25rem;
	padding: 0.6rem;
	transition: background 0.2s ease-in;
	max-width: 100%;

	&:hover {
		background: #ffd24d;
	}
`

export const StyledErrorMessage = styled(ErrorMessage)`
	text-align: center;
	user-select: none;
`
export const StyledErrorWrapper = styled.div`
	width: 100%;
	background-color: #f34f4f;
	text-align: center;
	border-radius: 1rem;
	opacity: 0.9;
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in;

	&:hover {
		opacity: 1;
	}

	@media screen and (width <= 575px) {
		width: 85%;
		height: 150px;
		border-radius: 0;
	}
`

export const StyledLabelGifts = styled.label`
	display: block;
`
export const StyledEmailInput = styled.div`
	width: 100%;
`
