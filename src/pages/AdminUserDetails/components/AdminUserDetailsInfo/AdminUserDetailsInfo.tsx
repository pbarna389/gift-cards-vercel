/* eslint-disable no-magic-numbers */
import { type FC, useContext } from 'react'

import { useParams } from 'react-router-dom'

import { handleShowWarning } from '@constants/constants'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'

import { DetailsHandleRole } from './components/DetailsHandleRole/DetailsHandleRole'
import { DetailsInfoField } from './components/DetailsInfoField/DetailsInfoField'
import {
	StyledBtnSubmit,
	StyledDetails,
	StyledDetailsInfoWrapper,
} from './AdminUserDetailsInfo.style'

import type { PrevPurchase } from '$types/giftcards'

export const AdminUserDetailsInfo: FC = () => {
	const { userState } = useContext<IUser>(AdminUserContext)
	const { setModalShow } = useContext<IModal>(ModalContext)

	const { userName } = useParams()

	return (
		userState?.data && (
			<StyledDetailsInfoWrapper>
				<StyledDetails>
					<DetailsInfoField label={'Name:'} info={userState?.data[0].userName} />
					<DetailsHandleRole user={userState?.data[0]} />
					<DetailsInfoField
						label={'BirthDay:'}
						info={`${
							userState?.data[0].birthDay === 0
								? 'Not assigned yet!'
								: `${userState?.data[0]?.birthDay} year`
						}`}
					/>
					<DetailsInfoField
						label={'Started working:'}
						info={`${userState?.data[0]?.startedWorking} year`}
					/>
					<DetailsInfoField label={'Email:'} info={userState?.data[0].email} />
					<DetailsInfoField
						label={'Coins:'}
						info={userState?.data[0].coins}
						link={`/admin/users/${userName || 'error'}/add-coins`}
					/>
					<DetailsInfoField
						label={'Previous purchase:'}
						// eslint-disable-next-line no-magic-numbers
						info={userState?.data[0]?.prevPurchase.at(-1) as PrevPurchase}
						link={`/admin/users/${userName || 'error'}/History-of-purpose`}
						isArray={true}
					/>
				</StyledDetails>
				<StyledBtnSubmit type="button" onClick={() => handleShowWarning(setModalShow)}>
					Change
				</StyledBtnSubmit>
			</StyledDetailsInfoWrapper>
		)
	)
}
