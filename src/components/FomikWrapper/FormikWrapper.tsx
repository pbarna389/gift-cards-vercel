import { type FC, useContext } from 'react'

import type { FormikHelpers } from 'formik'
import { Formik } from 'formik'

import { ModalWrapper } from '@components/Modal/Modal.style'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'
import { ModalSubmitButton } from '@pages/AdminGiftCardModify/components/ModalChangeGiftCard.style'
import type * as yup from 'yup'

import type {
	AdminSuggestionSchema,
	BoughtGiftsValidSchema,
	CoinGiftSchema,
	CombinedFormValueInterfaces,
	GiftBoughtValuesProps,
	GiftCardSchema,
	TextAreaSchema,
	UserInter,
} from '../../@types/giftcards'
import { Modal } from '..'
import {
	StyledFomikModalWrapper,
	StyledForm,
	StyledWarningButtonsWrapper,
} from './FormikWrapper.style'

export interface FormikWrapperProps {
	children: React.ReactNode
	handleFormSubmit: (
		values: CombinedFormValueInterfaces,
		setSubmitting: (isSubmitting: boolean) => void
	) => Promise<unknown> | void
	initialValues: CombinedFormValueInterfaces
	validationSchema: yup.ObjectSchema<
		| TextAreaSchema
		| CoinGiftSchema
		| GiftCardSchema
		| UserInter
		| BoughtGiftsValidSchema
		| AdminSuggestionSchema
		| GiftBoughtValuesProps
	>
}

export const FormikWrapper: FC<FormikWrapperProps> = ({
	validationSchema,
	initialValues,
	children,
	handleFormSubmit,
}) => {
	const { setModalShow } = useContext<IModal>(ModalContext)
	const handleCancel = () => {
		if (setModalShow) {
			setModalShow(false)
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (
				values: CombinedFormValueInterfaces,
				{ setSubmitting }: FormikHelpers<CombinedFormValueInterfaces>
			) => {
				await handleFormSubmit(values, setSubmitting)
				handleCancel()
			}}
		>
			<StyledForm className="formikWrapper">
				<Modal route={document.querySelector('.formikWrapper')}>
					<ModalWrapper>
						<StyledFomikModalWrapper>
							<div>
								<p>Are you sure?</p>
							</div>
							<StyledWarningButtonsWrapper>
								<ModalSubmitButton type="submit">Confirm</ModalSubmitButton>
								<ModalSubmitButton onClick={handleCancel}>Cancel</ModalSubmitButton>
							</StyledWarningButtonsWrapper>
						</StyledFomikModalWrapper>
					</ModalWrapper>
				</Modal>
				{children}
			</StyledForm>
		</Formik>
	)
}
