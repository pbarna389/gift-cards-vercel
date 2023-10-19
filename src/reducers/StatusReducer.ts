import type { Reducer } from 'react'

import type { ActionTypes } from '../@types/giftcards'

export interface StatusInStateInter {
	error?: boolean
	loading?: boolean
}

export const StatusInitialState: StatusInStateInter = {
	loading: false,
	error: false,
}

interface PayloadType {
	error?: boolean
	loading?: boolean
}

export interface StatusAction extends ActionTypes<PayloadType> {
	type: 'LOADING' | 'SET_ERROR' | 'RESET'
}

export const StatusReducer: Reducer<StatusInStateInter, StatusAction> = (
	state: StatusInStateInter,
	action: StatusAction
) => {
	switch (action.type) {
		case 'LOADING':
			return { ...state, loading: action.payload?.loading }
		case 'SET_ERROR':
			return { loading: false, error: true }
		case 'RESET':
			return {
				loading: false,
				error: false,
			}
		default:
			return state
	}
}
