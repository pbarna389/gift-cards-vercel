import type { Reducer } from 'react'

import { filterData } from '@constants/filterData'

import type { ActionTypes, BoughtGifts, UserInter } from '../@types/giftcards'

export interface UserInStateInter {
	boughtGifts?: BoughtGifts[]
	data?: UserInter[]
	filteredData?: UserInter[]
	filterWord?: string
	modifiedData?: boolean
}

export const UserInitialState: UserInStateInter = {
	boughtGifts: undefined,
	data: undefined,
	modifiedData: false,
	filterWord: '',
	filteredData: undefined,
}

type UserPayloadType = {
	boughtGifts?: BoughtGifts[]
	data?: UserInter[]
	filteredData?: UserInter[]
	filterWord?: string
	modifiedData?: boolean
}

export interface UserAction extends ActionTypes<UserPayloadType> {
	type:
		| 'LOAD_DATA'
		| 'BOUGHT_GIFTS'
		| 'RELOAD_MODIFIED_DATA'
		| 'FILTER_DATA_SEARCH'
		| 'CLEAN_SEARCH'
}

export const AdminUserReducer: Reducer<UserInStateInter, UserAction> = (
	state: UserInStateInter,
	action: UserAction
) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				...state,
				data: action.payload?.data,
			}
		case 'BOUGHT_GIFTS':
			return {
				...state,
				boughtGifts: action.payload?.boughtGifts,
			}
		case 'RELOAD_MODIFIED_DATA':
			return {
				...state,
				modifiedData: action.payload?.modifiedData,
			}
		case 'FILTER_DATA_SEARCH': {
			return {
				...state,
				filterWord: action.payload?.filterWord,
				filteredData: filterData<UserInter>(state.data, action.payload?.filterWord, 'userName'),
			}
		}
		case 'CLEAN_SEARCH': {
			return {
				...state,
				filterWord: '',
				filteredData: undefined,
			}
		}
		default:
			return state
	}
}
