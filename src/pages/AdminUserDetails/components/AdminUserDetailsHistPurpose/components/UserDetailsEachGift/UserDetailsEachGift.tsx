import { type FC, useContext } from 'react'

import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'

import { StyledDetailsWrapper } from './UserDetailsEachGift.style'

import type { CheckoutDataInter, StatusOfDeliveryType } from '$types/giftcards'

export const UserDetailsEachGift: FC<{
	gift: CheckoutDataInter
	purchase: StatusOfDeliveryType
}> = ({ gift, purchase }) => {
	const { userState } = useContext<IUser>(AdminUserContext)

	return (
		userState?.data && (
			<StyledDetailsWrapper>
				<div className={purchase}>
					<span>name: {gift.name}</span>
					<span>category: {gift.categoryID}</span>
					<span>price: {gift.price}</span>
					<span>region: {gift.region}</span>
				</div>
			</StyledDetailsWrapper>
		)
	)
}
