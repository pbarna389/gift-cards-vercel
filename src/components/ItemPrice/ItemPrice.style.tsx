import { LinkBase, PriceWrapper, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ItemPriceWrapper = styled(PriceWrapper)`
	width: fit-content;
	gap: 0.25rem;
	border: none;
	margin-top: 1rem;

	@media screen and (width <= 567px) {
		font-size: 0.75rem;
		margin: 0.25rem;
	}

	h2 {
		margin: 0;
	}

	.icon {
		width: inherit;

		&:last-child {
			padding: 0;
			justify-content: flex-start;
		}

		span {
			display: none;
		}
	}
`

export const ItemTooltipWrapper = styled(Wrapper)`
	position: relative;
`

export const CoinLink = styled(LinkBase)`
	color: rgb(255 193 7);
	padding: 0;
	transition: scale 0.2s ease-in, color 0.2s ease-in;

	&:hover {
		color: rgb(252 223 91);
		scale: 1.2;
	}
`
