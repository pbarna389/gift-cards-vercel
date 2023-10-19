import type { Reducer } from 'react'

import { filterData } from '@constants/filterData'

import type { ActionTypes, UserInter } from '../@types/giftcards'

export interface GiftCoinInStateInter {
	data?: UserInter[]
	filteredData?: UserInter[]
	filterWord?: string
	modifiedData?: boolean
	selectedUser?: UserInter
}

export const GiftCoinInitialState: GiftCoinInStateInter = {
	data: [],
	selectedUser: undefined,
	modifiedData: false,
	filterWord: '',
	filteredData: undefined,
}

type GiftCoinPayloadType = {
	data?: UserInter[]
	filteredData?: UserInter[]
	filterWord?: string
	modifiedData?: boolean
	selectedUser?: UserInter
}

export interface GiftCoinAction extends ActionTypes<GiftCoinPayloadType> {
	type: 'LOAD_DATA' | 'RELOAD_MODIFIED_DATA' | 'FILTER_DATA_SEARCH' | 'CLEAN_SEARCH' | 'SELECT_DATA'
}

export const GiftCoinReducer: Reducer<GiftCoinInStateInter, GiftCoinAction> = (
	state: GiftCoinInStateInter,
	action: GiftCoinAction
) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				...state,
				data: action.payload?.data,
			}
		case 'SELECT_DATA':
			return {
				...state,
				selectedUser: action.payload?.selectedUser,
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
