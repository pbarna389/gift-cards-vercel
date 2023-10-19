import { styled } from 'styled-components'

import { Wrapper } from '../../../../constants/styles'

export const StyledUsersHeader = styled(Wrapper)`
	flex-direction: row;
	justify-content: space-between;

	@media screen and (width <= 776px) {
		justify-content: center;
		flex-direction: column;
	}
`
export const StyledUserHeadersInfo = styled(Wrapper)`
	flex-direction: row;
	gap: 1rem;

	@media screen and (width <= 480px) {
		justify-content: center;
		flex-direction: column;
	}
`
