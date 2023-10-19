import { Link } from 'react-router-dom'

import { ErrorMessage, Field } from 'formik'

import { css, styled } from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const MainPageContentWrapper = styled(Wrapper)`
	margin-bottom: 5rem;
	background: linear-gradient(to bottom, #001055, #001055 150px, #012 150px, #012);

	@media screen and (width <= 425px) {
		margin-bottom: 10rem;
	}

	&.inactive {
		overflow: hidden;
	}
`

export const MainPageContentWrapperWithIcons = styled(MainPageContentWrapper)`
	.hero-bg {
		.icon {
			width: fit-content;
			height: fit-content;
			font-size: 7.5rem;
		}
	}
`

export const ButtonBase = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	font-size: 1.25rem;
	color: black;
	padding: 0.75rem;
`

export const Container = styled(Wrapper)`
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
`

export const LogoText = styled.h3`
	font-weight: 500;
	font-size: calc(1.2rem + 0.6vw);
	line-height: 1.2;
	text-align: center;
	z-index: 1;

	&.item {
		color: white;
		margin: 0;
		margin-bottom: 1.5rem;
		font-size: 2.5rem;
	}
`

export const LinkBase = styled(Link)`
	color: #fff;
	display: block;
	width: fit-content;
	height: fit-content;
`

export const BtnLink = styled(LinkBase)`
	z-index: 3;
`

export const NameWrapper = styled(Wrapper)`
	flex-direction: row;
	justify-content: space-between;
	width: inherit;
`

export const PriceWrapper = styled(NameWrapper)`
	border: 1px solid white;
	padding: 0;
	width: 100%;

	.icon {
		justify-content: flex-start;
		align-items: center;
		padding: 0;

		&:last-child {
			justify-content: flex-end;
			padding: 0;
			padding-right: 1rem;
		}

		@media screen and (width >= 768px) and (width <= 991px) {
			width: 7rem;
		}

		@media screen and (width >= 992px) and (width <= 1199px) {
			width: 8rem;
		}
	}
`

export const CategoryLink = styled(LinkBase)`
	height: fit-content;
	width: 100%;

	&:hover {
		cursor: pointer;
		color: inherit;
	}
`

export const ShortDescParagraph = styled.p`
	color: rgb(255 255 255 / 50%);
	font-size: 18px;
	margin: 1rem;
	overflow: hidden;
	max-width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
`

export const Background = styled(Wrapper)`
	height: 600px;
	width: 100%;
	overflow: hidden;
	perspective: 1000px;
	background-repeat: repeat-x;
	background-size: cover;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(1px);
	}
`

export const sharedProps = css`
	@media screen and (width >= 1px) and (width <= 575px) {
		width: 95%;
		gap: 1rem;
	}

	@media screen and (width >= 576px) {
		width: 540px;
	}

	@media screen and (width >= 768px) {
		width: 720px;
	}

	@media screen and (width >= 992px) {
		width: 960px;
	}

	@media screen and (width >= 1200px) {
		width: 1140px;
	}

	@media screen and (width >= 1400px) {
		width: 1370px;
	}
`

export const IconSharedStyle = {
	alignItems: 'center',
	border: 'none',
	borderRadius: '0px',
	display: 'flex',
	height: '1.3rem',
	padding: '0.4rem',
	width: '1.8rem',
}

export const SuggestH2 = styled.h2`
	text-align: center;
	font-size: 1.5rem;
	margin: 2.4rem auto;
	left: auto;
`

export const H2Elements = styled.h2`
	margin: 0;
	max-width: 75%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 1.75rem;
`

export const StyledTextField = styled(Field)`
	box-sizing: border-box;
	display: block;
	border: none;
	border-radius: 5px;
	outline: none;
	background-color: #e2e3e5;
	font-size: 1rem;
	color: black;
	padding: 0.6rem;
	resize: none;
	margin: 1rem 0;
	width: 100%;

	@media screen and (width <= 575px) {
		padding: 0.4rem;
	}
`

export const StyledIdField = styled(Field)`
	margin: 0 auto;
	border: none;
	background-color: transparent;
	outline: none;
	font-size: 1.3rem;
	margin-left: 1rem;
	resize: none;
	text-align: center;
	width: 5rem;
`

export const StyledErrorMessage = styled(ErrorMessage)`
	text-align: center;
	user-select: none;
`
export const StyledErrorWrapper = styled.div`
	width: 100%;
	background-color: #f34f4f;
	text-align: center;
	border-radius: 1rem;
	opacity: 0.9;
	display: flex;
	height: 50px;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in;

	&:hover {
		opacity: 1;
	}

	@media screen and (width <= 575px) {
		height: 150px;
	}
`

export const StyledLabelGifts = styled.label`
	width: 100%;
	display: block;
`
