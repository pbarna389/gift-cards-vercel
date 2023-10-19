import { type FC } from 'react'

import { convertSentence } from '@constants/index'

import { AdminStatusSummary } from '../AdminStatusSummary'
import { StyledDetails, StyledSummary, StyledWrapperField } from './AdminStatusListWrapper.style'

import type { BoughtGifts } from '$types/giftcards'

export const AdminStatusListWrapper: FC<{ children: JSX.Element; gifts?: BoughtGifts }> = ({
	children,
	gifts,
}) => {
	// console.log(gifts)

	return (
		gifts && (
			<StyledWrapperField>
				<StyledDetails>
					<StyledSummary>
						<span>Bought by: {gifts?.boughtBy}</span>
						<span> at: {gifts?.boughtTime}</span>
						<span>
							Status:
							{gifts?.deliveryStatus && convertSentence(gifts?.deliveryStatus)}
						</span>
						{children}
					</StyledSummary>

					<div>
						{gifts?.gifts &&
							gifts?.gifts.map((gift) => (
								<AdminStatusSummary
									prevPurchase={gift}
									key={`${gift.categoryID}-${gift.id}-${gift.amount}`}
								/>
							))}
					</div>
				</StyledDetails>
			</StyledWrapperField>
		)
	)
}
