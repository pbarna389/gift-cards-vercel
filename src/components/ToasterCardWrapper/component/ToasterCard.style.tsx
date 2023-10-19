import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ToasterCardDiv = styled(Wrapper)`
	position: relative;
	flex-direction: column;
	text-align: center;
	white-space: break-spaces;
	width: 250px;
	height: 0;
	box-sizing: border-box;
	background: rgb(139 139 139 / 85%);
	backdrop-filter: blur(5px);
	z-index: 10000;
	padding: 0.5rem;
	opacity: 0;
	user-select: none;
	font-size: 1.25rem;
	color: #1f1f1f;
	cursor: pointer;
	margin-bottom: 0.5rem;
	animation: toaster-move 3.89s ease-in-out 1;

	&.default {
		box-shadow: 0 0 10px 5px rgb(139 139 139 / 33.8%);
	}

	&.add-item {
		box-shadow: inset 0 0 10px 10px rgb(111 180 84 / 50.8%);
	}

	&.remove-item {
		box-shadow: inset 0 0 10px 10px rgba(179 0 0 / 42.8%);
	}

	&.login {
		box-shadow: inset 0 0 10px 10px rgb(57 208 27 / 50.8%);
	}

	&.logout {
		box-shadow: inset 0 0 10px 10px rgb(106 79 79 / 58.6%);
	}

	&.pending {
		box-shadow: inset 0 0 10px 10px rgb(255 234 0 / 46.5%);
	}

	&.purchase {
		box-shadow: inset 0 0 10px 10px rgb(0 255 30 / 46.5%);
	}

	&.remove {
		animation: remove-anim 0.75s linear 1;

		&::after {
			animation-play-state: paused;
		}
	}

	@keyframes remove-anim {
		0% {
			opacity: 1;
			height: 100px;
			width: 250px;
			left: 10%;
		}

		85% {
			opacity: 0;
			height: 100px;
			width: 250px;
			padding: 0.5rem;
			margin-bottom: 0.5rem;
		}

		90% {
			height: 0;
			width: 0;
			padding: 0;
			margin-bottom: 0;
		}

		100% {
			height: 0;
			width: 0;
			padding: 0;
			margin-bottom: 0;
		}
	}

	@keyframes toaster-move {
		0% {
			left: -100%;
			width: 250px;
		}

		1% {
			height: 100px;
			opacity: 1;
			padding: 0.5rem;
			font-size: 1.25rem;
		}

		20% {
			left: 10%;
		}

		90% {
			left: 15%;
			height: 100px;
			width: 250px;
			padding: 0.5rem;
			font-size: 1.25rem;
		}

		95% {
			left: -150%;
			opacity: 1;
			height: 100px;
			width: 250px;
		}

		96% {
			height: 0;
			width: 0;
			padding: 0;
			font-size: 0;
		}

		100% {
			height: 0;
			width: 0;
			left: -150%;
			opacity: 0;
			display: none;
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		background-color: red;
		z-index: 10001;
		animation: after-anim 3.89s linear 1;

		@keyframes after-anim {
			0% {
				width: 100%;
			}

			20% {
				width: 100%;
			}

			90% {
				width: 0%;
			}

			100% {
				width: 0%;
			}
		}
	}

	@media screen and (width <= 767px) {
		top: 0;
		width: inherit;
		border-radius: 0;

		@keyframes toaster-move {
			0% {
				left: -150%;
				width: 100%;
			}

			1% {
				height: 100px;
				opacity: 1;
			}

			20% {
				left: 0;
			}

			90% {
				left: 0;
			}

			95% {
				left: -150%;
				opacity: 1;
				height: 100px;
				width: 100%;
			}

			96% {
				height: 0;
				width: 0;
			}

			100% {
				height: 0;
				width: 0;
				left: -150%;
				opacity: 0;
			}
		}

		@keyframes remove-anim {
			0% {
				opacity: 1;
				height: 100px;
				width: 100%;
				left: 0;
			}

			85% {
				left: 15%;
			}

			95% {
				left: -150%;
				opacity: 1;
				height: 100px;
				width: 250px;
			}

			96% {
				height: 0;
				width: 0;
			}

			100% {
				height: 0;
				width: 0;
				left: -150%;
				opacity: 0;
			}
		}
	}
`
