import type { Reducer } from 'react'

import type { ActionTypes, UserInter } from '../@types/giftcards'

export const LoginInitialState: LoginInter = {
	user: null,
}

export interface LoginInter {
	user?: UserInter | null
}

type PayloadType = {
	user: UserInter | null
}

export interface LoginAction extends ActionTypes<PayloadType> {
	type: 'USER_LOGIN' | 'USER_LOGOUT' | 'PURCHASE_ITEM'
}

export const LoginReducer: Reducer<LoginInter, LoginAction> = (
	state: LoginInter,
	action: LoginAction
) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				user: action.payload?.user,
			}
		case 'USER_LOGOUT':
			return {
				...state,
				user: null,
			}
		case 'PURCHASE_ITEM':
			return {
				...state,
				user: action.payload?.user,
			}
		default:
			return state
	}
}
