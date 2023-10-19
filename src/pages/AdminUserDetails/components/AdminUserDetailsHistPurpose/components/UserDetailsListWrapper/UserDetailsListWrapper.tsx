/* eslint-disable no-magic-numbers */
import type { FC } from 'react'

import { UserDetails } from '../UserDetails/UserDetails'
import { StyledUserDetailsWrapper } from './UserDetailsListWrapper.style'

import type { PrevPurchase } from '$types/giftcards'

export const UserDetailsListWrapper: FC<{ prevPurchases: PrevPurchase[] }> = ({
	prevPurchases,
}) => {
	return (
		<StyledUserDetailsWrapper>
			{prevPurchases.length === 0 ? (
				<p>There is no purchase yet</p>
			) : (
				prevPurchases.map((purchase) => (
					<UserDetails purchases={purchase} key={`${purchase.boughtTime}-${purchase.cost}`} />
				))
			)}
		</StyledUserDetailsWrapper>
	)
}
