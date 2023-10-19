import { sharedProps, Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const ItemContentWrapper = styled.div`
	${sharedProps}
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin: 3rem;

	button {
		font-size: 1rem;
		padding: 0.5rem;
	}

	@media screen and (width <= 575px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-justify: inter-word;

		div,
		a {
			margin: 0 auto;
		}
	}
`

export const DetailWrapper = styled(Wrapper)`
	font-size: 1.35rem;
	gap: 1rem;
`

export const AttentionMessage = styled.div`
	position: relative;
	box-sizing: border-box;
	color: #495057;
	padding: 1rem;
	background-color: #ced4da;
	border: 1px solid #adb5bd;
	border-radius: 5px;
	width: 100%;
	height: fit-content;

	div {
		overflow-wrap: break-word;
		justify-self: flex-start;
	}

	&::before {
		box-sizing: border-box;
		content: '';
		position: absolute;
		height: 3px;
		background-color: #e2e3e5;
		width: calc(100% * 1.2vw);
		left: 1.2vw;
		right: 1.2vw;
		top: 4rem;
	}

	h2 {
		width: fit-content;
		margin: 0 auto;
		margin-bottom: 1rem;
	}
`
