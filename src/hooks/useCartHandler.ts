/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-magic-numbers */
import { useContext, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import type { ICheckout } from '@context/CheckoutContext'
import { CheckoutContext } from '@context/CheckoutContext'

export const useCartHandler = (): (() => void) => {
	const { pathname } = useLocation()
	const { checkoutState, checkoutDispatch } = useContext<ICheckout>(CheckoutContext)
	const [cartTimeout, setCartTimeout] = useState<NodeJS.Timeout>()

	useEffect(() => {
		if (!checkoutDispatch) {
			return
		}
		if (checkoutState?.cartVisibility && !checkoutState?.cartShow) {
			const id = setTimeout(() => {
				checkoutDispatch({ type: 'SET_CART_SHOW', payload: { changeCartShow: true } })
			}, 10)

			setCartTimeout(id)

			return () => clearTimeout(cartTimeout)
		}
		if (!checkoutState?.cartVisibility && checkoutState?.cartShow) {
			const id = setTimeout(() => {
				checkoutDispatch({ type: 'SET_CART_SHOW', payload: { changeCartShow: false } })
			}, 505)

			setCartTimeout(id)

			return () => clearTimeout(cartTimeout)
		}
		if (!checkoutState?.data.length) {
			checkoutDispatch({
				type: 'SET_CART_VISIBLITY',
				payload: { changeVisibility: false },
			})
			const id = setTimeout(() => {
				checkoutDispatch({ type: 'SET_CART_SHOW', payload: { changeCartShow: false } })
			}, 505)

			setCartTimeout(id)

			return () => clearTimeout(cartTimeout)
		}
	}, [
		checkoutState?.cartShow,
		checkoutState?.cartVisibility,
		checkoutDispatch,
		checkoutState?.data,
	])

	const handleCart = (): void => {
		if (!pathname.includes('checkout') && checkoutDispatch) {
			if (!checkoutState?.cartVisibility) {
				checkoutDispatch({
					type: 'SET_CART_VISIBLITY',
					payload: { changeVisibility: true },
				})
			}
			if (checkoutState?.cartShow && checkoutState.cartVisibility) {
				checkoutDispatch({
					type: 'SET_CART_VISIBLITY',
					payload: { changeVisibility: false },
				})
			}
		}
	}

	return handleCart
}
