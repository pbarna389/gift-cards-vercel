import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const FavButtonWrapper = styled(Wrapper)`
	position: absolute;
	z-index: 30;
	top: 7%;
	left: 5%;
	width: fit-content;
	height: fit-content;

	.icon {
		font-size: 2.5rem;
		width: 2.5rem;
		height: 2.5rem;
		color: yellow;
		transition: scale 0.25s ease-in;

		&:hover {
			scale: 1.4;
		}
	}
`
