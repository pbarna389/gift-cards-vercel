import { styled } from 'styled-components'

export const WrapperGiftsAdminUsers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 5rem 0;

	@media screen and (width <= 565px) {
		width: 100%;
		margin: 2rem 0;
		gap: 3rem;
		align-items: center;
	}
`
