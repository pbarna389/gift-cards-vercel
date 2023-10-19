/* eslint-disable no-magic-numbers */
import { type FC, useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { API } from '@constants/constants'
import type { IGiftCards } from '@context/GiftCardContext'
import { GiftCardContext } from '@context/GiftCardContext'
import { useFetch } from '@hooks/index'
import { useFetchByName } from '@hooks/useFetchByName'

import { FormModifyCard } from './components'

import type { GiftCardInter } from '$types/giftcards'

export const AdminGiftCardModify: FC = () => {
	const { giftCardModify } = useParams()
	const { giftCardState, giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)
	const GiftData = useFetch<GiftCardInter[]>(`${API}all`, true)

	useEffect(() => {
		if (giftCardDispatch) {
			giftCardDispatch({
				type: 'LOAD_DATA',
				payload: {
					data: GiftData,
				},
			})
		}
	}, [giftCardDispatch, GiftData])

	const newID = giftCardState?.data && Number(giftCardState.data.at(-1)?.id)
	const mockForm = {
		id: newID?.toString() ? (newID + 1).toString() : '1',
		name: 'test',
		categoryID: '',
		region: '',
		regionFlag: '',
		price: 0,
		attentionMessage: '',
		backgroundImg: '',
		cardImg: '',
		shortDesc: '',
		description: '',
	}

	const giftDataByName = useFetchByName<GiftCardInter>(API, 'all?id=', giftCardModify)

	return (
		giftDataByName && (
			<FormModifyCard
				giftCard={giftDataByName?.length === 0 ? mockForm : giftDataByName && giftDataByName[0]}
				HTTPMethod={giftDataByName?.length === 0 ? 'POST' : 'PUT'}
				lastId={giftDataByName?.length === 0 ? mockForm.id : giftDataByName && giftDataByName[0].id}
			/>
		)
	)
}
