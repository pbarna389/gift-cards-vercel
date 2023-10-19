/* eslint-disable no-magic-numbers */
import type { FC } from 'react'

import { LinkBase } from '@constants/styleIndex'

import { DetailsLabel, StyledPrevPurchase } from './DetailsInfoField.style'

import type { PrevPurchase } from '$types/giftcards'

interface DetailsInfoFieldProps {
	info: PrevPurchase | string | number
	label: string
	isArray?: boolean
	link?: string
}

export const DetailsInfoField: FC<DetailsInfoFieldProps> = ({
	label,
	info,
	link = '',
	isArray = false,
}) => {
	return (
		<LinkBase to={link}>
			<DetailsLabel>
				{label}
				{isArray ? (
					<span>
						{typeof info === 'object' && info.gifts && info.gifts.length > 0 ? (
							<StyledPrevPurchase>
								<span>{info.gifts[0].name}</span>
								<span>bought at {info.boughtTime}</span>
							</StyledPrevPurchase>
						) : (
							'There is no purchase yet'
						)}
					</span>
				) : (
					<span>{typeof info === 'string' || typeof info === 'number' ? info : ''}</span>
				)}
			</DetailsLabel>
		</LinkBase>
	)
}
