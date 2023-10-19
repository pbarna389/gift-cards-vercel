/* eslint-disable no-magic-numbers */
import { type FC, useContext } from 'react'

import { FormikInputField, FormikWrapper } from '@components/index'
import { handleShowWarning } from '@constants/constants'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import type { ILogin } from '@context/LoginContext'
import { LoginContext } from '@context/LoginContext'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'
import { useModifiedData } from '@hooks/useModifiedData'
import { ModalSubmitButton } from '@pages/AdminGiftCardModify/components/ModalChangeGiftCard.style'

import { validationSchemaUser } from './validationSchemaUser'

import type { UserFormValues, UserInter } from '$types/giftcards'

export const FormikUserDetailsAddCoins: FC = () => {
	const { userState, userDispatch } = useContext<IUser>(AdminUserContext)

	const { setModalShow } = useContext<IModal>(ModalContext)
	const { loginState, loginDispatch } = useContext<ILogin>(LoginContext)

	const updateData = useModifiedData<UserInter>('PUT')

	const handleFormSubmit = async (values: UserFormValues): Promise<unknown> => {
		if (userState?.data && userDispatch) {
			try {
				const convertedCoinsStrToNumber = Number(values.coins)
				const newValues: UserInter = {
					...userState.data[0],
					coins: convertedCoinsStrToNumber,
				}

				await updateData(newValues, 'users', `/${userState?.data[0]?.id}`)
				userDispatch({
					type: 'RELOAD_MODIFIED_DATA',
					payload: {
						modifiedData: !userState?.modifiedData,
					},
				})

				if (loginState?.user?.id === newValues.id) {
					if (loginDispatch) {
						loginDispatch({ type: 'USER_LOGIN', payload: { user: newValues } })
						localStorage.setItem('user', JSON.stringify(newValues))
					}
				}
			} catch (error) {
				return error
			}
		}
	}

	const typeOfReceive = {
		defaultValue: Number(userState?.data && userState?.data[0].coins),
		birthDay: Number(userState?.data && userState?.data[0].coins) + 10,
		workAnniversary: {
			tree: Number(userState?.data && userState?.data[0].coins) + 3,
			five: Number(userState?.data && userState?.data[0].coins) + 5,
			ten: Number(userState?.data && userState?.data[0].coins) + 10,
			fifteen: Number(userState?.data && userState?.data[0].coins) + 15,
			twenty: Number(userState?.data && userState?.data[0].coins) + 20,
		},
		wedding: Number(userState?.data && userState?.data[0].coins) + 5,
		birthOfChild: Number(userState?.data && userState?.data[0].coins) + 5,
		lectures: Number(userState?.data && userState?.data[0].coins) + 3,
		RnD: Number(userState?.data && userState?.data[0].coins) + 5,
		certification: Number(userState?.data && userState?.data[0].coins) + 5,
	}
	return (
		userState?.data && (
			<FormikWrapper
				initialValues={userState?.data[0]}
				validationSchema={validationSchemaUser}
				handleFormSubmit={handleFormSubmit}
			>
				<FormikInputField
					button={false}
					as="select"
					type="number"
					name="coins"
					labelText="Add coins"
				>
					<option defaultValue={typeOfReceive.defaultValue}>Select an option.</option>

					<optgroup label="Birthday">
						<option value={typeOfReceive.birthDay}>BirthDay + 10 coins</option>
					</optgroup>
					<optgroup label="Work anniversary">
						<option value={typeOfReceive.workAnniversary.tree}>3 years anniversary</option>
						<option value={typeOfReceive.workAnniversary.five}>5 years anniversary</option>
						<option value={typeOfReceive.workAnniversary.ten}>10 years anniversary</option>
						<option value={typeOfReceive.workAnniversary.fifteen}>15 years anniversary</option>
						<option value={typeOfReceive.workAnniversary.twenty}>20 years anniversary</option>
					</optgroup>
					<optgroup label="Wedding">
						<option value={typeOfReceive.wedding}>Wedding + 5 coins</option>
					</optgroup>
					<optgroup label="Lectures">
						<option value={typeOfReceive.lectures}>Lectures + 3 coins</option>
					</optgroup>
					<optgroup label="development of R'n'D ">
						<option value={typeOfReceive.RnD}>Wedding + 5 coins</option>
					</optgroup>
					<optgroup label="Certification">
						<option value={typeOfReceive.certification}>Certification + 5 coins</option>
					</optgroup>
				</FormikInputField>
				<ModalSubmitButton type="button" onClick={() => handleShowWarning(setModalShow)}>
					Submit
				</ModalSubmitButton>
			</FormikWrapper>
		)
	)
}
