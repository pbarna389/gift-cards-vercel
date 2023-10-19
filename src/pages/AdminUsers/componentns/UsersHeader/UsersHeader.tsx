import { type FC, useContext } from 'react'

import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'

import { SearchBar } from '../../../../components'
import { ShortDescParagraph, SuggestH2 } from '../../../../constants/styles'
import { BtnModifyCard } from '../../../Admin/components/BtnChange/BtnModifyCard'
import { StyledUserHeadersInfo, StyledUsersHeader } from './UserHeader.style'

const breakPoint = 776

export const UsersHeader: FC<{ numberOfUsers: number | undefined; width: number }> = ({
	numberOfUsers,
	width,
}) => {
	const { userDispatch } = useContext<IUser>(AdminUserContext)

	return (
		<StyledUsersHeader>
			{width <= breakPoint ? (
				<div>
					<SuggestH2>Members</SuggestH2>
					<ShortDescParagraph>{numberOfUsers} members</ShortDescParagraph>
				</div>
			) : (
				<div>
					<SuggestH2>Members</SuggestH2>
				</div>
			)}

			<StyledUserHeadersInfo>
				{width > breakPoint && <ShortDescParagraph>{numberOfUsers} members</ShortDescParagraph>}
				<SearchBar widthOfSearch={'15rem'} dispatch={userDispatch} />

				<BtnModifyCard nameOfIcon={'add_user'} />
			</StyledUserHeadersInfo>
		</StyledUsersHeader>
	)
}
