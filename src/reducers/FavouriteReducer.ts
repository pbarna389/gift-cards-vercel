import type { Reducer } from 'react'

import { filterData } from '@constants/filterData'

import type { ActionTypes, FavouritedItem, GiftCardInter } from './../@types/giftcards.d'

export interface FavouriteInitialStateInter {
	data: GiftCardInter[] | undefined
	favouriteList: FavouritedItem | undefined
	category?: string
	filteredData?: GiftCardInter[]
	filterWord?: string
	shownData?: GiftCardInter[]
	sortBy?: string
	sortedDataByRegion?: GiftCardInter[]
}

export const FavouriteInitialState = {
	category: 'all',
	data: [],
	favouriteList: undefined,
	shownData: undefined,
	filteredData: undefined,
	filterWord: '',
	sortBy: '',
}

type PayloadType = {
	categoryName?: string
	data?: GiftCardInter[]
	favouriteList?: FavouritedItem
	filterWord?: string
	shownData?: GiftCardInter[]
	sortBy?: string
	sortedDataByRegion?: GiftCardInter[]
}

export interface FavouriteAction extends ActionTypes<PayloadType> {
	type:
		| 'UPDATE_FAVOURITE_LIST'
		| 'FILTER_DATA_CATEGORY'
		| 'FILTER_DATA_SEARCH'
		| 'SORT_BY'
		| 'RESET_REGION'
		| 'CLEAN_SEARCH'
		| 'RESET'
}

export const FavouriteReducer: Reducer<FavouriteInitialStateInter, FavouriteAction> = (
	state: FavouriteInitialStateInter,
	action: FavouriteAction
) => {
	switch (action.type) {
		case 'UPDATE_FAVOURITE_LIST':
			return {
				...state,
				data: action.payload?.data,
				shownData: action.payload?.data,
				favouriteList: action.payload?.favouriteList,
			}
		case 'FILTER_DATA_CATEGORY':
			return {
				...state,
				shownData: filterData<GiftCardInter>(
					state.data,
					action.payload?.categoryName,
					'categoryID'
				),
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
		default:
			return state
	}
}
