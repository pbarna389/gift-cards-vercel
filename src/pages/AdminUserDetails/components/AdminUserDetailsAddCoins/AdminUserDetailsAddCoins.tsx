import { type FC, useContext } from 'react'

import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'

import { StyledDetailsInfoWrapper } from '../AdminUserDetailsInfo/AdminUserDetailsInfo.style'
import { DetailsInfoField } from '../AdminUserDetailsInfo/components/DetailsInfoField/DetailsInfoField'
import { FormikUserDetailsAddCoins } from './components'

export const AdminUserDetailsAddCoins: FC = () => {
	const { userState } = useContext<IUser>(AdminUserContext)

	return (
		userState?.data && (
			<StyledDetailsInfoWrapper>
				<DetailsInfoField label={'Current balance:'} info={userState?.data[0].coins} />
				<FormikUserDetailsAddCoins />
			</StyledDetailsInfoWrapper>
		)
	)
}
