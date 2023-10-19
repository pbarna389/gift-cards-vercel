/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-magic-numbers */
import type { FC } from 'react'
import { useContext } from 'react'

import { createPortal } from 'react-dom'

import { Button, CardImg, RemoveButton } from '@components/index'
import { BtnLink, Wrapper as CartItemWrapper } from '@constants/styles'
import type { ICheckout } from '@context/CheckoutContext'
import { CheckoutContext } from '@context/CheckoutContext'
import { useCartHandler } from '@hooks/useCartHandler'

import type { CheckoutDataInter } from '../../@types/giftcards'
import { CartSidebarWrapper, CloseSideBar } from './CartSidebar.style'

export const CartSidebar: FC = (): JSX.Element => {
	const { checkoutState } = useContext<ICheckout>(CheckoutContext)

	const handleCart = useCartHandler()

	if (
		checkoutState?.cartVisibility ||
		(!checkoutState?.cartVisibility && checkoutState?.cartShow)
	) {
		return createPortal(
			<CartSidebarWrapper
				className={`cartsidebar ${
					checkoutState?.cartShow && checkoutState.cartVisibility ? 'active' : ''
				}`}
			>
				<div style={{ width: 'fit-content', height: 'fit-content' }} onClick={handleCart}>
					<BtnLink to="/checkout">
						<Button iconType="order" label="Check out" />
					</BtnLink>
				</div>
				{checkoutState &&
					checkoutState.data.map((gift: CheckoutDataInter) => (
						<CartItemWrapper
							className="cart-item-wrapper"
							key={`cardImg-wrapper-${gift.name}-${gift.amount}`}
						>
							<h2>{gift.name}</h2>
							<CardImg
								className="zoomable-card"
								card={gift}
								key={`${gift.name}-${gift.amount}`}
								showAmount={true}
							/>
							<RemoveButton gift={gift} />
						</CartItemWrapper>
					))}
				<CloseSideBar className="sidebar-close" onClick={handleCart}>
					<span className="first" />
					<span className="second" />
				</CloseSideBar>
			</CartSidebarWrapper>,
			document.body
		)
	}

	return <></>
}
