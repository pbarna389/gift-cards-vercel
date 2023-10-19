import { type FC, useContext, useState } from 'react'

import type { ArrayHelpers } from 'formik'
import { FieldArray } from 'formik'

import { FormikInputField, FormikWrapper } from '@components/index'
import { convertSentence, handleShowWarning } from '@constants/constants'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import { ModalContext } from '@context/ModalContext'
import { useModifiedData } from '@hooks/index'
import { ModalSubmitButton } from '@pages/AdminGiftCardModify/components/ModalChangeGiftCard.style'

import { AdminStatusListWrapper } from '../AdminStatusListWrapper'
import { ValidationSchemaStatus } from '../validationSchemaStatus'

import type { BoughtGifts, BoughtGIftsSchemas } from '$types/giftcards'

const typeOfDelivery = ['JUST_BOUGHT', 'IN_PROGRESS', 'IN_STOCK', 'DELIVERED', 'REJECTED']

export const AdminStatusItem: FC<{ boughtGifts: BoughtGifts[] }> = ({ boughtGifts }) => {
	// eslint-disable-next-line no-magic-numbers
	const [indexes, setIndexes] = useState<number>(0)
	const { setModalShow } = useContext(ModalContext)
	const { userState, userDispatch } = useContext<IUser>(AdminUserContext)
	const updatedStatus = useModifiedData<BoughtGifts>('PUT')

	const handleSubmitForm = async (values: BoughtGIftsSchemas) => {
		if (userDispatch && values.gifts) {
			const updatedUser = {
				...boughtGifts[indexes],
				deliveryStatus: values.gifts[indexes].deliveryStatus,
			}
			try {
				switch (updatedUser?.deliveryStatus) {
					case 'JUST_BOUGHT':
						updatedUser.status = '1'
						break
					case 'IN_PROGRESS':
						updatedUser.status = '2'
						break
					case 'IN_STOCK':
						updatedUser.status = '3'
						break
					case 'DELIVERED':
						updatedUser.status = '4'
						break
					case 'REJECTED':
						updatedUser.status = '5'
						break
					default:
						break
				}

				await updatedStatus(updatedUser, 'boughtGifts', `${updatedUser.id || ''}`)

				userDispatch({
					type: 'RELOAD_MODIFIED_DATA',
					payload: {
						modifiedData: !userState?.modifiedData,
					},
				})
			} catch (error) {
				return error
			}
		}
	}

	return (
		<>
			{boughtGifts && (
				<FormikWrapper
					initialValues={{ boughtGifts }}
					validationSchema={ValidationSchemaStatus}
					handleFormSubmit={handleSubmitForm}
				>
					<FieldArray
						name="gifts"
						render={(arrayHelpers: ArrayHelpers) => (
							<>
								{!!boughtGifts &&
									boughtGifts?.map((boughtGift: BoughtGifts, giftIndex: number) => (
										<div
											key={`${giftIndex}-${boughtGift.boughtBy}-${boughtGift.idUser}-${boughtGift.boughtTime}`}
										>
											<AdminStatusListWrapper gifts={boughtGift}>
												<>
													<div>
														<FormikInputField
															as="select"
															type="string"
															name={`gifts.${giftIndex}.deliveryStatus`}
															labelText={`Change status for gift`}
															onChange={(e) => {
																setIndexes(giftIndex)
																return arrayHelpers.replace(giftIndex, {
																	...boughtGifts[giftIndex],
																	deliveryStatus: e.currentTarget.value,
																})
															}}
														>
															{typeOfDelivery.map((delivery, idx) => (
																<option
																	value={delivery}
																	key={`option-${boughtGift.id || ''}${boughtGift.boughtBy}${
																		boughtGift.idUser
																	}-${idx}`}
																>
																	{convertSentence(delivery)}
																</option>
															))}
														</FormikInputField>
													</div>
													<ModalSubmitButton
														type="button"
														onClick={() => handleShowWarning(setModalShow)}
													>
														Submit
													</ModalSubmitButton>
												</>
											</AdminStatusListWrapper>
										</div>
									))}
							</>
						)}
					/>
				</FormikWrapper>
			)}
		</>
	)
}
