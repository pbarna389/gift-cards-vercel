import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const CartSidebarWrapper = styled(Wrapper)`
	justify-content: flex-start;
	gap: 1rem;
	position: fixed;
	top: 0%;
	right: -30%;
	width: 22.5%;
	height: 100vh;
	border-left: 1px solid white;
	background: #1f1f1f;
	transition: right 0.5s ease-in;
	z-index: 100;
	overflow-y: auto;
	direction: rtl;

	@media screen and (width <=1399px) {
		width: 30%;
		right: -35%;
	}

	@media screen and (width <=1199px) {
		width: 35%;
		right: -40%;
	}

	@media screen and (width <=991px) {
		width: 38%;
		right: -45%;
	}

	@media screen and (width <=866px) {
		width: 42%;
		right: -50%;
	}

	@media screen and (width <=767px) {
		width: 100%;
		right: -150%;

		.cart-item-wrapper {
			max-width: 82.5%;
		}
	}

	&.active {
		right: 0%;

		.sidebar-close {
			right: inherit;
		}
	}

	.cart-item-wrapper {
		padding: 1rem;
		border: 2px solid green;

		a {
			img {
				position: relative;
				opacity: 0.8;
			}
		}

		&:hover {
			a {
				img {
					opacity: 1;
					width: 120%;
					height: 120%;
				}
			}
		}
	}
`

export const CloseSideBar = styled.div`
	position: fixed;
	top: 2.5%;
	right: -25%;
	width: 3rem;
	height: 3rem;
	z-index: inherit;

	.first,
	.second {
		display: block;
		position: absolute;
		z-index: 20;
		width: 60px;
		height: 5px;
		background-color: green;
		top: 50%;
		transition: background-color 0.25s ease-in;
	}

	.first {
		rotate: -45deg;
	}

	.second {
		rotate: 45deg;
	}

	&:hover {
		.first,
		.second {
			background-color: rgb(3 225 3);
		}
	}
`
