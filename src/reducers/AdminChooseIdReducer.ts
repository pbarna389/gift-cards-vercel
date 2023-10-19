import type { Reducer } from 'react'

import type { ActionTypes } from '../@types/giftcards'

type PayloadType = {
	isAddingData?: boolean
	selectedID?: string | number
	showModal?: boolean
}

export interface AdminChooseIdAction extends ActionTypes<PayloadType> {
	type: 'CHANGE_SELECTED_ID' | 'ADD_DATA'
}

export interface AdminChooseIdInStateInter {
	isAddingData?: boolean
	selectedID?: string | number
	showModal?: boolean
}

export const AdminChooseIdInitialState: AdminChooseIdInStateInter = {
	isAddingData: false,
	selectedID: undefined,
	showModal: false,
}

export const AdminChooseIdReducer: Reducer<AdminChooseIdInStateInter, AdminChooseIdAction> = (
	state: AdminChooseIdInStateInter,
	action: AdminChooseIdAction
) => {
	switch (action.type) {
		case 'CHANGE_SELECTED_ID':
			return {
				selectedID: action.payload?.selectedID,
			}
		case 'ADD_DATA':
			return {
				showModal: action.payload?.showModal,
				isAddingData: action.payload?.isAddingData,
			}
		default:
			return state
	}
}
