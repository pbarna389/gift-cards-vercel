import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const CardWrapper = styled(Wrapper)`
	position: relative;
	padding: 1rem;
	border: 1px solid whitesmoke;
	opacity: 0.75;
	padding-top: 175px;
	width: 150px;
	transition: box-shadow 0.2s linear, opacity 0.3s ease-in;

	&.active {
		opacity: 1;
		box-shadow: 0 0 10px 10px rgb(255 255 255 / 60%);
	}

	img {
		position: absolute;
		transform: translateX(-50%);
		top: 0.25rem;
		left: 50%;
		width: 125px;
		height: 140px;
		aspect-ratio: 16/9;
		opacity: 1;
		transition: top 0.5s ease-in;
	}

	&:hover {
		box-shadow: 0 0 10px 10px rgb(255 255 255 / 60%);
		opacity: 1;

		img {
			top: 0;
		}
	}
`
