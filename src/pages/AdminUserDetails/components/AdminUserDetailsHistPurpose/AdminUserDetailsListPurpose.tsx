import { type FC, useContext } from 'react'

import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'

import { UserDetailsListWrapper } from './components'

export const AdminUserDetailsListPurpose: FC = () => {
	const { userState } = useContext<IUser>(AdminUserContext)
	return (
		<>
			{userState?.data && (
				<UserDetailsListWrapper prevPurchases={userState?.data[0].prevPurchase} />
			)}
		</>
	)
}
