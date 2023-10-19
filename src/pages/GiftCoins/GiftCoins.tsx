import { type FC, useContext, useReducer, useState } from 'react'

import { Button, FormikInputField, FormikWrapper, Hero, Icons } from '@components/index'
import { API, handleShowWarning } from '@constants/constants'
import { MainPageContentWrapperWithIcons } from '@constants/styles'
import type { ILogin } from '@context/LoginContext'
import { LoginContext } from '@context/LoginContext'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'
import { useFetch } from '@hooks/index'
import { useModifiedData } from '@hooks/useModifiedData'
import { useToasterCard } from '@hooks/useToasterCard'
import { GiftCoinInitialState, GiftCoinReducer } from '@reducers/index'
import { coinGiftValidationSchema } from '@utils/index'

import { UserRelatedWrapper } from './components/UserRelatedWrapper/UserRelatedWrapper'
import type {
	GiftCoinEmailFormInter,
	GiftCoinEmailFormValues,
	NotificationInteractions,
	NotificationMessagesInter,
	UserInter,
} from '../../@types/giftcards'
import { GiftCoinH2, GiftCoinWrapper, StyledCoinInputWrapper } from './GiftCoins.style'

import '../../App.css'

const initialGiftCoinValues: GiftCoinEmailFormInter = {
	coins: 0,
}

export const GiftCoins: FC = () => {
	const { setModalShow } = useContext<IModal>(ModalContext)
	const { loginState, loginDispatch } = useContext<ILogin>(LoginContext)
	const [updateNotifications, setUpdateNotifications] = useState<boolean>(true)

	const [giftCoinState, giftCoinDispatch] = useReducer(GiftCoinReducer, GiftCoinInitialState)

	const handleGiftCoinToaster = useToasterCard()
	const userNotifications = useFetch<NotificationInteractions[]>(
		`${API}notifications`,
		updateNotifications,
		setUpdateNotifications
	)
	const updateData = useModifiedData<UserInter>('PUT')
	const updateNotificationList = useModifiedData<NotificationInteractions>('PUT')

	const handleCoinFormSubmit = async (values: GiftCoinEmailFormValues) => {
		if (loginState?.user && giftCoinState?.selectedUser && values.coins && loginDispatch) {
			if (loginState.user.coins < values.coins) {
				handleGiftCoinToaster(`You don't have enough coins!`, 'error')
			} else {
				if (loginState.user.userName === giftCoinState.selectedUser.userName) {
					handleGiftCoinToaster(`You can't send coins for yourself!`, 'error')
				} else {
					const newSenderCurrency = loginState.user.coins - values.coins
					const receiverUserCurrency = giftCoinState.selectedUser.coins + values.coins

					const newSenderUser = { ...loginState.user, coins: newSenderCurrency }
					const newSelectedUser = {
						...giftCoinState.selectedUser,
						coins: receiverUserCurrency,
					}

					const selectedUserNotifications: NotificationInteractions | undefined = userNotifications
						? userNotifications.find(
								(notif: NotificationInteractions) => notif.id === newSelectedUser.id
						  )
						: undefined

					if (selectedUserNotifications) {
						const date = new Date()

						const getCurrentDate = () => {
							return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
						}

						const newNotificationContent: NotificationMessagesInter = {
							id: `${giftCoinState.selectedUser.id}-giftCoin-${values.coins}-${getCurrentDate()}`,
							creationTime: getCurrentDate(),
							isDelivered: false,
							senderId: newSenderUser.id,
							senderName: newSenderUser.userName,
							content: {
								type: 'GIFT_COINS',
								amount: values.coins,
								giftName: 'coins',
							},
						}

						const newUserNotification: NotificationInteractions = {
							id: selectedUserNotifications.id,
							notificationMessages: [
								...selectedUserNotifications.notificationMessages,
								newNotificationContent,
							],
						}

						await updateData(newSenderUser, 'users', newSenderUser.id)
						await updateData(newSelectedUser, 'users', newSelectedUser.id)

						await updateNotificationList(
							newUserNotification,
							'notifications',
							`${newUserNotification.id}`
						)
						setUpdateNotifications(true)

						handleGiftCoinToaster(
							`You sent ${values.coins} coins to ${newSelectedUser.userName}!`,
							'purchase'
						)
						values.coins = 0

						loginDispatch({ type: 'USER_LOGIN', payload: { user: newSenderUser } })

						localStorage.setItem('user', JSON.stringify(newSenderUser))
					}
				}
			}
		}
	}

	return (
		<MainPageContentWrapperWithIcons>
			<Hero
				text="Send coins to your collegues!"
				heroCardBg={<Icons category="gift_coins" value=" " />}
			/>
			{loginState?.user ? (
				<GiftCoinWrapper>
					<UserRelatedWrapper giftCoinState={giftCoinState} giftCoinDispatch={giftCoinDispatch} />
					<GiftCoinH2>Contact us</GiftCoinH2>
					<FormikWrapper
						validationSchema={coinGiftValidationSchema}
						initialValues={initialGiftCoinValues}
						handleFormSubmit={handleCoinFormSubmit}
					>
						<StyledCoinInputWrapper>
							<div>
								<FormikInputField
									type="number"
									name="coins"
									labelText="coins"
									placeholder="Set the amount to send..."
								/>
							</div>
						</StyledCoinInputWrapper>
						<Button
							label="Send the coins!"
							iconType="send"
							type="button"
							handleOrder={() => handleShowWarning(setModalShow)}
						/>
					</FormikWrapper>
				</GiftCoinWrapper>
			) : (
				<h2>Login to be able to send coins!</h2>
			)}
		</MainPageContentWrapperWithIcons>
	)
}
