import { useContext } from 'react'

import type { ICheckout, ILogin } from '@context/index'
import { CheckoutContext, LoginContext } from '@context/index'

import { useModifiedData } from './useModifiedData'
import { useToasterCard } from './useToasterCard'

import type { UserInter } from '$types/giftcards'

export const useHandleOrder = () => {
	const { loginState, loginDispatch } = useContext<ILogin>(LoginContext)

	const { checkoutState, checkoutDispatch } = useContext<ICheckout>(CheckoutContext)

	const addData = useModifiedData<UserInter>('PUT')

	const handleToaster = useToasterCard()

	const handleOrder = async (): Promise<void> => {
		if (
			loginDispatch &&
			loginState?.user &&
			checkoutState?.data.length &&
			checkoutState.fullPrice
		) {
			const oldUser: UserInter = { ...loginState.user }
			const { data } = checkoutState
			const { fullPrice } = checkoutState

			const currentTime: string = new Intl.DateTimeFormat('en-GB', {
				dateStyle: 'short',
				timeStyle: 'short',
				timeZone: 'Europe/Kirov',
			}).format(new Date())

			const newUser: UserInter = {
				...oldUser,
				coins: oldUser?.coins && fullPrice ? oldUser.coins - fullPrice : oldUser.coins,
				prevPurchase: [
					...oldUser.prevPurchase,
					{
						gifts: data,
						boughtTime: currentTime,
						cost: fullPrice,
						deliveryStatus: 'JUST_BOUGHT',
						status: '1',
					},
				],
			}

			await addData(newUser, 'users', `/${newUser.id}`)
			loginDispatch({ type: 'PURCHASE_ITEM', payload: { user: newUser } })

			localStorage.setItem('user', JSON.stringify(newUser))
			localStorage.removeItem('checkout')

			if (handleToaster) {
				handleToaster(
					// eslint-disable-next-line no-magic-numbers
					`Item${data.length > 1 ? 's' : ''} purchased!  Enjoy your gift!`,
					'purchase'
				)
			}
			if (checkoutDispatch) {
				checkoutDispatch({ type: 'RESET', payload: null })
			}
		}
	}

	return handleOrder
}
