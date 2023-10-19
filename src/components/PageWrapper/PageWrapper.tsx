import type { FC } from 'react'
import { useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { combineStringConverter, stringToArray, stringToLowerCase } from '@constants/index'
import type { IGiftCards, IItems, IStatus } from '@context/index'
import { GiftCardContext, ItemContext, StatusContext } from '@context/index'
import { ErrorPage } from '@pages/index'

import type { GiftCardInter } from '../../@types/giftcards'

interface PageWrapperProps {
	children: React.ReactNode
}

const filterData = (array: GiftCardInter[], itemName: string) => {
	return array.filter((item) => item.name.toLowerCase() === itemName)
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
	const { giftCardState } = useContext<IGiftCards>(GiftCardContext)

	const { itemState, itemDispatch } = useContext<IItems>(ItemContext)

	const { statusState, statusDispatch } = useContext<IStatus>(StatusContext)

	const { category, item } = useParams()

	useEffect(() => {
		if (!itemState?.data && item && giftCardState?.data) {
			const convertedItemName = combineStringConverter(
				stringToLowerCase,
				stringToArray,
				item,
				'_',
				' '
			)

			const newItem = filterData(giftCardState.data, convertedItemName)[0]

			if (!newItem && statusDispatch) {
				statusDispatch({ type: 'SET_ERROR' })
			} else {
				if (itemDispatch) {
					itemDispatch({ type: 'LOAD_DATA', payload: { data: newItem, category } })
				}
			}
		}
	}, [giftCardState, itemState, category, item, itemDispatch, statusDispatch])

	if (statusState?.error) {
		return <ErrorPage />
	}
	if (statusState?.loading) {
		return <div>Loading...</div>
	}

	return <div>{children}</div>
}
