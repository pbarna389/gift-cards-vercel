import { sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const GiftCoinWrapper = styled(Wrapper)`
	${sharedProps}
`

export const GiftCoinH2 = styled.h2`
	text-align: center;
	font-size: 1.5rem;
	margin: 2.4rem 0;
`

export const StyledCoinInputWrapper = styled(Wrapper)`
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	@media screen and (width <= 767px) {
		flex-direction: column;
		max-width: 100%;
	}

	div {
		&:first-child input {
			width: 90%;

			@media screen and (width <= 767px) {
				width: 100%;
			}
		}

		&:last-child input {
			width: 5rem;

			@media screen and (width <= 767px) {
				width: 100%;
			}
		}
	}
`
