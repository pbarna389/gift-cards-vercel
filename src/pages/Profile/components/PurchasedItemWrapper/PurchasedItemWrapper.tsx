import type { FC } from 'react'
import { useContext } from 'react'

import { getAmount } from '@constants/index'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'

import { PurchasedItem } from '../Table/Table.style'

import type { CheckoutDataInter, PrevPurchase } from '$types/giftcards'

interface PurchasedItemWrapperProps {
	item: PrevPurchase
}

const PurchasedItemWrapper: FC<PurchasedItemWrapperProps> = ({ item }) => {
	const { setModalShow, setModalGiftItems } = useContext<IModal>(ModalContext)

	const handleModal = (item: CheckoutDataInter[]) => {
		if (setModalShow && setModalGiftItems) {
			setModalGiftItems(item)
			setModalShow(true)
		}
	}
	return (
		<PurchasedItem className="purchased-item" onClick={() => handleModal(item.gifts)}>
			<td>{item.boughtTime}</td>
			<td>{getAmount(item.gifts)}</td>
			<td>{item.cost}</td>
		</PurchasedItem>
	)
}

export default PurchasedItemWrapper
