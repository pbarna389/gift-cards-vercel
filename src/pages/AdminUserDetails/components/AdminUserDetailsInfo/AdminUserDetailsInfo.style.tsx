import { Wrapper } from '@constants/styles'
import { ModalSubmitButton } from '@pages/AdminGiftCardModify/components/ModalChangeGiftCard.style'
import { styled } from 'styled-components'

export const StyledDetailsInfoWrapper = styled(Wrapper)`
	justify-content: start;
	margin-top: 5rem;
	gap: 2rem;
`
export const StyledDetails = styled(Wrapper)`
	flex-direction: column;
	font-size: 1.7rem;
	gap: 2rem;
	align-items: start;
`
export const StyledBtnSubmit = styled(ModalSubmitButton)`
	align-self: self-start;
`
