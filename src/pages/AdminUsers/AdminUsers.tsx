import { type FC, useContext, useEffect } from 'react'

import TeamLogo from '@assets/team_name.png'
import { Hero } from '@components/index'
import { API } from '@constants/index'
import { MainPageContentWrapper } from '@constants/styles'
import { AdminUserContext, type IUser } from '@context/index'
import { useFetch } from '@hooks/index'

import { UserListWrapper } from './componentns/idnex'
import type { UserInter } from '../../@types/giftcards'

export const AdminUsers: FC = () => {
	const { userState, userDispatch } = useContext<IUser>(AdminUserContext)

	const userData = useFetch<UserInter[]>(`${API}users`, !userState?.modifiedData)

	useEffect(() => {
		if (userDispatch) {
			userDispatch({ type: 'LOAD_DATA', payload: { data: userData } })
		}
	}, [userDispatch, userData])

	return (
		<MainPageContentWrapper>
			<Hero text="Users list" heroCardBg={TeamLogo} animate />
			<UserListWrapper
				data={
					userState?.data && !userState.filteredData ? userState?.data : userState?.filteredData
				}
			/>
		</MainPageContentWrapper>
	)
}
