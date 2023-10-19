import { LinkBase, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ImgWrapper = styled(Wrapper)`
	position: relative;
	overflow: hidden;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 275px;
	margin: 0;
	padding: 0;
	color: white;
	border-radius: 10px;
	border: 1px solid green;
`

export const ImgLink = styled(LinkBase)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: inherit;
	height: inherit;

	.lazy-load {
		position: inherit;
		display: inherit;
		align-items: inherit;
		justify-content: inherit;
		flex-direction: inherit;
		border-radius: inherit;
		overflow: inherit;
		width: inherit;
		height: inherit;
		margin: inherit;
		padding: inherit;
		color: inherit;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		&.is-visible {
			opacity: 1;
		}
	}

	.card-h2 {
		position: absolute;
		top: 3%;
		right: 7.5%;
		font-size: 2rem;
	}

	p {
		margin: 0;
		bottom: 3%;
	}

	&:hover {
		color: white;

		.card-h2 {
			color: inherit;
		}

		p {
			color: inherit;
		}
	}

	&.zoomable-card {
		.icon {
			width: fit-content;
			font-size: 2.5rem;
			transition: scale 0.3s ease-in;
			color: yellow;

			&:hover {
				scale: 1.5;
			}
		}

		.tooltip {
			transform: translate(0);
			display: flex;
			justify-content: center;
			align-items: center;
			top: 0%;
			left: 0%;
			width: 100%;
			height: 100%;
			background-color: #111111cf;
			font-weight: 500;
		}

		&:hover {
			.card-img {
				width: 120%;
				height: 120%;
			}
		}
	}
`

export const TooltipWrapper = styled(Wrapper)`
	position: absolute;
	height: fit-content;
	top: 70%;
	right: 7.6%;
	z-index: 21;
`

export const CardImage = styled.img`
	width: 100%;
	height: 100%;
	transition: width 0.5s ease-in, height 0.5s ease-in, opacity 0.5s ease-in;
`

export const AmountCounter = styled.p`
	position: absolute;
	bottom: 3%;
	right: 7.5%;
	color: white;
	font-size: 2rem;
	letter-spacing: -1px;
	transform: rotateX(20deg);
	margin: 0;

	&:hover {
		color: inherit;
	}
`
