import type { FC } from 'react'

import { useField } from 'formik'

import { Button, Icons } from '@components/index'
import {
	StyledErrorMessage,
	StyledErrorWrapper,
	StyledIdField,
	StyledLabelGifts,
	StyledTextField,
} from '@constants/styleIndex'

export interface FormikInputFieldProps {
	labelText: string
	name: string
	type: string
	as?: string
	button?: boolean
	buttonText?: string
	children?: React.ReactNode
	isAdminForm?: boolean
	isReadOnly?: boolean
	isTextarea?: boolean
	onChange?: (arg: React.FormEvent<HTMLInputElement>) => void
	placeholder?: string
	style?: React.CSSProperties
}

export const errorStyle = {
	width: '35px',
	height: '35px',
	border: 'none',
	borderRadius: 'none',
	padding: 'none',
}

export const FormikInputField: FC<FormikInputFieldProps> = ({
	buttonText,
	labelText,
	children,
	style,
	isTextarea = false,
	button = true,
	isReadOnly = false,
	isAdminForm = false,
	...props
}): JSX.Element => {
	const [field, meta] = useField(props)

	return (
		<>
			{!isReadOnly ? (
				<StyledLabelGifts style={style}>
					{labelText}
					{isTextarea ? (
						<StyledTextField {...field} {...props} style={{ height: '10rem' }}>
							{children && children}
						</StyledTextField>
					) : (
						<StyledTextField {...field} {...props}>
							{children && children}
						</StyledTextField>
					)}
				</StyledLabelGifts>
			) : (
				<div style={{ margin: ' 0 auto' }}>
					<StyledLabelGifts>
						{labelText}
						<StyledIdField {...field} {...props} readOnly />
					</StyledLabelGifts>
				</div>
			)}
			{meta.error && meta.touched && (
				<>
					{isAdminForm ? (
						<StyledErrorWrapper style={{ height: '2.5rem' }}>
							<Icons category="error" sharedStyle={errorStyle} error />
							<StyledErrorMessage name={field.name} component="" />
						</StyledErrorWrapper>
					) : (
						<StyledErrorWrapper>
							<Icons category="error" sharedStyle={errorStyle} error />
							<StyledErrorMessage name={field.name} component="" />
						</StyledErrorWrapper>
					)}
				</>
			)}
			{button && buttonText && <Button type="submit" label={buttonText} iconType="send" />}
		</>
	)
}
