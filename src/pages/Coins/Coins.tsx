import type { FC } from 'react'

import { Hero, Icons, RelatedItems, TextParagraph } from '@components/index'
import { coinText } from '@constants/index'
import { SuggestH2 } from '@constants/styles'

import type { TextObject } from '../../@types/giftcards'
import { CoinsWrapper, TextContainer } from './Coins.style'

import '../../App.css'

export const Coins: FC = () => {
	return (
		<CoinsWrapper>
			<Hero text="Coins" heroCardBg={<Icons category="coin" />} />
			<TextContainer>
				{coinText.map((object: TextObject, idx: number) => (
					<TextParagraph key={`$paragraph-${idx}`} object={object} />
				))}
			</TextContainer>
			<SuggestH2>...or find your perfect gift</SuggestH2>
			<RelatedItems />
		</CoinsWrapper>
	)
}
