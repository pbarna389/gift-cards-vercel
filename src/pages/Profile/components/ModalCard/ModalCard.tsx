import type { FC } from 'react'

import { AddButton, CardImg, ItemPrice } from '@components/index'
import { CardExpander, ModalCardWrapper } from '@pages/Profile/Profile.style'

import type { CheckoutDataInter } from '$types/giftcards'

interface ModalCardProps {
	gift: CheckoutDataInter
}

export const ModalCard: FC<ModalCardProps> = ({ gift }): JSX.Element => {
	return (
		<>
			<CardExpander key={`expand-${gift.name}`}>
				<h4>{gift.name}</h4>
				<ModalCardWrapper className="modal-card-wrapper">
					<CardImg card={gift} className="profile-card" showAmount={true} showRegion={true} />
					<ItemPrice price={gift.price} />
					<AddButton card={gift} label="Reorder" />
				</ModalCardWrapper>
			</CardExpander>
		</>
	)
}
