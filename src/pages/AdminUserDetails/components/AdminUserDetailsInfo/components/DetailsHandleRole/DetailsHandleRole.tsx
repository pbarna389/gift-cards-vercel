import { type FC, useContext } from 'react'

import { FormikInputField, FormikWrapper } from '@components/index'
import type { IUser } from '@context/AdminUserContext'
import { AdminUserContext } from '@context/AdminUserContext'
import { useModifiedData } from '@hooks/useModifiedData'
import { validationSchemaUser } from '@pages/AdminUserDetails/components/AdminUserDetailsAddCoins/components/validationSchemaUser'

import { DetailsInfoField } from '../DetailsInfoField/DetailsInfoField'
import { HandlesRolesWrapper } from './DetailsHandleRole.style'

import type { UserFormValues, UserInter } from '$types/giftcards'

const roles = ['USER', 'ADMIN']
const regions = ['ua', 'eu']
const divisions = ['C#', 'Java', 'Python', 'React', 'JS']

export const DetailsHandleRole: FC<{
	user: UserInter
}> = ({ user }) => {
	const { userDispatch } = useContext<IUser>(AdminUserContext)

	const updateData = useModifiedData<UserFormValues>('PUT')

	const handleFormSubmit = async (values: UserFormValues): Promise<unknown> => {
		if (userDispatch) {
			try {
				await updateData(values, 'users', `/${user?.id}`)
				userDispatch({
					type: 'RELOAD_MODIFIED_DATA',
					payload: {
						modifiedData: true,
					},
				})
			} catch (error) {
				return error
			}
		}
	}

	return (
		<>
			<FormikWrapper
				validationSchema={validationSchemaUser}
				initialValues={user}
				handleFormSubmit={handleFormSubmit}
			>
				<HandlesRolesWrapper>
					<DetailsInfoField label={'Role:'} info={user.role.toLowerCase()} />

					<FormikInputField
						button={false}
						as="select"
						name={'role'}
						labelText={'Change role:'}
						type="option"
						style={{ display: 'flex', gap: '2rem' }}
					>
						{roles.map((role, index) => (
							<option value={role} key={`${role}-${index}`}>
								{role.toLowerCase()}
							</option>
						))}
					</FormikInputField>
				</HandlesRolesWrapper>
				<HandlesRolesWrapper>
					<DetailsInfoField label={'Role:'} info={user.division.toLowerCase()} />

					<FormikInputField
						button={false}
						as="select"
						name={'division'}
						labelText={'Change division:'}
						type="option"
						style={{ display: 'flex', gap: '2rem' }}
					>
						{divisions.map((division, index) => (
							<option value={division} key={`${division}-${index}`}>
								{division.toLowerCase()}
							</option>
						))}
					</FormikInputField>
				</HandlesRolesWrapper>
				<HandlesRolesWrapper>
					<DetailsInfoField label={'Region:'} info={user.region} />
					<FormikInputField
						button={false}
						as="select"
						name={'region'}
						labelText={'Change region:'}
						type="option"
						style={{ display: 'flex', gap: '2rem' }}
					>
						{regions.map((region, index) => (
							<option value={region} key={`${region}-${index}`}>
								{region.toLowerCase()}
							</option>
						))}
					</FormikInputField>
				</HandlesRolesWrapper>
			</FormikWrapper>
		</>
	)
}
