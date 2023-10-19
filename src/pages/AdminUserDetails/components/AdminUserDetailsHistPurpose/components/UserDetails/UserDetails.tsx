import type { FC } from 'react'

import { convertSentence } from '@constants/constants'

import { UserDetailsEachGift } from '../UserDetailsEachGift/UserDetailsEachGift'
import { StyledDetails } from './UserDetails.styled'

import type { PrevPurchase } from '$types/giftcards'

interface UserDetailsProps {
	purchases: PrevPurchase
}

export const UserDetails: FC<UserDetailsProps> = ({ purchases }) => {
	return (
		<StyledDetails>
			<summary>
				<span>Total cards bought: {purchases.gifts.length}</span>
				<span> ought at {purchases.boughtTime}</span>
				<span> total cost of cards: {purchases.cost}</span>
				<span> Status of delivery: {convertSentence(purchases.deliveryStatus)}</span>
			</summary>
			<div>
				{purchases.gifts.map((gift) => (
					<UserDetailsEachGift
						gift={gift}
						purchase={purchases.deliveryStatus}
						key={`${gift.id}-${gift.price}`}
					/>
				))}
			</div>
		</StyledDetails>
	)
}
