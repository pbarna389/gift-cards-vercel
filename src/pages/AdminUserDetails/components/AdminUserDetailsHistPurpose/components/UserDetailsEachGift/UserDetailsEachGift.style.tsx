import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const StyledDetailsWrapper = styled(Wrapper)`
	font-size: 1rem;
	flex-flow: row wrap;
	justify-content: start;
	margin-top: 1rem;
	gap: 1rem;
	border-bottom: 2px solid #707070;

	& span {
		font-size: 1.4rem;
		text-align: start;
	}
`
