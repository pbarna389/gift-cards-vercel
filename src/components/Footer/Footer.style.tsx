import { LinkBase, sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const StyledFooter = styled.footer`
	${sharedProps}
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding-bottom: 0;
	background-color: #111;

	@media screen and (width <= 991px) {
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
`

export const ImgLogo = styled.img`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	width: 2.25rem;
	height: 2.25rem;

	@media screen and (width <= 992px) {
		position: static;
		transform: translate(0, 0);
		top: 0%;
		left: 0%;
	}
`
export const FooterUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	gap: 1rem;

	li {
		list-style: none;
		user-select: none;
	}

	@media screen and (width <= 992px) {
		width: 100%;
	}
`

export const FooterLink = styled(LinkBase)`
	font-weight: 400;
	font-size: 0.8rem;
	white-space: nowrap;
	transition: color 0.2s ease-in;

	&:hover {
		color: rgb(192 192 192);
	}
`
