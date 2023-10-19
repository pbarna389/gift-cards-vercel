import { sharedProps } from '@constants/styles'
import { StyledUsersField } from '@pages/AdminUsers/componentns/UsersField/UsersField.styled'
import { styled } from 'styled-components'

export const StyledSummary = styled.summary`
	display: flex;
	font-size: 1.15rem;
	gap: 1rem;
	justify-content: space-around;
`
export const StyledWrapperField = styled(StyledUsersField)`
	padding-top: 2rem;
`
export const StyledDetails = styled.details`
	${sharedProps}
	min-height: 5rem;
`
