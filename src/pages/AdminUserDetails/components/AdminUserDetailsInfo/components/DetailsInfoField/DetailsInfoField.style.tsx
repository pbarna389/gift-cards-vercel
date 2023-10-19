import { styled } from 'styled-components'

export const DetailsLabel = styled.label`
	color: #c5c5c5;
	display: flex;
	gap: 0.5rem;

	&:hover {
		color: rgb(255 255 255 / 90%);
	}

	@media screen and (width < 672px) {
		font-size: 1.2rem;
	}
`
export const StyledPrevPurchase = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`
