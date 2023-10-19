/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-magic-numbers */
import type { FC } from 'react'
import { createContext, useEffect, useReducer, useState } from 'react'

import { API } from '@constants/index'
import { useFetch, useLocalStorage, useModifiedData, useToasterCard } from '@hooks/index'
import type { LoginAction, LoginInter } from '@reducers/index'
import { LoginInitialState, LoginReducer } from '@reducers/index'

import type {
	NotificationInteractions,
	NotificationMessagesInter,
	UserInter,
} from '$types/giftcards'

interface LoginContextProps {
	children: React.ReactNode
}

export interface ILogin {
	loginDispatch: React.Dispatch<LoginAction> | null
	loginState: LoginInter | null
}

const LoginBaseValue = {
	loginState: null,
	loginDispatch: null,
}

export const LoginContext = createContext<ILogin>(LoginBaseValue)

export const LoginContextProvider: FC<LoginContextProps> = ({ children }) => {
	const [loginState, loginDispatch] = useReducer(LoginReducer, LoginInitialState)

	const [updateNotifications, setUpdateNotifications] = useState<boolean>(false)
	const [newNotifications, setNewNotifications] = useState<NotificationMessagesInter[]>([])
	const [notificationTO, setNotificationTO] = useState<NodeJS.Timeout>()
	const [userNotifications, setUserNotifications] = useState<NotificationInteractions>()

	const { localStorageItem } = useLocalStorage<UserInter>('user')

	const handleUpdateToaster = useToasterCard()

	const notifications: NotificationInteractions[] | undefined = useFetch(
		`${API}notifications`,
		updateNotifications,
		setUpdateNotifications
	)

	const updateUserNotifications = useModifiedData<NotificationInteractions>('PUT')

	useEffect(() => {
		if (localStorageItem) {
			loginDispatch({ type: 'USER_LOGIN', payload: { user: localStorageItem } })
		}
	}, [localStorageItem])

	useEffect(() => {
		if (loginState.user && notifications) {
			const userRelatedNotifications = notifications.find(
				(user: NotificationInteractions) => user.id === loginState?.user?.id
			)

			setUserNotifications(userRelatedNotifications)
		}
	}, [loginState, notifications])

	useEffect(() => {
		const handleNotifications = async () => {
			if (userNotifications) {
				const shouldUpdate: boolean = userNotifications?.notificationMessages.some(
					(notif: NotificationMessagesInter) => !notif.isDelivered
				)

				if (shouldUpdate) {
					const notDeliveredNotifications: NotificationMessagesInter[] =
						userNotifications?.notificationMessages.filter(
							(notif: NotificationMessagesInter) => !notif.isDelivered
						)

					const deliveredNotifications: NotificationMessagesInter[] =
						userNotifications?.notificationMessages.filter(
							(notif: NotificationMessagesInter) => notif.isDelivered
						)

					if (notDeliveredNotifications) {
						const updatedNotifications: NotificationMessagesInter[] = []

						notDeliveredNotifications.forEach((notif: NotificationMessagesInter) => {
							const newNotif: NotificationMessagesInter = { ...notif, isDelivered: true }

							updatedNotifications.push(newNotif)
						})

						setNewNotifications(updatedNotifications)

						const updatedUserMessages: NotificationInteractions = {
							id: userNotifications.id,
							notificationMessages: [...updatedNotifications, ...deliveredNotifications],
						}

						await updateUserNotifications(
							updatedUserMessages,
							'notifications',
							updatedUserMessages.id
						)
					}
				}
			}
		}

		void handleNotifications()
	}, [updateUserNotifications, userNotifications])

	useEffect(() => {
		if (newNotifications && newNotifications.length) {
			const id = setTimeout(() => {
				const { senderName } = newNotifications[0]
				const { amount, giftName } = newNotifications[0].content
				handleUpdateToaster(
					`${senderName ? senderName : 'ERROR'} sent ${amount ? amount : 'ERROR'} ${
						giftName ? giftName : 'ERROR'
					} to your account!`,
					'add-item'
				)

				setNewNotifications((prev: NotificationMessagesInter[]) => {
					const updatedNotificationList = [...prev]
					updatedNotificationList.shift()

					return updatedNotificationList
				})
			}, 200)

			setNotificationTO(id)
		}

		return () => clearTimeout(notificationTO)
	}, [newNotifications])

	return (
		<LoginContext.Provider
			value={{
				loginState,
				loginDispatch,
			}}
		>
			{children}
		</LoginContext.Provider>
	)
}
