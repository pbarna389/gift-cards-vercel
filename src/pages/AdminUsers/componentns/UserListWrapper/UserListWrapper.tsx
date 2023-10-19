import type { FC } from 'react'
import { useEffect, useState } from 'react'

import type { UserInter } from '../../../../@types/giftcards'
import { UsersField, UsersHeader } from '../idnex'
import { WrapperGiftsAdminUsers } from './UserListWrapper.style'

interface IUserWrapper {
	data: UserInter[] | undefined
}

const basicNumber = 0
export const UserListWrapper: FC<IUserWrapper> = ({ data }): JSX.Element => {
	const [width, setWidth] = useState<number>(basicNumber)

	const { innerWidth } = window

	useEffect(() => {
		const newInnerWidth = () => {
			setWidth(window.innerWidth)
		}
		setWidth(innerWidth)
		window.addEventListener('resize', newInnerWidth)

		return () => {
			window.removeEventListener('resize', newInnerWidth)
		}
	}, [width, innerWidth])
	return (
		<WrapperGiftsAdminUsers>
			<UsersHeader numberOfUsers={data?.length} width={width} />
			{data &&
				data.map((user) => <UsersField userShortInfo={user} key={`${user.id}-${user.userName}`} />)}
		</WrapperGiftsAdminUsers>
	)
}
