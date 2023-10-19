import type { FC } from 'react'

import { Button } from '@components/Button'

import type { NotificationMessagesInter } from '$types/giftcards'

interface InteractionDetailsProps {
	handleRemove: (arg1: 'ALL' | 'SINGULAR', arg2: string) => Promise<void>
	id: string
	interaction: NotificationMessagesInter
	userName: string
}

export const InteractionDetails: FC<InteractionDetailsProps> = ({
	interaction,
	handleRemove,
	id,
}): JSX.Element => {
	return (
		<div>
			<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
				<h2>Details</h2>
				<Button
					iconType="remove"
					label="Remove notification!"
					handleOrder={() => handleRemove('SINGULAR', id)}
				/>
			</div>
			<ul>
				<li>Transaction id: {interaction.id}</li>
				<li>Status: {interaction.isDelivered ? 'Delivered' : 'Not delivered'}</li>
				<li>Sender: {interaction.senderName}</li>
				<li>
					Content:
					<ul>
						{interaction.content.giftName && (
							<li>Name of the gift: {interaction.content.giftName}</li>
						)}
						{interaction.content.amount && <li>Amount: {interaction.content.amount}</li>}
					</ul>
				</li>
			</ul>
		</div>
	)
}
