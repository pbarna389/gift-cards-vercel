import type { FC } from 'react'
import { useContext } from 'react'

import { Button } from '@components/index'
import { handleRemoveClick } from '@constants/index'
import type { ICheckout, ILogin } from '@context/index'
import { CheckoutContext, LoginContext } from '@context/index'
import { useToasterCard } from '@hooks/index'

import type { CheckoutDataInter } from '../../@types/giftcards'

interface RemoveButtonProps {
	gift: CheckoutDataInter
}

export const RemoveButton: FC<RemoveButtonProps> = ({ gift }) => {
	const { loginState } = useContext<ILogin>(LoginContext)
	const { checkoutState, checkoutDispatch } = useContext<ICheckout>(CheckoutContext)

	const handleRemoveToaster = useToasterCard()

	return (
		<div className="remove-wrapper">
			<Button
				label="Remove"
				iconType={'remove'}
				handleOrder={() => {
					handleRemoveToaster(
						`${
							loginState?.user
								? `${gift.name} got removed from your cart!`
								: 'You should be logged in!'
						}`,
						`${loginState?.user ? 'remove-item' : 'error'}`
					)
					handleRemoveClick(gift, checkoutDispatch, checkoutState)
				}}
			/>
		</div>
	)
}
