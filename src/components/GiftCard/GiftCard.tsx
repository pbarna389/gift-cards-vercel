import type { FC } from 'react'
import { useContext } from 'react'

import { AddButton, CardImg, Icons } from '@components/index'
import {
	CategoryLink,
	H2Elements,
	IconSharedStyle,
	NameWrapper,
	PriceWrapper,
	ShortDescParagraph,
} from '@constants/styles'
import type { IGiftCategory } from '@context/index'
import { GiftCardCategoryContext } from '@context/index'

import type { CheckoutDataInter, GiftCardInter } from '../../@types/giftcards'
import { BtnCategory, CardBody, CardWrapper } from './GiftCard.styles'

interface GiftCardProps {
	card: GiftCardInter
}

export const GiftCard: FC<GiftCardProps> = ({ card }) => {
	const { categoryID, price, shortDesc, name } = card

	const { giftCardCategoryDispatch } = useContext<IGiftCategory>(GiftCardCategoryContext)

	const handleCategoryChange = (newCategoryID: string) => {
		if (giftCardCategoryDispatch) {
			giftCardCategoryDispatch({
				type: 'CHANGE_SELECTED_ID',
				payload: { categoryName: newCategoryID, loading: false },
			})
		}
	}

	return (
		<CardWrapper>
			<CardImg card={card} className="zoomable-card" showRegion={true} />
			<CardBody>
				<NameWrapper>
					<H2Elements>{name}</H2Elements>
					<AddButton card={card as CheckoutDataInter} />
				</NameWrapper>
				<ShortDescParagraph>{shortDesc}</ShortDescParagraph>
				<div className="wrapper" onClick={() => handleCategoryChange(categoryID)}>
					<CategoryLink to={`/${categoryID}`}>
						<PriceWrapper>
							<BtnCategory>
								<Icons category={categoryID} sharedStyle={IconSharedStyle} value={categoryID} />
								<Icons category={'price'} sharedStyle={IconSharedStyle} value={price} />
							</BtnCategory>
						</PriceWrapper>
					</CategoryLink>
				</div>
			</CardBody>
		</CardWrapper>
	)
}
