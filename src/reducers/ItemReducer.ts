import type { Reducer } from 'react'

import type { ActionTypes, GiftCardInter } from '../@types/giftcards'

export interface ItemReducerInitStateInter {
	category?: string
	data?: GiftCardInter
}

export const ItemInitialState: ItemReducerInitStateInter = {
	category: undefined,
	data: undefined,
}

type PayloadType = {
	category?: string
	data?: GiftCardInter
}

export interface ItemAction extends ActionTypes<PayloadType> {
	type: 'LOAD_DATA' | 'RESET'
}

export const ItemReducer: Reducer<ItemReducerInitStateInter, ItemAction> = (
	state: ItemReducerInitStateInter,
	action: ItemAction
) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				...state,
				data: action.payload?.data,
				category: action.payload?.category,
			}
		case 'RESET':
			return {
				...state,
				data: undefined,
			}
		default:
			return state
	}
}
