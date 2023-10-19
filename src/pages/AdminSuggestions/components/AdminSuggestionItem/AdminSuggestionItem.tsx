/* eslint-disable no-magic-numbers */
/* eslint-disable array-callback-return */
import type { Dispatch, FC, SetStateAction } from 'react'

import type { ArrayHelpers } from 'formik'
import { FieldArray } from 'formik'

import { Button, FormikInputField, FormikWrapper } from '@components/index'
import { useModifiedData } from '@hooks/useModifiedData'

import { AdminSuggestionItemWrapper } from './AdminSuggestionItem.styles'
import { AdminSuggestionItemValidationSchema } from './AdminSuggestionItemValidationSchema'

import type {
	AdminSuggestionFormValues,
	NewSuggestionInter,
	SuggestionInter,
} from '$types/giftcards'

interface AdminSuggestionItemProps {
	setUpdateData: Dispatch<SetStateAction<boolean>>
	suggestions: SuggestionInter[]
	user: NewSuggestionInter
	className?: string
}

export const AdminSuggestionItem: FC<AdminSuggestionItemProps> = ({
	suggestions,
	user,
	setUpdateData,
	className,
}) => {
	const updateSuggestion = useModifiedData('PUT')

	const handleSuggestionSubmit = async (values: AdminSuggestionFormValues) => {
		const updatedUser = { ...user, suggestions: values.suggestions }

		await updateSuggestion(updatedUser, 'suggestions/', updatedUser.id)

		setUpdateData(true)
	}

	const handleDeleteSuggestion = async (suggestionId: string): Promise<void> => {
		const userData = { ...user }
		const newSuggestions = [...userData.suggestions].filter(
			(sug: SuggestionInter) => sug.id !== suggestionId
		)

		const newUserData = { ...userData, suggestions: [...newSuggestions] }

		await updateSuggestion(newUserData, 'suggestions/', userData.id)

		setUpdateData(true)
	}

	const options = ['APPROVED', 'REJECTED', 'NEW_NOT_INVESTIGATED']

	return (
		<AdminSuggestionItemWrapper>
			<FormikWrapper
				initialValues={{ suggestions }}
				validationSchema={AdminSuggestionItemValidationSchema}
				handleFormSubmit={handleSuggestionSubmit}
			>
				<FieldArray
					name="suggestions"
					render={(arrayHelpers: ArrayHelpers) => (
						<div className={`${className ? className : ''}`}>
							{!!suggestions &&
								suggestions?.map((suggestion: SuggestionInter, idx: number) => (
									<div key={`${suggestion.id}-${suggestion.creationTime}`}>
										<div>
											<h2>Item name: {suggestion.suggestionName}</h2>
											<h3>Description: {suggestion.suggestion}</h3>
											<FormikInputField
												as="select"
												name={`suggestions.${idx}.status`}
												labelText="Current Status"
												type="option"
												onChange={(e) =>
													arrayHelpers.replace(idx, {
														...suggestion,
														status: e.currentTarget.value,
													})
												}
											>
												{options.map((option: string, idx: number) => (
													<option
														value={option}
														key={`option-${suggestion.suggestionName}-${suggestion.creationTime}-${suggestion.id}-${idx}`}
													>
														{option}
													</option>
												))}
											</FormikInputField>
										</div>
										<div className="btn-wrapper">
											<Button type="submit" label="Update Status" iconType="send" />
											<div onClick={() => void handleDeleteSuggestion(suggestion.id)}>
												<Button type="button" label="Delete" iconType="remove" />
											</div>
										</div>
									</div>
								))}
						</div>
					)}
				/>
			</FormikWrapper>
		</AdminSuggestionItemWrapper>
	)
}
