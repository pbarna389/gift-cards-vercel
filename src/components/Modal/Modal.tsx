import type { FC } from 'react'
import { useContext } from 'react'

import { createPortal } from 'react-dom'

import type { IModal } from '@context/index'
import { ModalContext } from '@context/index'

import { ModalWrapper } from './Modal.style'

interface ModalProps {
	children: React.ReactNode
	route?: Element | DocumentFragment | null
}

export const Modal: FC<ModalProps> = ({ children, route = document.body }): JSX.Element => {
	const { modalShow } = useContext<IModal>(ModalContext)

	if (modalShow && route) {
		return createPortal(
			<ModalWrapper className="modal">
				<div className="modal-children-wrapper">{children}</div>
			</ModalWrapper>,
			route
		)
	}
	return <></>
}
