import { LinkBase, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const CardWrapper = styled(Wrapper)`
	justify-content: flex-start;
	border: 1px solid #111;
	width: 24%;
	max-height: 350px;
	aspect-ratio: auto;

	.btn {
		margin: 0;
		padding: 0.5rem;
	}

	@media screen and (width >= 1px) and (width <= 374px) {
		width: 95%;
		max-height: 380px;
	}

	@media screen and (width >= 375px) and (width <= 575px) {
		width: 95%;
		max-height: 450px;
	}

	@media screen and (width >= 576px) and (width <= 767px) {
		width: 48%;
		max-height: 350px;
	}

	@media screen and (width >= 768px) and (width <= 991px) {
		width: 32%;
		max-height: 350px;
	}

	@media screen and (width >= 1399px) {
		max-height: 350px;
	}
`

export const GiftCardLink = styled(LinkBase)`
	&:hover {
		color: inherit;
	}
`

export const CardBody = styled.div`
	padding: 0.25rem;
	width: 95%;
	height: fit-content;
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

export const GiftCardSharedStyle = {
	alignItems: 'center',
	border: 'none',
	borderRadius: '0px',
	display: 'flex',
	height: '1.3rem',
	padding: '0.4rem',
	width: '1.8rem',
}

export const BtnCategory = styled.button`
	width: 100%;
	background-color: transparent;
	display: flex;
	border: none;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 1rem;
	color: white;
	transition: background-color 0.3s ease-in, font-size 0.3s ease-in;
	justify-content: space-between;

	&:hover {
		background-color: #222;
		font-size: 1.1rem;
	}
`
