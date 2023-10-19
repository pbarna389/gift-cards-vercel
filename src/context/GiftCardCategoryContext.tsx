import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type { GiftCardCategoryInStateInter, GiftCardsCategoryAction } from '@reducers/index'
import { GiftCardCategoryInitialState, GiftCardsCategoryReducer } from '@reducers/index'

interface GiftCardCategoryContextProps {
	children: React.ReactNode
}

export interface IGiftCategory {
	giftCardCategoryDispatch: React.Dispatch<GiftCardsCategoryAction> | null
	giftCardCategoryState: GiftCardCategoryInStateInter | null
}

const categoryBaseValues = {
	giftCardCategoryState: null,
	giftCardCategoryDispatch: null,
}

export const GiftCardCategoryContext = createContext<IGiftCategory>(categoryBaseValues)

export const GiftCardCategoryContextProvider: FC<GiftCardCategoryContextProps> = ({ children }) => {
	const [giftCardCategoryState, giftCardCategoryDispatch] = useReducer(
		GiftCardsCategoryReducer,
		GiftCardCategoryInitialState
	)

	return (
		<GiftCardCategoryContext.Provider
			value={{
				giftCardCategoryState,
				giftCardCategoryDispatch,
			}}
		>
			{children}
		</GiftCardCategoryContext.Provider>
	)
}
