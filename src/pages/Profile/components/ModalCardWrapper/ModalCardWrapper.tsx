import { useContext } from 'react'

import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'

import { ModalCard } from '../ModalCard/ModalCard'

import type { CheckoutDataInter } from '$types/giftcards'

const ModalCardWrapper = () => {
	const { modalGiftItems } = useContext<IModal>(ModalContext)

	return (
		<>
			{modalGiftItems?.length &&
				modalGiftItems.map((gift: CheckoutDataInter) => (
					<ModalCard key={`modalCard-${gift.name}-${gift.id}-${gift.amount}`} gift={gift} />
				))}
		</>
	)
}

export default ModalCardWrapper
