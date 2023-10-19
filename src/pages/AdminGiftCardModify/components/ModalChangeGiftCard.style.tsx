import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const ModalWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	margin: auto;
	z-index: 11;
	background-color: rgb(2 2 2 / 60%);
`
export const ModalCloseButton = styled.button`
	font-size: 30px;
	margin: 2rem;
	border: none;
	background-color: transparent;
	z-index: 12;
	align-self: end;

	&:hover {
		color: #a1a1a1;
	}
`

export const ModalForm = styled.div`
	${sharedProps}
	border: 5px solid #4b4a4a;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	margin: 100px auto;
	max-width: 70%;
	min-height: 75%;
	padding-bottom: 3rem;
	justify-content: space-around;
	align-items: center;
	font-size: large;
	background-color: #000;

	@media screen and (width <= 767px) {
		padding: 1rem 0;
	}

	@media screen and (width >= 1200px) {
		width: 60%;
	}

	@media screen and (width >= 1500px) {
		max-width: 50%;
	}
`

export const ModalInputsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 5rem;
	width: 100%;

	@media screen and (width <= 767px) {
		flex-direction: column;
		gap: 0;
		width: 100%;
	}
`
export const ModalInput = styled.input`
	display: block;
	width: 15rem;
	height: 15px;
	margin-top: 1em;
	border-radius: 1rem;
	padding: 1rem;
	font-size: 20px;
`
export const ModalSelect = styled.select`
	display: block;
	width: 17rem;
	margin-top: 1em;
	height: 3rem;
	font-size: 1.25rem;
	border-radius: 1rem;
`
export const ModalSubmitButton = styled.button`
	width: 200px;
	height: 3rem;
	padding: 1rem;
	border: none;
	border-radius: 1rem;

	&:hover {
		transition: 0.15s ease-in;
		background-color: #4d4d4d;
	}
`

export const ModalFormWrapper = styled.div`
	display: flex;
	height: 800px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70px;
`
export const ModalTextArea = styled.textarea`
	display: block;
	width: 500px;
	margin-top: 1em;
	height: 150px;
	resize: none;
`
export const ModalIdTitle = styled.input`
	border: none;
	background-color: transparent;
	margin-left: 1rem;
	font-size: 18px;
`
export const ModalErrorMessage = styled.span`
	color: red;
	font-size: large;
`
export const InputWrapper = styled.div`
	width: 100%;
	height: 5rem;
`
