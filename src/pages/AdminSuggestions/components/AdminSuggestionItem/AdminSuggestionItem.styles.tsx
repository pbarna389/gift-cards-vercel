import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

export const AdminSuggestionItemWrapper = styled(Wrapper)`
	padding: 1rem;
	padding-left: 0;

	form {
		.profile-suggestion {
			div {
				display: flex;
				flex-direction: column;

				.btn-wrapper {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 1rem;
				}
			}
		}
	}
`
