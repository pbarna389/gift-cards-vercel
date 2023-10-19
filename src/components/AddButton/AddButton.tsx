/* eslint-disable no-magic-numbers */
import type { FC } from 'react'
import { useContext } from 'react'

import type { ButtonTypes } from '@components/Button/Button'
import { handleAddItemClick } from '@constants/constants'
import type { ICheckout } from '@context/CheckoutContext'
import { CheckoutContext } from '@context/CheckoutContext'
import type { ILogin } from '@context/LoginContext'
import { LoginContext } from '@context/LoginContext'
import { useToasterCard } from '@hooks/index'

import { Button } from '..'
import { AddButtonWrapper } from './AddButton.style'

import type { CheckoutDataInter } from '$types/giftcards'

interface AddButtonProps {
	card: CheckoutDataInter
	label?: string
	order?: ButtonTypes
}

export const AddButton: FC<AddButtonProps> = ({
	card,
	label = '',
	order = 'order',
}): JSX.Element => {
	const { loginState } = useContext<ILogin>(LoginContext)
	const { checkoutState, checkoutDispatch } = useContext<ICheckout>(CheckoutContext)

	const handleToaster = useToasterCard()

	const isDisabled =
		loginState?.user?.coins && checkoutState
			? loginState?.user?.coins < checkoutState?.fullPrice
			: null

	return (
		<AddButtonWrapper
			className="add-button"
			onClick={() => {
				handleToaster(
					`${
						loginState?.user ? `${card.name} got added to you cart!` : 'Yous should be logged in!'
					}`,
					`${loginState?.user ? 'add-item' : 'error'}`
				)
				handleAddItemClick(
					{ ...card, amount: card.amount ? card.amount : 1 },
					checkoutDispatch,
					checkoutState,
					null,
					loginState?.user
				)
			}}
		>
			<Button iconType={order} label={label} disabled={isDisabled ? isDisabled : false} />
		</AddButtonWrapper>
	)
}
