import type { FC } from 'react'
import { useContext } from 'react'

import { Hero, Icons, Modal, ProfileDetails } from '@components/index'
import { MainPageContentWrapperWithIcons } from '@constants/styles'
import type { ILogin } from '@context/index'
import { LoginContext } from '@context/index'

import { ModalButtonWrapper } from './components/ModalBtnWrapper'
import ModalCardWrapper from './components/ModalCardWrapper/ModalCardWrapper'
import { Table } from './components/Table'
import { TableWrapper } from './Profile.style'

import '../../App.css'

export const Profile: FC = () => {
	const { loginState } = useContext<ILogin>(LoginContext)
	const prevPurchase = loginState?.user ? loginState.user.prevPurchase : null

	return (
		<>
			<MainPageContentWrapperWithIcons className={`profileWrapper`}>
				<Hero text="Profile" heroCardBg={<Icons category="profile" />} />
				<Modal route={document.body}>
					<ModalCardWrapper />
					<ModalButtonWrapper />
				</Modal>
				{loginState?.user ? (
					<ProfileDetails {...loginState.user} />
				) : (
					<h2>Log in to see your details!</h2>
				)}
				<TableWrapper>
					<Table boughtItems={prevPurchase} />
				</TableWrapper>
			</MainPageContentWrapperWithIcons>
		</>
	)
}
