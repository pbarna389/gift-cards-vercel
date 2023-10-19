import type { FC } from 'react'
import { createContext, useEffect, useReducer } from 'react'

import { API } from '@constants/index'
import { useFetch } from '@hooks/useFetch'
import type { GiftCardAction, GiftCardInStateInter } from '@reducers/index'
import { GiftCardInitialState, GiftCardsReducer } from '@reducers/index'

import type { GiftCardInter } from '../@types/giftcards'

interface GiftCardContextProps {
	children: React.ReactNode
}

export interface IGiftCards {
	giftCardDispatch: React.Dispatch<GiftCardAction> | null
	giftCardState: GiftCardInStateInter | null
}

const baseValues = {
	giftCardState: null,
	giftCardDispatch: null,
}

export const GiftCardContext = createContext<IGiftCards>(baseValues)

export const GiftCardContextProvider: FC<GiftCardContextProps> = ({ children }) => {
	const [giftCardState, giftCardDispatch] = useReducer(GiftCardsReducer, GiftCardInitialState)

	const GiftData = useFetch<GiftCardInter[]>(
		`${API}all?_sort=categoryID`,
		!giftCardState.modifiedData
	)

	useEffect(() => {
		giftCardDispatch({
			type: 'RELOAD_MODIFIED_DATA',
			payload: { data: GiftData, modifiedData: true },
		})
	}, [GiftData])

	useEffect(() => {
		giftCardDispatch({
			type: 'LOAD_DATA',
			payload: { data: GiftData, modifiedData: false },
		})
	}, [GiftData])

	return (
		<GiftCardContext.Provider
			value={{
				giftCardState,
				giftCardDispatch,
			}}
		>
			{children}
		</GiftCardContext.Provider>
	)
}
