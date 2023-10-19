import type { Dispatch, FC, SetStateAction } from 'react'
import { createContext, useState } from 'react'

import type { CheckoutDataInter } from '../@types/giftcards'

export interface ModalContextProps {
	children: React.ReactNode
}

export interface IModal {
	modalShow: boolean
	setModalShow: Dispatch<SetStateAction<boolean>> | null
	modalGiftItems?: CheckoutDataInter[]
	setModalGiftItems?: Dispatch<SetStateAction<CheckoutDataInter[]>> | null
}

const modalBaseValues = {
	modalShow: false,
	setModalShow: null,
	modalGiftItems: [],
	setModalGiftItems: null,
}

export const ModalContext = createContext<IModal>(modalBaseValues)

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
	const [modalShow, setModalShow] = useState<boolean>(false)
	const [modalGiftItems, setModalGiftItems] = useState<CheckoutDataInter[]>([])

	return (
		<ModalContext.Provider
			value={{
				modalShow,
				setModalShow,
				modalGiftItems,
				setModalGiftItems,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
