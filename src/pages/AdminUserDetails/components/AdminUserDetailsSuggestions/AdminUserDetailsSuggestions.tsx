import type { FC } from 'react'
import { useContext, useEffect, useState } from 'react'

import { API } from '@constants/index'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import { useFetch } from '@hooks/useFetch'
import { AdminSuggestionItem } from '@pages/AdminSuggestions'

import type { NewSuggestionInter } from '$types/giftcards'

export const AdminUserDetailsSuggestions: FC = () => {
	const [updateData, setUpdateData] = useState<boolean>(true)
	const [activeUserSuggestions, setActiveUserSuggestions] = useState<NewSuggestionInter>()

	const { userState } = useContext<IUser>(AdminUserContext)

	const suggestionData: NewSuggestionInter[] | undefined = useFetch<NewSuggestionInter[]>(
		`${API}suggestions`,
		updateData,
		setUpdateData
	)

	useEffect(() => {
		if (userState?.data && suggestionData) {
			const { id } = userState.data[0]

			const selectedUserSuggestions = suggestionData.find(
				(sug: NewSuggestionInter) => sug.id === id
			)

			setActiveUserSuggestions(selectedUserSuggestions)
		}
	}, [userState?.data, suggestionData])

	useEffect(() => {}, [activeUserSuggestions])

	return (
		<div>
			{activeUserSuggestions?.suggestions.length ? (
				<div key={`${activeUserSuggestions.userName}-${activeUserSuggestions.id}`}>
					<h2 key={`h1-${activeUserSuggestions.userName}`}>Suggestions from the user:</h2>
					<AdminSuggestionItem
						key={`${activeUserSuggestions.userName}-${activeUserSuggestions.id}-${activeUserSuggestions.userName}-${activeUserSuggestions.suggestions.length}`}
						suggestions={activeUserSuggestions.suggestions}
						user={activeUserSuggestions}
						setUpdateData={setUpdateData}
						className="profile-suggestion"
					/>
				</div>
			) : (
				<h2>No suggestions to show!</h2>
			)}
		</div>
	)
}
