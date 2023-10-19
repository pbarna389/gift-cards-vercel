/* eslint-disable no-magic-numbers */
import { type FC, useContext, useState } from 'react'

import {
	Button,
	FormikInputField,
	FormikWrapper,
	Hero,
	Icons,
	RelatedItems,
} from '@components/index'
import { API, handleShowWarning } from '@constants/index'
import { MainPageContentWrapperWithIcons, SuggestH2 } from '@constants/styles'
import type { ILogin } from '@context/LoginContext'
import { LoginContext } from '@context/LoginContext'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'
import { useFetch } from '@hooks/index'
import { useModifiedData } from '@hooks/useModifiedData'
import { textAreaValidationSchema } from '@utils/index'

import type {
	NewSuggestionInter,
	SuggestionFormInter,
	SuggestionFormValues,
	SuggestionInter,
} from '../../@types/giftcards'
import { SuggestWrapper } from './Suggestions.style'

import '../../App.css'

const initialSuggestionValues: SuggestionFormInter = {
	suggestion: '',
	suggestionName: '',
}

export const Suggestions: FC = () => {
	const [updateData, setUpdateData] = useState<boolean>(true)
	const { setModalShow } = useContext<IModal>(ModalContext)
	const { loginState } = useContext<ILogin>(LoginContext)

	const sendSuggestionData = useModifiedData<NewSuggestionInter>('POST')
	const updateSuggestionData = useModifiedData<NewSuggestionInter>('PUT')
	const suggestionsData = useFetch<NewSuggestionInter[]>(
		`${API}suggestions`,
		updateData,
		setUpdateData
	)

	const handleSuggestionSubmit = async (values: SuggestionFormValues) => {
		if (loginState?.user && values.suggestion && values.suggestionName) {
			setUpdateData(true)
			const { userName, id } = loginState.user
			const { suggestion, suggestionName } = values

			const time = new Date()

			const currentTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}-${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}-${time.getMilliseconds()}`

			const newSuggestion: SuggestionInter = {
				id: `suggestion-${id}-${suggestionName.split(' ').join('')}-${currentTime}`,
				creationTime: currentTime,
				suggestion,
				suggestionName,
				status: 'NEW_NOT_INVESTIGATED',
			}

			const loggedInUserSuggestions: NewSuggestionInter | undefined = suggestionsData?.find(
				(suggestions: NewSuggestionInter) => suggestions.id === id
			)

			const updatedSuggestions: NewSuggestionInter = {
				id,
				userName,
				suggestions: loggedInUserSuggestions
					? [
							...loggedInUserSuggestions.suggestions,
							{
								...newSuggestion,
							},
					  ]
					: [{ ...newSuggestion }],
			}

			if (!loggedInUserSuggestions) {
				await sendSuggestionData(updatedSuggestions, 'suggestions')
			} else {
				await updateSuggestionData(updatedSuggestions, 'suggestions/', id)
			}

			values.suggestion = ''
			values.suggestionName = ''
		}
	}

	return (
		<MainPageContentWrapperWithIcons>
			<Hero text="Suggest a gift" heroCardBg={<Icons category="gift" />} />
			<SuggestWrapper>
				<SuggestH2>Contact us</SuggestH2>
				<FormikWrapper
					validationSchema={textAreaValidationSchema}
					initialValues={initialSuggestionValues}
					handleFormSubmit={handleSuggestionSubmit}
				>
					<FormikInputField
						type="text"
						name="suggestionName"
						placeholder="Your dream item's name"
						labelText="ItemName"
					/>
					<FormikInputField
						as="textarea"
						type="text"
						name="suggestion"
						placeholder="Describe your dream's gift..."
						labelText="Please write your suggestions"
					/>
					<Button
						label="Send you suggestion!"
						iconType="send"
						type="button"
						handleOrder={() => handleShowWarning(setModalShow)}
					/>
				</FormikWrapper>
				<SuggestH2>...or find your perfect gift</SuggestH2>
			</SuggestWrapper>
			<RelatedItems />
		</MainPageContentWrapperWithIcons>
	)
}
