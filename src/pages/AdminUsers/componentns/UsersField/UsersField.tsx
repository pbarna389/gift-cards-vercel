import type { FC } from 'react'

import { LinkBase } from '../../../../constants/styles'
import { BtnModifyCard } from '../../../Admin/components/BtnChange/BtnModifyCard'
import { GiftLine } from '../../../Admin/components/GiftCardField/GiftCardField.style'
import {
	StyledUserImgSmall,
	StyledUsersField,
	StyledUsersFieldInfo,
	StyledUsersFieldInfoBtn,
	StyledUsersFiledSpan,
	StyledUsersSpansWrapper,
} from './UsersField.styled'

interface IUserProps {
	division: string
	id: string
	profilePic: string
	region: string
	userName: string
	email?: string
}

interface IUsersFieldProps {
	userShortInfo: IUserProps
}

export const UsersField: FC<IUsersFieldProps> = ({ userShortInfo }) => {
	const { id, division, email, profilePic, region, userName } = userShortInfo

	return (
		<StyledUsersField>
			<StyledUsersFieldInfo>
				<StyledUserImgSmall src={profilePic} alt="profile picture" />
				<StyledUsersSpansWrapper>
					<GiftLine>
						<StyledUsersFiledSpan>{userName}</StyledUsersFiledSpan>
					</GiftLine>
					<GiftLine>
						<StyledUsersFiledSpan>{email}</StyledUsersFiledSpan>
					</GiftLine>
					<GiftLine>
						<StyledUsersFiledSpan>{division}</StyledUsersFiledSpan>
					</GiftLine>
					<GiftLine>
						<StyledUsersFiledSpan>{region}</StyledUsersFiledSpan>
					</GiftLine>
				</StyledUsersSpansWrapper>
			</StyledUsersFieldInfo>
			<StyledUsersFieldInfoBtn>
				<BtnModifyCard nameOfIcon="delete" />
				<LinkBase to={`${id}/info-of-user`}>
					<BtnModifyCard nameOfIcon="details" />
				</LinkBase>
			</StyledUsersFieldInfoBtn>
		</StyledUsersField>
	)
}
