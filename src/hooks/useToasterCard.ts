/* eslint-disable no-magic-numbers */
import { useContext } from 'react'

import type { IToaster } from '@context/index'
import { ToasterContext } from '@context/index'

import type { ToasterCardsInter, ToasterTypes } from '$types/giftcards'

export const useToasterCard = (): ((arg1: string, type: ToasterTypes, idx?: number) => void) => {
	const { toasterCards, setToasterCards, setToasterQuery } = useContext<IToaster>(ToasterContext)

	const handleToaster = (text: string, type: ToasterTypes = 'default', idx = 0) => {
		if (setToasterCards && setToasterQuery) {
			const creationTime = new Date()
			const newToasterCard: ToasterCardsInter = {
				id: `${text}-${creationTime.getDate()}-${creationTime.getHours()}-${creationTime.getMinutes()}-${creationTime.getSeconds()}-${creationTime.getMilliseconds()}-${
					idx + 1
				}`,
				text,
				type,
			}
			if (toasterCards.length < 5) {
				setToasterCards((prev: ToasterCardsInter[] | null) =>
					prev ? [...prev, newToasterCard] : [newToasterCard]
				)
			} else {
				setToasterQuery((prev: ToasterCardsInter[] | null) =>
					prev ? [...prev, newToasterCard] : [newToasterCard]
				)
			}
		}
	}

	return handleToaster
}
