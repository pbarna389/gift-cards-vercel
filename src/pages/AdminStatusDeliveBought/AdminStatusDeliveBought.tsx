import { type FC, useContext, useEffect } from 'react'

import TeamLogo from '@assets/team_name.png'
import { Hero } from '@components/Hero'
import { API } from '@constants/constants'
import { MainPageContentWrapper } from '@constants/styles'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import { useFetch } from '@hooks/useFetch'

import { AdminStatusItem } from './components/AdminStatusItem'

import type { BoughtGifts } from '$types/giftcards'

const sortGiftObject = 'boughtGifts?_sort=status,boughtTime&_order=asc,desc'

export const AdminStatusDeliveBought: FC = () => {
	const { userState, userDispatch } = useContext<IUser>(AdminUserContext)

	const boughtGifts = useFetch<BoughtGifts[]>(`${API}${sortGiftObject}`, userState?.modifiedData)

	useEffect(() => {
		if (userDispatch) {
			userDispatch({ type: 'BOUGHT_GIFTS', payload: { boughtGifts } })
		}
	}, [userDispatch, boughtGifts])

	return (
		<MainPageContentWrapper>
			<Hero text={'Bought gifts'} heroCardBg={TeamLogo} animate />
			{userState?.boughtGifts && <AdminStatusItem boughtGifts={userState?.boughtGifts} />}
		</MainPageContentWrapper>
	)
}
