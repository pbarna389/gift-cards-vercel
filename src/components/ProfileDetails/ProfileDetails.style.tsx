import { sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ProfileDetailsWrapper = styled(Wrapper)`
	${sharedProps}
	position: relative;
	margin: 1rem 0;
`

export const ProfilePictureWrapper = styled(Wrapper)`
	position: absolute;
	transform: translate(-50%, -50%);
	top: -5%;
	left: 10%;
	align-items: flex-start;

	@media screen and (width <= 767px) {
		left: 50%;
	}

	@media screen and (width <= 567px) {
		top: -2.7%;
	}
`

export const ProfileDetailsPicture = styled.img`
	border-radius: 50%;
	max-width: 12.5rem;
	max-height: 12.5rem;
`

export const ProfileGridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 5rem;
	row-gap: 2rem;

	p,
	h2 {
		align-self: center;
	}

	@media screen and (width <= 1199px) {
		padding-top: 5rem;
	}

	@media screen and (width <= 567px) {
		padding-top: 7rem;
		display: flex;
		flex-direction: column;
	}
`
