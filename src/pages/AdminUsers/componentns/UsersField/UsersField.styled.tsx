import { styled } from 'styled-components'

import { Container, sharedProps, ShortDescParagraph } from '../../../../constants/styles'

export const StyledUsersField = styled(Container)`
	border-top: 2px solid #1f1f1f;
	border-bottom: 2px solid #1f1f1f;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;

	@media screen and (width <= 840px) {
		justify-content: center;
		flex-direction: column;
	}

	@media screen and (width >= 1200px) {
		${sharedProps}
	}
`
export const StyledUserImgSmall = styled.img`
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	object-fit: cover;

	@media screen and (width < 650px) {
		width: 6rem;
		height: 6rem;
	}
`
export const StyledUsersFieldInfoBtn = styled.div`
	align-items: center;
	display: flex;
	gap: 2rem;

	@media screen and (width <= 1199px) {
		flex-direction: column;
		gap: 0.5rem;
	}

	@media screen and (width <= 840px) {
		justify-content: center;
		flex-direction: row;
	}

	@media screen and (width <= 400px) {
		justify-content: center;
		flex-direction: column;
	}
`
export const StyledUsersFieldInfo = styled(StyledUsersFieldInfoBtn)`
	flex-direction: row;
	width: 100%;

	@media screen and (width < 650px) {
		justify-content: center;
		flex-direction: column;
	}
`
export const StyledUsersFiledSpan = styled(ShortDescParagraph)`
	color: rgb(223 223 223 / 87%);
	overflow: hidden;

	@media screen and (width > 1150px) {
		width: 9rem;
	}
`

export const StyledUsersSpansWrapper = styled.div`
	flex-direction: inherit;
	display: flex;
`
