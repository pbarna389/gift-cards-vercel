/* eslint-disable no-magic-numbers */
import type { Dispatch, FC } from 'react'
import { useEffect, useState } from 'react'

import { SearchBar } from '@components/SearchBar'
import { API } from '@constants/index'
import { useFetch } from '@hooks/index'
import type { GiftCoinAction, GiftCoinInStateInter } from '@reducers/index'

import { UserCard } from '../UserCard/UserCard'
import { UserCardWrapper, UserWrapper } from './UserRelatedWrapper.style'

import type { UserInter } from '$types/giftcards'

interface UserRelatedWrapperProps {
	giftCoinDispatch: Dispatch<GiftCoinAction>
	giftCoinState: GiftCoinInStateInter
}

export const UserRelatedWrapper: FC<UserRelatedWrapperProps> = ({
	giftCoinState,
	giftCoinDispatch,
}) => {
	const [shouldGetUsers, setShouldGetUsers] = useState<boolean>(true)

	const users = useFetch<UserInter[]>(`${API}users`, shouldGetUsers, setShouldGetUsers)

	useEffect(() => {
		if (users) {
			giftCoinDispatch({ type: 'LOAD_DATA', payload: { data: users } })
		}
	}, [users, giftCoinDispatch])

	const handleClick = (user: UserInter) => {
		giftCoinDispatch({ type: 'SELECT_DATA', payload: { selectedUser: user } })
	}

	return (
		<UserWrapper>
			<SearchBar dispatch={giftCoinDispatch} />
			<UserCardWrapper>
				{giftCoinState &&
					giftCoinState.filteredData?.map((user: UserInter) => (
						<UserCard
							isSelected={user.id === giftCoinState?.selectedUser?.id}
							key={`${user.userName}-${user.id}-profile-picture`}
							user={user}
							onClick={() => handleClick(user)}
						/>
					))}
			</UserCardWrapper>
			{giftCoinState?.filterWord &&
				giftCoinState.filterWord?.length > 3 &&
				!giftCoinState?.filteredData?.length && <h2>No user found with this name </h2>}
		</UserWrapper>
	)
}
