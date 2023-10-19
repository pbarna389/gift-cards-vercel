import type { FC } from 'react'
import { useContext } from 'react'

import { createPortal } from 'react-dom'

import type { IToaster } from '@context/ToasterContext'
import { ToasterContext } from '@context/ToasterContext'

import { ToastCardWrapperDiv } from './ToasterCardWrapper.styles'
import { ToasterCard } from '.'

import type { ToasterCardsInter } from '$types/giftcards'

export const ToasterCardWrapper: FC = (): JSX.Element => {
	const { toasterCards, setToasterCards } = useContext<IToaster>(ToasterContext)

	if (toasterCards?.length) {
		return createPortal(
			<ToastCardWrapperDiv>
				{toasterCards?.map((toaster: ToasterCardsInter) => (
					<ToasterCard
						key={`toaster-${toaster.id}`}
						toaster={toaster}
						setToasterCards={setToasterCards}
					/>
				))}
			</ToastCardWrapperDiv>,
			document.body
		)
	}
	return <></>
}
