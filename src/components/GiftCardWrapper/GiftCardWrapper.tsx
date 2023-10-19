import type { FC } from 'react'

import { GiftCard } from '@components/index'
import { sharedProps } from '@constants/styles'
import { styled } from 'styled-components'

import type { GiftCardInter } from '../../@types/giftcards'

const GiftCardsWrapper = styled.div`
	${sharedProps}
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	z-index: 11;
`

interface IGiftCardWrapper {
	data?: GiftCardInter[]
}

export const GiftCardWrapper: FC<IGiftCardWrapper> = ({ data }): JSX.Element => {
	return (
		<GiftCardsWrapper>
			{data &&
				data.map((card: GiftCardInter) => <GiftCard card={card} key={`${card.name}-${card.id}`} />)}
		</GiftCardsWrapper>
	)
}
