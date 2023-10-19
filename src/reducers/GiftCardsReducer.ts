import type { Reducer } from 'react'

import { filterData } from '@constants/filterData'

import type { ActionTypes, GiftCardInter } from './../@types/giftcards'

export interface GiftCardInStateInter {
	category?: string
	data?: GiftCardInter[]
	filteredData?: GiftCardInter[]
	filterWord?: string
	modifiedData?: boolean
	shownData?: GiftCardInter[]
	sortBy?: string
	sortedDataByRegion?: GiftCardInter[]
}

export const GiftCardInitialState: GiftCardInStateInter = {
	category: 'all',
	data: undefined,
	shownData: undefined,
	filteredData: undefined,
	filterWord: '',
	modifiedData: true,
	sortBy: '',
	sortedDataByRegion: undefined,
}

interface PayloadType {
	categoryName?: string
	data?: GiftCardInter[]
	filterWord?: string
	modifiedData?: boolean
	shownData?: GiftCardInter[]
	sortBy?: string
	sortedDataByRegion?: GiftCardInter[]
}

export interface GiftCardAction extends ActionTypes<PayloadType> {
	type:
		| 'LOAD_DATA'
		| 'FILTER_DATA_CATEGORY'
		| 'FILTER_DATA_SEARCH'
		| 'CLEAN_SEARCH'
		| 'RESET'
		| 'RELOAD_MODIFIED_DATA'
		| 'SORT_BY'
		| 'RESET_REGION'
}

export const GiftCardsReducer: Reducer<GiftCardInStateInter, GiftCardAction> = (
	state: GiftCardInStateInter,
	action: GiftCardAction
) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				...state,
				data: action.payload?.data,
				shownData: action.payload?.data,
				modifiedData: action.payload?.modifiedData,
				loading: false,
			}
		case 'FILTER_DATA_CATEGORY':
			return {
				...state,
				shownData: filterData<GiftCardInter>(
					state.data,
					action.payload?.categoryName,
					'categoryID'
				),
				sortBy: 'all',
				category: action.payload?.categoryName,
				filteredData: undefined,
				filterWord: '',
				loading: false,
			}
		case 'FILTER_DATA_SEARCH':
			return {
				...state,
				filterWord: action.payload?.filterWord,
				filteredData: filterData<GiftCardInter>(
					state.shownData,
					action.payload?.filterWord,
					'name'
				),
			}
		case 'SORT_BY':
			return {
				...state,
				sortBy: action.payload?.sortBy,
				shownData:
					state.category === 'all'
						? filterData<GiftCardInter>(state.data, action.payload?.sortBy, 'region')
						: filterData<GiftCardInter>(
								filterData<GiftCardInter>(state.data, state.category, 'categoryID'),
								action.payload?.sortBy,
								'region'
						  ),
				sortedDataByRegion: action.payload?.sortedDataByRegion,
			}
		case 'RESET_REGION':
			return {
				...state,
				shownData: state.category !== 'all' ? state.sortedDataByRegion : state.data,
				sortBy: action.payload?.sortBy,
			}

		case 'CLEAN_SEARCH':
			return {
				...state,
				filteredData: undefined,
				filterWord: '',
				loading: false,
			}
		case 'RESET':
			return {
				...state,
				shownData: state.data,
				category: action.payload?.categoryName,
				filterWord: '',
				filteredData: undefined,
			}
		case 'RELOAD_MODIFIED_DATA':
			return {
				...state,
				modifiedData: action.payload?.modifiedData,
				data: action.payload?.data,
			}
		default:
			return state
	}
}
