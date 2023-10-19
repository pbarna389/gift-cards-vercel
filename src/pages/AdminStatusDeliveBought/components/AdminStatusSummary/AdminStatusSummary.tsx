import type { FC } from 'react'

import type { CheckoutDataInter } from '$types/giftcards'

export const AdminStatusSummary: FC<{ prevPurchase: CheckoutDataInter }> = ({ prevPurchase }) => {
	return (
		<div style={{ display: 'flex', gap: '1rem' }}>
			<span>name: {prevPurchase.name} </span>
			<span> amount of bought gifts: {prevPurchase.amount} </span>
			<span> price of gift: {prevPurchase.price} </span>
			<span> region: {prevPurchase.region}</span>
		</div>
	)
}
