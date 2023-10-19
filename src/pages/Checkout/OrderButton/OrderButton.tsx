import { useContext } from 'react'

import { Button } from '@components/index'
import { BtnLink } from '@constants/styles'
import type { ICheckout, ILogin } from '@context/index'
import { CheckoutContext, LoginContext } from '@context/index'
import { useHandleOrder } from '@hooks/useHandleOrder'

export const OrderButton = () => {
	const { loginState } = useContext<ILogin>(LoginContext)
	const { checkoutState } = useContext<ICheckout>(CheckoutContext)
	const handleOrderClick = useHandleOrder()

	return (
		<BtnLink to={'/'}>
			<Button
				label="Order"
				iconType={'order'}
				disabled={
					!loginState?.user ||
					(!checkoutState?.data.length && loginState?.user) ||
					// eslint-disable-next-line no-magic-numbers
					(checkoutState?.fullPrice && loginState?.user.coins - checkoutState.fullPrice <= 0)
						? true
						: false
				}
				handleOrder={() => void handleOrderClick()}
			/>
		</BtnLink>
	)
}
