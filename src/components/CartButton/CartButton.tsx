import type { FC } from 'react'
import { useContext } from 'react'

import { Icons } from '@components/index'
import { getAmount } from '@constants/index'
import type { ICheckout } from '@context/index'
import { CheckoutContext } from '@context/index'
import { useCartHandler } from '@hooks/useCartHandler'

import { CartWrapper, SelectedGiftCounter } from './CartButton.style'

export const CartButton: FC = (): JSX.Element => {
	const { checkoutState } = useContext<ICheckout>(CheckoutContext)
	const handleCart = useCartHandler()

	return (
		<CartWrapper className={`${checkoutState?.data.length ? 'active' : ''}`}>
			<Icons category="cart" handleClick={handleCart} visibility={checkoutState?.cartVisibility} />
			<SelectedGiftCounter className="gift-counter" onClick={handleCart}>
				{checkoutState?.data && getAmount(checkoutState?.data)}
			</SelectedGiftCounter>
		</CartWrapper>
	)
}
