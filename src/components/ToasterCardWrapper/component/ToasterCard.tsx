import type { Dispatch, FC, SetStateAction } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { ToasterCardDiv } from './ToasterCard.style'

import type { ToasterCardsInter } from '$types/giftcards'

interface ToasterCardProps {
	setToasterCards: Dispatch<SetStateAction<ToasterCardsInter[]>> | null
	toaster: ToasterCardsInter | null
}

export const ToasterCard: FC<ToasterCardProps> = ({ toaster, setToasterCards }): JSX.Element => {
	const [toasterTO, setToasterTO] = useState<NodeJS.Timeout>()
	const [removeTO, setRemoveTO] = useState<NodeJS.Timeout>()
	const [removeAnim, setRemoveAnim] = useState<boolean>(false)

	const filterElement = useCallback(() => {
		if (setToasterCards) {
			setToasterCards((prev: ToasterCardsInter[] | null) =>
				prev
					? [
							...prev.filter(
								(createdToaster: ToasterCardsInter) => createdToaster.id !== toaster?.id
							),
					  ]
					: []
			)
		}
	}, [setToasterCards, toaster?.id])

	useEffect(() => {
		if (setToasterCards && !toasterTO) {
			const timeoutTime = 3900

			const timeoutID = setTimeout(() => {
				filterElement()
			}, timeoutTime)
			setToasterTO(timeoutID)
		}
		return () => {
			clearTimeout(toasterTO)
		}
	}, [toaster, setToasterCards, filterElement, toasterTO])

	const removeElement = () => {
		if (setToasterCards) {
			filterElement()

			clearTimeout(toasterTO)

			if (removeTO) {
				clearTimeout(removeTO)
			}
		}
	}

	const handleClickForRemove = () => {
		if (toasterTO) {
			const timeoutTime = 751
			setRemoveAnim(true)
			const removalTOID = setTimeout(() => {
				removeElement()
			}, timeoutTime)
			setRemoveTO(removalTOID)
		}
	}

	return (
		<ToasterCardDiv
			className={`${toaster ? toaster.type : ''} ${removeAnim ? 'remove' : ''}`}
			onClick={handleClickForRemove}
		>
			{toaster?.text}
		</ToasterCardDiv>
	)
}
