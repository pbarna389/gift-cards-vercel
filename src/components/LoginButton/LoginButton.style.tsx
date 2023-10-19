import { styled } from 'styled-components'

export const LinkWrapper = styled.div`
	position: relative;
	transition: right 0.5s ease-in;
	right: 0;
	z-index: 9999;
`

export const GoogleImg = styled.img`
	padding: 5px;
	border-radius: 50%;
	border: 1px solid white;
	width: 1rem;
	height: 1rem;

	&.logged-in {
		width: 3rem;
		height: 3rem;
	}
`

export const GoogleLoginWrapper = styled.div`
	position: relative;
	font-weight: 400;
	color: #fff;
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	user-select: none;
	cursor: pointer;

	&:hover {
		color: #fff;
	}

	&.logged-in {
		&::after {
			content: '↡';
			position: absolute;
			transform: translate(-50%, -50%);
			right: -20%;
			top: 50%;
			font-size: 2rem;
		}

		&.menu-show {
			&::after {
				content: '↟';
			}
		}
	}
`
