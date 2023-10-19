import { styled } from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	margin: 1rem;
	text-align: left;
	background-color: #212529;

	thead,
	tbody {
		tr {
			th,
			td {
				width: 33.3%;
				border-bottom: 1px solid #606972;
				text-align: center;
			}
		}
	}
`

export const PurchasedItem = styled.tr`
	transition: outline 0.4s ease-in, font-size 0.4s ease-in;
	font-size: 1.25rem;
	margin: 0.5rem;
	outline: 0 solid #606972;

	&:hover {
		outline: 3px solid #606972;
		cursor: pointer;
		font-size: 1.5rem;
	}
`
