import type { Dispatch } from 'react'

import { googleLogout } from '@react-oauth/google'
import type { LoginAction, LoginInter } from '@reducers/index'
import jwtDecode from 'jwt-decode'

import type {
	FavouritedItem,
	NotificationInteractions,
	ToasterTypes,
	UserInter,
} from './../../@types/giftcards.d'

interface GoogleTokenInter {
	aud: string
	azp: string
	email: string
	email_verified: boolean
	exp: number
	family_name: string
	given_name: string
	hd: string
	iat: number
	iss: number
	jti: string
	locale: string
	name: string
	nbf: number
	picture: string
	sub: string
}

export const handleLoginClick = async (
	loginDispatch: Dispatch<LoginAction> | null,
	loginState: LoginInter | null,
	handleToaster: (text: string, type: ToasterTypes) => void,
	users?: UserInter[],
	addData?: (
		data: UserInter | NotificationInteractions | FavouritedItem,
		category?: string,
		id?: string
	) => Promise<unknown>,
	creditential?: string
) => {
	if (loginDispatch) {
		if (!loginState?.user && creditential && users) {
			const googleData: GoogleTokenInter = jwtDecode(creditential)

			const shouldAdd = !users.some(
				(user: UserInter) => user.userName === googleData.name && user.email === googleData.email
			)

			const date = new Date()
			const actualYear = date.getFullYear()

			if (shouldAdd && addData) {
				const incrementValue = 1
				const newUser: UserInter = {
					userName: googleData.name,
					coins: 0,
					email: googleData.email,
					id: `user-${users.length + incrementValue}`,
					birthDay: 0,
					division: 'JS',
					prevPurchase: [],
					profilePic: googleData.picture,
					region: 'eu',
					startedWorking: actualYear,
					role: 'USER',
				}

				const newUserNotifications: NotificationInteractions = {
					id: newUser.id,
					notificationMessages: [],
				}

				const newUserFavourites: FavouritedItem = {
					id: newUser.id,
					giftData: [],
				}

				await addData(newUser, 'users')
				await addData(newUserNotifications, 'notifications')
				await addData(newUserFavourites, 'favourites')

				loginDispatch({ type: 'USER_LOGIN', payload: { user: newUser } })
				localStorage.setItem('user', JSON.stringify(newUser))
			} else {
				const user: UserInter | undefined = users.find(
					(user: UserInter) => user.userName === googleData.name && user.email === googleData.email
				)
				if (user) {
					loginDispatch({ type: 'USER_LOGIN', payload: { user } })
					handleToaster(`Welcome back, ${user?.userName}!`, 'login')
					localStorage.setItem('user', JSON.stringify(user))
				}
			}
		} else {
			loginDispatch({ type: 'USER_LOGOUT', payload: null })
			localStorage.removeItem('user')
			localStorage.removeItem('favourites')
			handleToaster(`See you later!`, 'logout')
			googleLogout()
		}
	}
}
