import { styled } from 'styled-components'

export const TooltipDiv = styled.div`
	transform: translateX(-50%);
	position: absolute;
	top: 120%;
	left: 55%;
	padding: 0.25rem 0.5rem;
	font-size: 0.8rem;
	text-align: center;
	white-space: nowrap;
	border-radius: 5px;
	background-color: #111;
	opacity: 0;
	transition: opacity 0.2s ease-in, z-index 0.2s ease-in;
	cursor: default;
	user-select: none;
	z-index: -1;

	&.shown {
		opacity: 1;
		z-index: 1;
	}
`
