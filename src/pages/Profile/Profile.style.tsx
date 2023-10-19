import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const TableWrapper = styled.div`
	${sharedProps}
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ProfileBtnWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	z-index: 9999;
`

export const ModalCardWrapper = styled.div`
	width: 100%;
	max-height: 0;
	transition: max-height 0.3s ease-in;
`

export const CardExpander = styled.div`
	height: fit-content;
	overflow: hidden;
	width: 40%;

	h4 {
		border-bottom: 1px solid white;
	}

	.modal-card-wrapper {
		.item-price-wrapper {
			width: 100%;
			justify-content: center;
			align-items: center;

			.icon {
				width: fit-content;
			}
		}

		.add-button {
			width: 100%;
		}

		@media screen and (width <= 567px) {
			.profile-card {
				max-height: 125px;
				width: 50%;
				margin: 0 auto;

				h2,
				p {
					font-size: 1.25rem;
				}

				.card-img {
					aspect-ratio: 16/9;
				}
			}

			.add-button {
				.btn {
					padding: 0.5rem;
					width: 50%;
					margin: 0 auto;

					.icon {
						height: 1rem;
					}
				}
			}
		}

		@media screen and (width <= 360px) {
			.profile-card {
				width: 85%;
			}

			.add-button {
				.btn {
					width: 85%;
					margin: 0 auto;
				}
			}
		}
	}

	&:hover {
		.modal-card-wrapper {
			max-height: 700px;
		}
	}

	@media screen and (width <= 1399px) {
		width: 37.5%;
		max-height: 650px;
	}

	@media screen and (width <= 1199px) {
		width: 45%;
	}

	@media screen and (width <= 991px) {
		width: 50%;
	}

	@media screen and (width <= 767px) {
		width: 70%;
	}

	@media screen and (width <= 567px) {
		width: 100%;
		max-height: 300px;
	}
`
