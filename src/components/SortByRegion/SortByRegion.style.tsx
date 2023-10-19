import { sharedProps, Wrapper } from '@constants/styles'
import { DetailsLabel } from '@pages/AdminUserDetails/components/AdminUserDetailsInfo/components/DetailsInfoField/DetailsInfoField.style'
import { styled } from 'styled-components'

export const StyledSortByRegion = styled(DetailsLabel)`
	flex-direction: column;
	align-self: self-start;
	margin-left: 0.8rem;
	margin-bottom: 1rem;
	font-size: 1.15rem;
`
export const StyledSortByWrapper = styled(Wrapper)`
	${sharedProps}
`
export const StyledSortBySelect = styled.select`
	height: 3rem;
	width: 10rem;
	font-size: 1.5rem;
`
