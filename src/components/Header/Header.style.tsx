import { LinkBase, sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const StyledHeader = styled.header`
	${sharedProps}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	opacity: 1;
	z-index: 1;
	transition: opacity 0.5s linear, z-index 0.5s linear;
	max-height: 10%;

	@media screen and (width >= 1px) and (width <= 575px) {
		background-color: #111;
		justify-content: center;
		align-items: center;
	}

	&.hidden {
		opacity: 0;
		z-index: 0;
	}

	&.not-shown {
		opacity: 0;
		z-index: 0;
	}
`

export const HomeLink = styled(LinkBase)`
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 1px;
	color: #fff;
	transition: color 0.2s ease-in;

	&:hover {
		color: #fff;
		cursor: pointer;
	}
`

export const LoginWrapper = styled(Wrapper)`
	flex-direction: row;
	gap: 1.5rem;
	justify-content: inherit;
	align-items: inherit;
	position: relative;
	right: 0;
	z-index: 10;
	transition: right 0.25s ease-in;

	&.active {
		right: 15%;
		transition: right 0.25s ease-in;

		@media screen and (width <= 1760px) {
			right: 20%;
		}

		@media screen and (width <= 1610px) {
			right: 24%;
		}

		@media screen and (width <= 1399px) {
			right: 32%;
		}

		@media screen and (width <= 1199px) {
			right: 40%;
		}

		@media screen and (width <= 991px) {
			right: 45%;
		}

		@media screen and (width <= 767px) {
			right: 40%;
		}

		@media screen and (width <= 575px) {
			right: 40%;
		}
	}
`
