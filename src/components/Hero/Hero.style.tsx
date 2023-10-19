import { Background } from '@constants/styles'
import { styled } from 'styled-components'

export const HeroBackground = styled(Background)<{
	$background: string
	$noRepeat: boolean
	$animate?: boolean
}>`
	height: 600px;
	width: 100%;
	background-position: center;
	background-image: url(${(props) => props.$background});
	background-repeat: ${(props) => (props.$noRepeat ? 'no-repeat' : 'repeat-x')};
	animation: ${(props) => (props.$animate ? `scroll  40s infinite linear` : 'none')};

	&::before {
		background-color: ${(props) => (props.$noRepeat ? 'rgba(0,0,0,0.75)' : 'transparent')};
	}

	@media screen and (width <= 991px) {
		margin-top: 2.5rem;
	}

	@keyframes scroll {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: -1850px 0;
		}
	}

	.add-button {
		z-index: 9999;
	}
`
