import { useContext } from 'react'

import { Button } from '@components/index'
import { ModalBtnWrapper } from '@components/Modal/Modal.style'
import { handleModalClose } from '@constants/index'
import type { IModal } from '@context/index'
import { ModalContext } from '@context/index'

export const ModalButtonWrapper = () => {
	const { setModalShow } = useContext<IModal>(ModalContext)

	return (
		<ModalBtnWrapper onClick={() => handleModalClose(setModalShow)}>
			<Button iconType="cancel" label="Close Modal" />
		</ModalBtnWrapper>
	)
}
