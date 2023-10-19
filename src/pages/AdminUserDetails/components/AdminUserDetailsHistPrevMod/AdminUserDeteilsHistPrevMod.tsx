import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Button } from '@components/index'
import { API } from '@constants/constants'
import { useFetch, useModifiedData } from '@hooks/index'

import { InteractionDetails } from './components/InteractionDetails'

import type { NotificationInteractions, NotificationMessagesInter } from '$types/giftcards'

export const AdminUserDetailsHistPrevMod: FC = () => {
	const [updateNotifications, setUpdateNotifications] = useState<boolean>(true)
	const [currentUserNofications, setCurrentUserNotifications] =
		useState<NotificationMessagesInter[]>()
	const { userName } = useParams()

	const userNotifications: NotificationInteractions | undefined = useFetch(
		`${API}notifications/${userName ? userName : ''}`,
		updateNotifications,
		setUpdateNotifications
	)

	const overWriteNotifications = useModifiedData('PUT')

	useEffect(() => {
		if (userNotifications) {
			setCurrentUserNotifications(userNotifications.notificationMessages)
		}
	}, [userNotifications])

	const handleRemove = async (mode: 'ALL' | 'SINGULAR', id?: string): Promise<void> => {
		if (userName && userNotifications) {
			const data: NotificationInteractions =
				mode === 'ALL'
					? { id: userName, notificationMessages: [] }
					: {
							id: userNotifications.id,
							notificationMessages: userNotifications.notificationMessages.filter(
								(notif: NotificationMessagesInter) => notif.id !== id
							),
					  }

			await overWriteNotifications(data, `notifications/${userName ? userName : ''}`)
			setUpdateNotifications(true)
		}
	}

	return (
		<div style={{ alignItems: 'flex-start' }}>
			<Button
				iconType="remove"
				label="Delete all notifications!"
				handleOrder={() => handleRemove('ALL')}
			/>
			{!!currentUserNofications &&
				userName &&
				currentUserNofications?.map((notif: NotificationMessagesInter) => (
					<InteractionDetails
						key={notif.id}
						interaction={notif}
						userName={userName}
						id={notif.id}
						handleRemove={handleRemove}
					/>
				))}
		</div>
	)
}
