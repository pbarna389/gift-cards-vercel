import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type { ItemAction, ItemReducerInitStateInter } from '@reducers/index'
import { ItemInitialState, ItemReducer } from '@reducers/index'

interface ItemContextProps {
	children: React.ReactNode
}

export interface IItems {
	itemDispatch: React.Dispatch<ItemAction> | null
	itemState: ItemReducerInitStateInter | null
}

const ItemBaseValue = {
	itemState: null,
	itemDispatch: null,
}

export const ItemContext = createContext<IItems>(ItemBaseValue)

export const ItemContextProvider: FC<ItemContextProps> = ({ children }) => {
	const [itemState, itemDispatch] = useReducer(ItemReducer, ItemInitialState)

	return (
		<ItemContext.Provider
			value={{
				itemDispatch,
				itemState,
			}}
		>
			{children}
		</ItemContext.Provider>
	)
}
