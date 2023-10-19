import type { Reducer } from 'react'

import type { ActionTypes, GiftCardInter } from '../@types/giftcards'

type PayloadType = {
	data?: GiftCardInter[]
	error?: string
}

export interface AdminAction extends ActionTypes<PayloadType> {
	type: 'ERROR' | 'ADD_ID_DATA' | 'SUBMIT_DATA'
}

export interface AdminInStateInter {
	data?: GiftCardInter[]
	error?: string
}

export const AdminInitialState: AdminInStateInter = {
	data: undefined,
	error: undefined,
}

export const AdminReducer: Reducer<AdminInStateInter, AdminAction> = (
	state: AdminInStateInter,
	action: AdminAction
) => {
	switch (action.type) {
		case 'ADD_ID_DATA':
			return {
				...state,
				data: action.payload?.data,
			}
		case 'SUBMIT_DATA':
			return {
				...state,
				data: action.payload?.data,
			}
		case 'ERROR':
			return {
				...state,
				error: action.payload?.error,
			}
		default:
			return state
	}
}
