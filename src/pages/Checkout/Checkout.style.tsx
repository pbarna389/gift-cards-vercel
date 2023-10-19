import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const CheckoutTitle = styled.h1`
	@media screen and (width <= 991px) {
		margin-top: 5rem;
	}

	@media screen and (width <= 425px) {
		margin-top: 10rem;
	}
`

export const ColumnWrapper = styled(Wrapper)`
	gap: 2rem;
	padding: 1rem;
	align-items: center;
	justify-content: space-between;

	@media screen and (width <= 767px) {
		padding: 0.5rem;
	}
`

export const CheckoutCard = styled(Wrapper)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin: 0 auto;

	@media screen and (width <= 870px) {
		grid-template-columns: repeat(2, 50%);
	}

	.transition {
		@media screen and (width <= 767px) {
			max-width: 100%;
			width: 100%;
		}

		@media screen and (width <= 619px) {
			max-width: 400px;
			width: 100%;
		}

		@media screen and (width <= 459px) {
			max-width: 300px;
		}

		@media screen and (width <= 319px) {
			max-width: 240px;
		}
	}

	.checkout-card-details-wrapper {
		max-width: 400px;
		box-sizing: border-box;

		@media screen and (width <= 767px) {
			max-width: 100%;
			width: 100%;
		}

		@media screen and (width <= 619px) {
			max-width: 400px;
			width: 100%;
		}

		@media screen and (width <= 459px) {
			max-width: 300px;
			width: 100%;
		}

		@media screen and (width <= 319px) {
			max-width: 240px;
		}

		.short-desc {
			max-width: 75%;
		}

		.category-link {
			width: 100%;

			.category-wrapper {
				box-sizing: border-box;

				.icon {
					width: inherit;
					justify-content: space-between;
				}
			}
		}
	}

	@media screen and (width >= 1200px) {
		gap: 8rem;
	}

	@media screen and (width <= 1199px) {
		gap: 5rem;
	}

	@media screen and (width <= 991px) {
		align-items: flex-start;
		gap: 3rem;
	}

	@media screen and (width <= 767px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export const ButtonContainer = styled(Wrapper)`
	flex-direction: row;
	gap: 1rem;
	justify-content: flex-start;

	@media screen and (width <= 767px) {
		padding: 0.5rem;
	}
`
