import { LinkBase, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const LoginMenuWrapper = styled(Wrapper)`
	position: absolute;
	background-color: #212529;
	border: 2px solid rgb(255 255 255 / 11.1%);
	border-radius: 10px;
	width: 107.5%;
`

export const StyledProfileUl = styled.ul`
	width: 100%;
	border-radius: inherit;
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;

	a {
		&:first-child {
			li {
				border-bottom: 1px solid #7676766b;
				margin: 0.3rem 0;
				margin-top: 0;

				&:hover {
					border-top-right-radius: 10px;
					border-top-left-radius: 10px;
				}
			}
		}
	}

	.last {
		&:hover {
			background-color: #465059ed;
			border-bottom-right-radius: 10px;
			border-bottom-left-radius: 10px;
		}
	}
`

export const StyledProfileLi = styled.li`
	list-style: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	background-color: transparent;
	color: #adb5bd;
	transition: background-color 0.2s ease-in;
	user-select: none;

	.icon {
		justify-content: flex-start;
	}

	&:hover {
		background-color: #465059ed;
	}
`

export const ProfileLink = styled(LinkBase)`
	width: inherit;
	height: fit-content;
	color: inherit;
	outline: none;
	border: none;

	&:hover {
		color: inherit;
	}
`
