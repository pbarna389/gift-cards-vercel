import type { FC } from 'react'
import { createContext, useEffect, useReducer } from 'react'

import { useLocalStorage } from '@hooks/useLocalStorage'
import type { CheckoutAction, CheckoutReducerInitStateInter } from '@reducers/index'
import { CheckoutInitialState, CheckoutReducer } from '@reducers/index'

import type { CheckoutDataInter } from '$types/giftcards'

interface CheckoutContextProps {
	children: React.ReactNode
}

export interface ICheckout {
	checkoutDispatch: React.Dispatch<CheckoutAction> | null
	checkoutState: CheckoutReducerInitStateInter | null
}

const checkoutBaseValue = {
	checkoutState: null,
	checkoutDispatch: null,
}

export const CheckoutContext = createContext<ICheckout>(checkoutBaseValue)

export const CheckoutContextProvider: FC<CheckoutContextProps> = ({ children }) => {
	const [checkoutState, checkoutDispatch] = useReducer(CheckoutReducer, CheckoutInitialState)

	const { localStorageItem } = useLocalStorage('checkout')

	useEffect(() => {
		if (localStorageItem) {
			checkoutDispatch({
				type: 'RESTORE_DATA',
				payload: { prevData: localStorageItem as CheckoutDataInter[] },
			})
		}
	}, [localStorageItem])

	return (
		<CheckoutContext.Provider
			value={{
				checkoutState,
				checkoutDispatch,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	)
}
