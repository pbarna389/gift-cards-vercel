import { LinkBase, NameWrapper, PriceWrapper, ShortDescParagraph } from '@constants/styles'
import { styled } from 'styled-components'

export const ItemName = styled(NameWrapper)`
	width: fit-content;
	gap: 0.5rem;

	h2,
	p {
		margin: 0;
	}
`

export const ItemShDescParagraph = styled(ShortDescParagraph)`
	margin: 0;
`

export const ItemSharedStyle = {
	display: 'flex',
	alignItems: 'center',
	border: 'none',
	borderRadius: '0px',
	width: '1.8rem',
	height: '1.8rem',
	padding: '0',
}

export const CategoryLink = styled(LinkBase)`
	display: block;
	width: 100%;
`

export const CategoryWrapper = styled(PriceWrapper)`
	width: 100%;
	border: 2px solid rgb(255 255 255 / 50%);
	color: rgb(255 255 255 / 50%);
	margin-top: 1rem;
	transition: border-color 0.2s ease-in, color 0.2s ease-in;
	box-sizing: border-box;

	&:hover {
		border: 2px solid rgb(255 255 255);
		color: white;
	}

	.icon {
		width: inherit;

		&:last-child {
			padding: 0.5rem;
			justify-content: space-between;
			width: inherit;
			height: fit-content;
			gap: 0.5rem;
		}
	}
`
