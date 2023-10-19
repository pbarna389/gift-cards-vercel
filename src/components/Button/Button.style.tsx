import { ButtonBase } from '@constants/styles'
import { styled } from 'styled-components'

import type { ButtonTypes } from './Button'

export const StyledButton = styled(ButtonBase)<{
	$btnType: ButtonTypes
}>`
	background-color: ${(props) => (props.$btnType === 'cancel' ? '#5c5c5c' : '#fabb00')};
	gap: 1rem;
	transition: background-color 0.2s ease-in, scale 0.2s ease-in;
	border-radius: 5px;
	margin: 1rem 0;
	width: 100%;

	&.btn-submit {
		justify-content: center;
	}

	svg {
		animation: ${(props) =>
			props.$btnType === 'cancel' || props.$btnType === 'remove'
				? 'none'
				: 'keyfr-choose-anim 5s linear infinite'};
	}

	&:hover {
		background-color: ${(props) => (props.$btnType === 'cancel' ? '#9f9f9f' : '#f7d128')};

		svg {
			scale: 1.2;
		}
	}

	&:disabled {
		background-color: #4d3a00;

		svg {
			animation: none;
		}

		&:hover {
			svg {
				scale: 1;
			}
		}
	}

	@keyframes keyfr-choose-anim {
		0% {
			rotate: 0deg;
		}

		5% {
			rotate: 0deg;
		}

		35% {
			rotate: 25deg;
		}

		40% {
			rotate: 25deg;
		}

		75% {
			rotate: -25deg;
		}

		80% {
			rotate: -25deg;
		}

		97% {
			rotate: -3.75deg;
		}

		100% {
			rotate: 0deg;
		}
	}
`

export const BtnIconWrapper = styled.div<{ $btnType: ButtonTypes }>`
	width: fit-content;
	height: fit-content;

	.icon {
		width: fit-content;
	}

	svg {
		width: 2rem;
		height: 2rem;
		transition: scale 0.2s ease-in;
	}
`
