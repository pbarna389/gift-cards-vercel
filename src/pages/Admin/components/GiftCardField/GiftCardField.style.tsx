import { styled } from 'styled-components'

export const GiftCardFieldWrapper = styled.div`
	height: fit-content;
	width: inherit;
	border: 2px solid #1f1f1f;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 15px;

	@media screen and (width <= 565px) {
		border: none;
		flex-direction: column;
	}
`

export const GiftLine = styled.div`
	width: inherit;
	height: 5rem;
	font-size: 20px;
	display: flex;
	align-items: center;

	@media screen and (width <= 595px) {
		width: 100%;
		font-size: 15px;
	}

	&:first-child {
		padding-left: 1rem;
	}
`

export const GiftCardBtnWrapper = styled.div`
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
`
