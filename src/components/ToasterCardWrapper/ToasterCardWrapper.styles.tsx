import { styled } from 'styled-components'

export const ToastCardWrapperDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	position: fixed;
	top: 12%;
	left: 0;
	overflow: hidden;
	width: 17.5%;
	z-index: 10000;
	height: fit-content;
	box-sizing: border-box;

	@media screen and (width <=1399px) {
		width: 26%;
	}

	@media screen and (width <=1199px) {
		width: 26%;
	}

	@media screen and (width <=1141px) {
		width: 28.5%;
	}

	@media screen and (width <=1080px) {
		width: 30%;
	}

	@media screen and (width <=1020px) {
		width: 32%;
	}

	@media screen and (width <=992px) {
		width: 33.4%;
	}

	@media screen and (width <=970px) {
		width: 34%;
	}

	@media screen and (width <=920px) {
		width: 35.5%;
	}

	@media screen and (width <=866px) {
		width: 40%;
	}

	@media screen and (width <=767px) {
		width: 100%;
	}
`
