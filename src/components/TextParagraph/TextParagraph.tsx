import type { FC } from 'react'

import type { TextObject } from '../../@types/giftcards'
import { TextWrapper } from './TextParagraph.style'

interface TextParagraphProps {
	object: TextObject
}

export const TextParagraph: FC<TextParagraphProps> = ({ object }) => {
	return (
		<TextWrapper>
			<h2>{object.h2}</h2>
			{Array.isArray(object.text) ? (
				object.text.map((text: string, idx: number) => <p key={`${text}-${idx}`}>{text}</p>)
			) : (
				<p>{object.text}</p>
			)}
		</TextWrapper>
	)
}
