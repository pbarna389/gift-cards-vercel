import type { FC } from 'react'
import { useState } from 'react'

import { API } from '@constants/index'
import { useFetch } from '@hooks/useFetch'

import { AdminSuggestionWrapper, SuggestionH1 } from './AdminSuggestions.style'
import { AdminSuggestionItem } from '.'

import type { NewSuggestionInter } from '$types/giftcards'

export const AdminSuggestions: FC = () => {
	const [updateData, setUpdateData] = useState<boolean>(true)

	const suggestionData: NewSuggestionInter[] | undefined = useFetch<NewSuggestionInter[]>(
		`${API}suggestions`,
		updateData,
		setUpdateData
	)

	return (
		<AdminSuggestionWrapper>
			<SuggestionH1>Suggestions</SuggestionH1>
			{suggestionData &&
				suggestionData.map((user: NewSuggestionInter, idx: number) => (
					<div key={`${user.userName}-${user.id}`}>
						<h2 key={`h1-${user.userName}`}>{user.userName}</h2>
						<AdminSuggestionItem
							key={`${user.userName}-${user.id}-${idx}`}
							suggestions={user.suggestions}
							user={user}
							setUpdateData={setUpdateData}
						/>
					</div>
				))}
		</AdminSuggestionWrapper>
	)
}
