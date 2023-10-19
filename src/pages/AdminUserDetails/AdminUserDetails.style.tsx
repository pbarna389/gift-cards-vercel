import { LinkBase, MainPageContentWrapper, sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

export const StyledUserImgRegular = styled.img`
	border-radius: 50%;
	width: 15rem;
	height: 15rem;
	object-fit: cover;

	@media screen and (width < 1400px) {
		width: 10rem;
		height: 10rem;
	}

	@media screen and (width < 992px) {
		width: 8rem;
		height: 8rem;
	}

	@media screen and (width < 767px) {
		width: 5rem;
		height: 5rem;
	}
`
export const StyledUserPageWrapper = styled(MainPageContentWrapper)`
	min-height: 90vh;
	gap: 2rem;

	@media screen and (width < 1200px) {
		padding-top: 5rem;
	}

	@media screen and (width < 500px) {
		justify-content: start;
		padding-top: 15rem;
	}
`
export const StyledUserPageContent = styled.div`
	${sharedProps}
	display: flex;
	gap: 5rem;

	@media screen and (width < 500px) {
		flex-direction: column;
	}
`

export const StyledUserPageNav = styled.nav`
	display: flex;
	flex-direction: column;
	height: 50vh;
	justify-content: start;
	gap: 3rem;
`
export const StyledUserPageNavLinks = styled(LinkBase)`
	font-size: 1.5rem;
	border-bottom: 3px solid #6b6b6b;

	&:hover {
		border-bottom: 3px solid #b9b9b9;
		color: #b9b9b9;
	}

	@media screen and (width < 766px) {
		font-size: 1rem;
	}
`
export const StyledUserPanelWrapper = styled.div`
	border-right: 3px solid #6b6b6b;
	width: 20%;

	@media screen and (width < 500px) {
		display: flex;
		border-right: none;
		align-items: center;
		border-bottom: 3px solid #6b6b6b;
		width: 100%;
		padding-bottom: 1rem;
	}
`

export const StyledDropDown = styled.div`
	position: absolute;
	right: 0;
`

export const StyledUlList = styled.ul`
	list-style-type: none;
`
