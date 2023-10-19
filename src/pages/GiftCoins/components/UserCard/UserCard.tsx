import type { FC } from 'react'

import { CardWrapper } from './UserCard.style'

import type { UserInter } from '$types/giftcards'

interface UserCardProps {
	isSelected: boolean
	onClick: (user: UserInter) => void
	user: UserInter
}

export const UserCard: FC<UserCardProps> = ({ isSelected, user, onClick }) => {
	return (
		<CardWrapper className={`${isSelected ? 'active' : ''}`} onClick={() => onClick(user)}>
			<img src={user.profilePic} alt={`${user.userName}-profile-picture`} />
			<p>{user.userName}</p>
			<p>{user.division}</p>
		</CardWrapper>
	)
}
