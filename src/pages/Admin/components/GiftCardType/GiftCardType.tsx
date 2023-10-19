import { type FC, useContext } from 'react'

import { headerAdminGifts } from '@constants/constants'
import type { IGiftCards } from '@context/GiftCardContext'
import { GiftCardContext } from '@context/GiftCardContext'

import { GiftCardFieldWrapper, GiftLine } from '../GiftCardField/GiftCardField.style'

export const GiftCardType: FC = () => {
	const { giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)

	const handleSortChange = (sorting: string) => {
		if (giftCardDispatch) {
			giftCardDispatch({
				type: 'SORT_BY',
				payload: { sortBy: sorting },
			})
		}
	}
	return (
		<GiftCardFieldWrapper>
			{headerAdminGifts.map((sortBy) => (
				<GiftLine
					key={`${sortBy.link}-${sortBy.name}`}
					onClick={() => handleSortChange(sortBy.link)}
				>
					<span>{sortBy.name}</span>
				</GiftLine>
			))}
		</GiftCardFieldWrapper>
	)
}
