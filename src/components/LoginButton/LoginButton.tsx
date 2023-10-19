import type { FC, MutableRefObject } from 'react'
import { useContext, useEffect, useRef, useState } from 'react'

import PlaceholderProfile from '@assets/placeholderLogin.jpg'
import { LoginMenu, Tooltip } from '@components/index'
import { API, handleMouseMovement } from '@constants/index'
import type { ILogin } from '@context/index'
import { LoginContext } from '@context/index'
import { useFetch, useModifiedData, useToasterCard } from '@hooks/index'
import { GoogleLogin } from '@react-oauth/google'

import type { FavouritedItem, NotificationInteractions, UserInter } from '../../@types/giftcards'
import { handleLoginClick } from './constant'
import { GoogleImg, GoogleLoginWrapper, LinkWrapper } from './LoginButton.style'

export const LoginButton: FC = (): JSX.Element => {
	const [visibleTooltip, setVisibleTooltip] = useState<boolean>(false)
	const [menuVisible, setMenuVisible] = useState<boolean>(false)
	const [users, setUsers] = useState<UserInter[]>()
	const [loadUsers, setLoadUsers] = useState<boolean>(true)

	const { loginState, loginDispatch } = useContext<ILogin>(LoginContext)

	const ButtonRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	const handleLoginToaster = useToasterCard()

	const userData = useFetch<UserInter[]>(`${API}users`, loadUsers)
	const addData = useModifiedData<UserInter | NotificationInteractions | FavouritedItem>('POST')

	useEffect(() => {
		if (userData) {
			setUsers(userData)
			setLoadUsers(false)
		}
	}, [userData])

	const handleMenu = () => {
		setMenuVisible(!menuVisible)
	}

	const handleOutsideClick = (e: MouseEvent) => {
		if (!ButtonRef?.current?.contains(e.target as Node)) {
			setMenuVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick)

		return () => {
			window.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	if (loginState?.user) {
		return (
			<LinkWrapper>
				<GoogleLoginWrapper
					className={`logged-in ${menuVisible ? 'menu-show' : ''}`}
					ref={ButtonRef && ButtonRef}
					onClick={handleMenu}
				>
					<GoogleImg
						className="logged-in"
						alt="user picture"
						src={loginState.user.profilePic ? loginState.user.profilePic : PlaceholderProfile}
					/>
					{loginState?.user.userName}
				</GoogleLoginWrapper>
				{menuVisible && <LoginMenu />}
			</LinkWrapper>
		)
	}

	return (
		<LinkWrapper>
			<GoogleLoginWrapper
				onPointerEnter={() => handleMouseMovement(visibleTooltip, setVisibleTooltip)}
				onPointerLeave={() => handleMouseMovement(visibleTooltip, setVisibleTooltip)}
			>
				<GoogleLogin
					theme="filled_black"
					type="standard"
					logo_alignment="left"
					useOneTap
					onSuccess={({ credential }) => {
						setLoadUsers(true)
						if (credential && users) {
							void handleLoginClick(
								loginDispatch,
								loginState,
								handleLoginToaster,
								users,
								addData,
								credential
							)
						}
					}}
				/>
			</GoogleLoginWrapper>
			<Tooltip label="Sign in with a NIXS account" visible={visibleTooltip} />
		</LinkWrapper>
	)
}
