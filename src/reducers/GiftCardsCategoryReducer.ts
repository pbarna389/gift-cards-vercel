import type { Reducer } from 'react'

import type { ActionTypes, GiftCardInter, PayloadType } from '../@types/giftcards'

type CategoryPayload = Omit<PayloadType, 'filteredData' & 'filterWord' & 'shownData'>

export interface GiftCardsCategoryAction extends ActionTypes<CategoryPayload> {
	type: 'LOADING' | 'CHANGE_SELECTED_ID' | 'ERROR' | 'ADD_CAT_DATA'
}

export interface GiftCardCategoryInStateInter {
	categoryName?: string
	data?: GiftCardInter[]
	error?: string
	loading?: boolean
	selectedID?: string
}

export const GiftCardCategoryInitialState: GiftCardCategoryInStateInter = {
	data: undefined,
	loading: false,
	categoryName: 'all',
	error: undefined,
	selectedID: undefined,
}

export const GiftCardsCategoryReducer: Reducer<
	GiftCardCategoryInStateInter,
	GiftCardsCategoryAction
> = (state: GiftCardCategoryInStateInter, action: GiftCardsCategoryAction) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				loading: action.payload?.loading,
			}
		case 'ADD_CAT_DATA':
			return {
				...state,
				data: action.payload?.data,
				loading: false,
			}
		case 'CHANGE_SELECTED_ID':
			return {
				...state,
				categoryName: action.payload?.categoryName,
				loading: action.payload?.loading,
			}
		case 'ERROR':
			return {
				...state,
				error: action.payload?.error,
				loading: action.payload?.loading,
			}
		default:
			return state
	}
}
