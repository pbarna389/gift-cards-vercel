/* eslint-disable no-magic-numbers */
import type { Dispatch, FC, SetStateAction } from 'react'
import { createContext, useEffect, useState } from 'react'

import type { ToasterCardsInter } from '$types/giftcards'

export interface IToaster {
	setToasterCards: Dispatch<SetStateAction<ToasterCardsInter[]>> | null
	setToasterQuery: Dispatch<SetStateAction<ToasterCardsInter[]>> | null
	toasterCards: ToasterCardsInter[]
	toasterQuery: ToasterCardsInter[]
}

interface IToasterContextProps {
	children: React.ReactNode
}

const baseValues = {
	setToasterCards: null,
	setToasterQuery: null,
	toasterCards: [],
	toasterQuery: [],
}

export const ToasterContext = createContext<IToaster>(baseValues)

export const ToasterContextProvider: FC<IToasterContextProps> = ({ children }) => {
	const [toasterCards, setToasterCards] = useState<ToasterCardsInter[]>([])
	const [toasterQuery, setToasterQuery] = useState<ToasterCardsInter[]>([])

	useEffect(() => {
		if (toasterCards.length < 5 && toasterQuery.length) {
			const newQuery: ToasterCardsInter[] = [...toasterQuery]
			const firstQueryItem: ToasterCardsInter | undefined = newQuery.shift()

			const newToasterCards: ToasterCardsInter[] = firstQueryItem
				? [...toasterCards, firstQueryItem]
				: []

			if (newToasterCards) {
				setToasterCards(newToasterCards)
				setToasterQuery(newQuery)
			}
		}
	}, [toasterQuery, toasterCards])

	return (
		<ToasterContext.Provider
			value={{
				toasterCards,
				setToasterCards,
				toasterQuery,
				setToasterQuery,
			}}
		>
			{children}
		</ToasterContext.Provider>
	)
}
