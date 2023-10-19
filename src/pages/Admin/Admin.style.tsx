import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const WrapperGiftsAdmin = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 5rem 0;
	${sharedProps}

	@media screen and (width <= 565px) {
		width: 100%;
		margin: 2rem 0;
		gap: 3rem;
		align-items: center;
	}
`
export const CardWrapper = styled.div`
	display: flex;
	border: 3px solid #474747;
	width: 70%;
	flex-direction: column;
`
export const TypeOfLineCard = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 15px;
	flex-direction: column;
`

export const BtnsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	text-align: center;
	gap: 5rem;

	@media screen and (width < 850px) {
		gap: 2rem;
	}
`
