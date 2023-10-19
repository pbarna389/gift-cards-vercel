/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import type { FC } from 'react'

import { Icons } from '..'
import { BtnIconWrapper, StyledButton } from './Button.style'

export type ButtonTypes = 'choose' | 'order' | 'cancel' | 'send' | 'remove'

interface ButtonProps {
	iconType: ButtonTypes
	label: string
	disabled?: boolean
	handleOrder?: (...args: any) => void | Promise<void>
	type?: 'button' | 'submit'
}

export const Button: FC<ButtonProps> = ({
	label,
	iconType,
	disabled = false,
	type = 'button',
	handleOrder,
}): JSX.Element => {
	return (
		<StyledButton
			className={`btn ${iconType} ${type === 'submit' ? 'btn-submit' : ''}`}
			$btnType={iconType}
			disabled={disabled}
			type={type}
			onClick={handleOrder}
		>
			{label}
			<BtnIconWrapper $btnType={iconType}>
				<Icons category={iconType} />
			</BtnIconWrapper>
		</StyledButton>
	)
}
