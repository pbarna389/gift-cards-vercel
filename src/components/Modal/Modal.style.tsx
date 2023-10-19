import { sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ModalWrapper = styled(Wrapper)`
	position: fixed;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	z-index: 9999;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media screen and (width <= 567px) {
		transform: translate(0%, 0%);
		border-radius: 0;
		top: 0;
		left: 0;
		width: 100%;
	}

	&::after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
	}

	.modal-children-wrapper {
		${sharedProps}
		box-sizing: border-box;
		display: inherit;
		align-items: inherit;
		justify-content: inherit;
		flex-direction: column;
		position: relative;
		border-radius: 25px;
		padding: 3rem;
		background-color: #1f1f1f;
		text-align: center;

		@media screen and (height<=600px) {
			max-height: 600px;
			padding-top: 200px;
		}

		.profile-card {
			border-radius: 10px;
		}
	}

	.profile-modal-btn-wrapper {
		width: 100%;

		.profile-btn-link {
			width: inherit;

			.btn {
				width: inherit;
			}
		}
	}

	.category-link {
		width: 100%;

		.category-wrapper {
			width: inherit;
			box-sizing: border-box;
			border-radius: 10px;

			.icon {
				width: inherit;
				justify-content: space-between;
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
		}
	}

	h2,
	div,
	p,
	button {
		z-index: 9999;
	}
`

export const ModalBtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 40%;
	height: fit-content;

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

	.btn {
		width: 100%;
	}
`
