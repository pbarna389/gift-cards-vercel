/* eslint-disable no-magic-numbers */
import type { Reducer } from 'react'

import { updateCheckoutList } from '@constants/constants.ts'

import type { ActionTypes, CheckoutDataInter } from './../@types/giftcards.d'

export interface CheckoutReducerInitStateInter {
	cartShow: boolean
	cartVisibility: boolean
	data: CheckoutDataInter[]
	fullPrice: number
}

export const CheckoutInitialState: CheckoutReducerInitStateInter = {
	cartVisibility: false,
	cartShow: false,
	data: [],
	fullPrice: 0,
}

type PayloadType = {
	changeCartShow?: boolean
	changeVisibility?: boolean
	data?: CheckoutDataInter
	name?: string
	prevData?: CheckoutDataInter[]
}

export interface CheckoutAction extends ActionTypes<PayloadType> {
	type:
		| 'ADD_DATA'
		| 'REMOVE_DATA'
		| 'RESET'
		| 'RESTORE_DATA'
		| 'SET_CART_VISIBLITY'
		| 'SET_CART_SHOW'
}

const getPrevFullPrice = (data: CheckoutDataInter[]) => {
	if (data) {
		const getFullPrice = data.reduce(
			(acc: number, item: CheckoutDataInter): number => acc + item.price * item.amount,
			0
		)

		return getFullPrice
	}
	return 0
}

export const CheckoutReducer: Reducer<CheckoutReducerInitStateInter, CheckoutAction> = (
	state: CheckoutReducerInitStateInter,
	action: CheckoutAction
) => {
	switch (action.type) {
		case 'ADD_DATA':
			return {
				...state,
				fullPrice: action.payload?.data
					? state.fullPrice + action.payload?.data?.price * action.payload?.data?.amount
					: state.fullPrice,
				data: action?.payload?.data
					? updateCheckoutList(state.data, action.payload.data)
					: state.data,
			}
		case 'REMOVE_DATA':
			return {
				...state,
				fullPrice: action.payload?.data
					? state.fullPrice - action.payload?.data?.price
					: state.fullPrice,
				data: action?.payload?.data
					? [...state.data.filter((gift) => gift.name !== action?.payload?.data?.name)]
					: state.data,
			}
		case 'RESTORE_DATA':
			return {
				...state,
				fullPrice: action.payload?.prevData ? getPrevFullPrice(action.payload?.prevData) : 0,
				data: action.payload?.prevData ? action.payload?.prevData : [],
			}
		case 'RESET':
			return {
				...state,
				cartVisibility: false,
				fullPrice: 0,
				data: [],
			}
		case 'SET_CART_VISIBLITY':
			return {
				...state,
				cartVisibility: action.payload?.changeVisibility ? action.payload.changeVisibility : false,
			}
		case 'SET_CART_SHOW':
			return {
				...state,
				cartShow: action.payload?.changeCartShow ? action.payload.changeCartShow : false,
			}
		default:
			return state
	}
}
