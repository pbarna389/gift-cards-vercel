import type { FC } from 'react'
import { useContext } from 'react'

import { CardImg } from '@components/index'
import type { IGiftCards } from '@context/index'
import { GiftCardContext } from '@context/index'

import type { GiftCardInter } from '../../@types/giftcards'
import { RelatedItemWrapper } from './RelatedItems.style'

const selectCard = (length: number, itemsNeeded: number, array: number[] = []): number[] | void => {
	if (array.length === itemsNeeded) {
		return array
	}
	const newIdx = Math.floor(Math.random() * length)
	if (array.includes(newIdx)) {
		return selectCard(length, itemsNeeded, (array = [...array]))
	}

	return selectCard(length, itemsNeeded, (array = [...array, newIdx]))
}

export const RelatedItems: FC = () => {
	const { giftCardState } = useContext<IGiftCards>(GiftCardContext)

	if (giftCardState?.data) {
		const { data } = giftCardState

		const itemsNeeded = 4
		const indexes = selectCard(data.length, itemsNeeded, [])

		const relatedItems: GiftCardInter[] | void = indexes
			? indexes.map((idx: number) => data[idx])
			: indexes

		return (
			<RelatedItemWrapper>
				{relatedItems?.map((item: GiftCardInter) => (
					<CardImg key={`${item.name}-${item.id}`} card={item} />
				))}
			</RelatedItemWrapper>
		)
	}
}
