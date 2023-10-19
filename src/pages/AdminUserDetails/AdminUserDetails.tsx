import type { FC } from 'react'
import { useContext, useEffect, useState } from 'react'

import { Outlet, useParams } from 'react-router-dom'

import { API, basicNumber, userDetailsList } from '@constants/constants'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import { useFetchByName } from '@hooks/useFetchByName'
import { BtnModifyCard } from '@pages/Admin/components/BtnChange/BtnModifyCard'

import type { UserInter } from '../../@types/giftcards'
import {
	StyledDropDown,
	StyledUlList,
	StyledUserImgRegular,
	StyledUserPageContent,
	StyledUserPageNav,
	StyledUserPageNavLinks,
	StyledUserPageWrapper,
	StyledUserPanelWrapper,
} from './AdminUserDetails.style'

const breakPoint = 500
export const AdminUserDetails: FC = () => {
	const { userName } = useParams()
	const [width, setWidth] = useState<number>(basicNumber)
	const { userState, userDispatch } = useContext<IUser>(AdminUserContext)
	const [showDropDown, setShowDropDown] = useState<boolean>(false)

	const handleDropDown = (setShowDropDownProps: React.Dispatch<React.SetStateAction<boolean>>) => {
		setShowDropDownProps(!showDropDown)
	}

	const userDataByName = useFetchByName<UserInter>(
		API,
		'users?id=',
		userName,
		userState?.modifiedData
	)

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

	useEffect(() => {
		if (userDispatch) {
			userDispatch({ type: 'LOAD_DATA', payload: { data: userDataByName } })
		}
	}, [userDispatch, userDataByName])

	return (
		<StyledUserPageWrapper>
			<StyledUserPageContent>
				<StyledUserPanelWrapper>
					{userState?.data && <StyledUserImgRegular src={userState.data[0].profilePic} />}
					{width > breakPoint ? (
						<StyledUserPageNav>
							{userDetailsList.map((itemLink) => (
								<StyledUserPageNavLinks to={itemLink.link} key={itemLink.link}>
									{itemLink.name}
								</StyledUserPageNavLinks>
							))}
						</StyledUserPageNav>
					) : (
						<StyledDropDown>
							<BtnModifyCard nameOfIcon={'users'} onClick={() => handleDropDown(setShowDropDown)} />
							{showDropDown ? (
								<StyledDropDown>
									<StyledUlList>
										{userDetailsList.map((item) => (
											<li key={item.link}>
												<StyledUserPageNavLinks to={item.link}>{item.name}</StyledUserPageNavLinks>
											</li>
										))}
									</StyledUlList>
								</StyledDropDown>
							) : null}
						</StyledDropDown>
					)}
				</StyledUserPanelWrapper>
				<Outlet />
			</StyledUserPageContent>
		</StyledUserPageWrapper>
	)
}
