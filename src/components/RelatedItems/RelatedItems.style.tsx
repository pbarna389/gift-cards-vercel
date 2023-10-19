import { sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const RelatedItemWrapper = styled(Wrapper)`
	${sharedProps}

	flex-direction: row;
	gap: 1rem;
	width: 59%;
	margin-left: auto;
	margin-right: auto;

	a {
		max-height: 200px;
		opacity: 0.85;
		transition: opacity 0.35s ease-in;

		&:hover {
			opacity: 1;
		}
	}

	@media screen and (width <= 1199px) {
		flex-wrap: wrap;

		a {
			max-width: 32%;
			max-height: 175px;
		}
	}

	@media screen and (width <= 767px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		a {
			max-width: 100%;
			width: 100%;
		}
	}

	@media screen and (width <= 567px) {
		grid-template-columns: 1fr;

		a {
			max-width: 85%;
			justify-self: center;
		}
	}
`
