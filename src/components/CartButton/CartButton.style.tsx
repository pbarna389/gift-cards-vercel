import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const CartWrapper = styled(Wrapper)`
	position: fixed;
	right: -30%;
	transition: right 0.5s ease-in, background-color 0.2s ease-in;

	&.active {
		right: 2%;
	}

	@media screen and (width <= 1625px) {
		top: 10.5%;
	}

	@media screen and (width <= 1399px) {
		top: 2.4%;
	}

	@media screen and (width <= 1375px) {
		top: 10.5%;
	}

	@media screen and (width <= 1199px) {
		top: 2.4%;
	}

	@media screen and (width <= 1186px) {
		top: 10.5%;
	}

	@media screen and (width <= 991px) {
		top: 2.4%;
	}

	@media screen and (width <= 935px) {
		top: 10.5%;
	}

	@media screen and (width <= 767px) {
		top: 2.4%;
	}

	@media screen and (width <= 750px) {
		top: 10.5%;
	}

	@media screen and (width <= 575px) {
		top: 80%;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: red;

		&:hover {
			background-color: white;
		}
	}

	.icon {
		font-size: 3rem;
		transition: color 0.2s ease-in;
		width: 4rem;
		z-index: -1;

		@media screen and (width <= 575px) {
			color: white;
		}

		span {
			display: none;
		}
	}

	&:hover {
		.icon {
			color: red;
		}

		.gift-counter {
			background-color: white;
			color: red;
		}
	}
`

export const SelectedGiftCounter = styled.span`
	position: absolute;
	top: 50%;
	left: 52.5%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background-color: red;
	color: white;
	user-select: none;
	cursor: default;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
	z-index: -1;
`
