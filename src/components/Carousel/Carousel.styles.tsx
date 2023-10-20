import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'


export const SwiperWrapper = styled.div`
	position: relative;
	width: fit-content;
	z-index: 11;
`

export const StyledSwiper = styled(Swiper)`
	${sharedProps}
	position: static;
	margin-top: 0.5rem;

	.swiper-wrapper {
		position: static;
	}

	@media screen and (width >= 1px) and (width <= 575px) {
		width: 90vw;
	}
`

export const StyledSwiperSlide = styled(SwiperSlide)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
	white-space: pre-wrap;
	height: 5rem;
	padding: 0.5rem 0;
	opacity: 0.5;
	font-size: 14px;
	transition: opacity 0.25s ease-in, background-color 0.25s ease-in;
	user-select: none;

	&.selected {
		opacity: 1;
	}

	&:hover {
		cursor: pointer;
		opacity: 1;
		background-color: #444;
	}
`

export const SwiperArrow = styled.button`
	transform: translate(-50%, -50%);
	position: absolute;
	top: 55%;
	width: 2rem;
	height: 2rem;
	margin: 0;
	padding: 0;
	opacity: 0.5;
	border: none;
	outline: none;
	color: white;
	background-color: transparent;
	transition: opacity 0.05s ease-in;

	&.swiper-button-disabled {
		opacity: 0.25;

		&:active {
			opacity: 0.25;
		}
	}

	&:active {
		opacity: 0.8;
	}

	&.swiper-prev {
		left: -0.2rem;
	}

	&.swiper-next {
		right: -2rem;
	}
`
