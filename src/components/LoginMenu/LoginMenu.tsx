/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FC } from 'react'
import { useContext } from 'react'

import { Icons } from '@components/index'
import type { ILogin } from '@context/index'
import { LoginContext } from '@context/index'
import { useToasterCard } from '@hooks/index'

import { handleLoginClick } from '../LoginButton/constant'
import { LoginMenuWrapper, ProfileLink, StyledProfileLi, StyledProfileUl } from './LoginMenu.style'

export const LoginMenu: FC = () => {
	const { loginState, loginDispatch } = useContext<ILogin>(LoginContext)

	const handleLogoutToaster = useToasterCard()

	return (
		<LoginMenuWrapper>
			<StyledProfileUl>
				<ProfileLink to="/">
					<StyledProfileLi>
						<Icons
							category="price"
							value={`${loginState && loginState.user ? loginState.user.coins : ''} coins`}
						/>
					</StyledProfileLi>
				</ProfileLink>
				<ProfileLink to="/profile">
					<StyledProfileLi>Profile</StyledProfileLi>
				</ProfileLink>
				<ProfileLink to="/favourites">
					<StyledProfileLi>Favourites</StyledProfileLi>
				</ProfileLink>
				<ProfileLink to="/gift-coins">
					<StyledProfileLi>Gift Coins</StyledProfileLi>
				</ProfileLink>
				<ProfileLink to="/suggestions">
					<StyledProfileLi>Suggest a gift</StyledProfileLi>
				</ProfileLink>
				{loginState && loginState.user?.role === 'ADMIN' && (
					<ProfileLink to="admin">
						<StyledProfileLi>Admin</StyledProfileLi>
					</ProfileLink>
				)}
				<StyledProfileLi
					className="last"
					onClick={() => handleLoginClick(loginDispatch, loginState, handleLogoutToaster)}
				>
					Logout
				</StyledProfileLi>
			</StyledProfileUl>
		</LoginMenuWrapper>
	)
}
