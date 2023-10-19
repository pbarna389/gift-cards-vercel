import type { FC } from 'react'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import AnimatedBg from '@assets/animated_bg.png'
import TeamLogo from '@assets/team_name.png'
import { FormikInputField, FormikWrapper, Hero } from '@components/index'
import { API, categories, convertSentence, handleShowWarning } from '@constants/constants'
import type { IGiftCards } from '@context/GiftCardContext'
import { GiftCardContext } from '@context/GiftCardContext'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'
import { useFetch } from '@hooks/useFetch'
import { useModifiedData } from '@hooks/useModifiedData'
import { StyledUserPageWrapper } from '@pages/AdminUserDetails/AdminUserDetails.style'

import { InputWrapper, ModalInputsWrapper, ModalSubmitButton } from './ModalChangeGiftCard.style'
import { validationSchemaGiftObject } from './validationSchemaGiftObject'

import type { GiftCardFormValues, GiftCardInter, HTTPMethods } from '$types/giftcards'

export const FormModifyCard: FC<{
	giftCard: GiftCardInter
	HTTPMethod: HTTPMethods
	lastId: string
}> = ({ giftCard, HTTPMethod, lastId }) => {
	const updateData = useModifiedData<GiftCardFormValues>(HTTPMethod)

	const { setModalShow } = useContext<IModal>(ModalContext)

	const navigate = useNavigate()

	const { giftCardState, giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)

	const GiftData = useFetch<GiftCardInter[]>(
		`${API}all?_sort=categoryID`,
		giftCardState?.modifiedData
	)
	const handleFormSubmit = async (values: GiftCardFormValues) => {
		if (values.id) {
			try {
				switch (values.region) {
					case 'eu':
						values.regionFlag = '🇪🇺'
						break
					case 'uk':
						values.regionFlag = '🇺🇦'
						break
					default:
						values.regionFlag = '🇺🇳'
						break
				}
				if (lastId && lastId < giftCard.id) {
					await updateData(values)
				} else {
					await updateData(values, 'all/', `${values.id}`)
				}

				if (giftCardDispatch) {
					giftCardDispatch({
						type: 'RELOAD_MODIFIED_DATA',
						payload: {
							modifiedData: true,
							data: GiftData,
						},
					})
				}
			} catch (error) {
				return error
			}
		}
		return navigate('/admin')
	}

	const heroText = `${
		HTTPMethod === 'PUT' ? `Modify the gift card: ${giftCard.name}` : 'Create a new gift card'
	}`
	return (
		<StyledUserPageWrapper>
			<Hero bg={AnimatedBg} text={heroText} heroCardBg={TeamLogo} animate />
			<FormikWrapper
				validationSchema={validationSchemaGiftObject}
				initialValues={giftCard}
				handleFormSubmit={handleFormSubmit}
			>
				<FormikInputField type="number" name="id" labelText="Cards' ID" isReadOnly={true} />
				<ModalInputsWrapper>
					<InputWrapper>
						<FormikInputField
							button={false}
							type="text"
							name="name"
							labelText="name of the gift card"
							isAdminForm={true}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormikInputField
							as="select"
							name="categoryID"
							labelText="The category of Gift card"
							type="text"
							isAdminForm={true}
						>
							{categories.map((category, index) => (
								<option value={category} key={`${category}-${index}`}>
									{convertSentence(category)}
								</option>
							))}
						</FormikInputField>
					</InputWrapper>
				</ModalInputsWrapper>
				<ModalInputsWrapper>
					<InputWrapper>
						<FormikInputField
							as="select"
							name="region"
							labelText="The category of Gift card"
							type="text"
							isAdminForm={true}
						>
							<option value="uk">UA</option>
							<option value="eu">EU</option>
						</FormikInputField>
					</InputWrapper>
					<InputWrapper>
						<FormikInputField
							type="number"
							name="price"
							labelText="Price of gift card"
							isAdminForm={true}
						/>
					</InputWrapper>
				</ModalInputsWrapper>
				<ModalInputsWrapper>
					<InputWrapper>
						<FormikInputField
							type="text"
							name="attentionMessage"
							labelText="Write an attention message"
							isAdminForm={true}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormikInputField
							type="text"
							name="backgroundImg"
							isAdminForm={true}
							labelText="Link for background img"
						/>
					</InputWrapper>
				</ModalInputsWrapper>
				<ModalInputsWrapper>
					<InputWrapper>
						<FormikInputField
							type="text"
							name="cardImg"
							labelText="Link for card img"
							isAdminForm={true}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormikInputField
							type="text"
							name="shortDesc"
							labelText="Write short description"
							isAdminForm={true}
						/>
					</InputWrapper>
				</ModalInputsWrapper>
				<FormikInputField
					as="textarea"
					type="text"
					name="description"
					labelText="Write full description"
					isTextarea={true}
					isAdminForm={true}
				/>
				<ModalSubmitButton type="button" onClick={() => handleShowWarning(setModalShow)}>
					Submit
				</ModalSubmitButton>
			</FormikWrapper>
		</StyledUserPageWrapper>
	)
}
