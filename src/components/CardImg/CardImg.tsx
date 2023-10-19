/* eslint-disable array-callback-return */
import type { FC } from 'react'
import { useContext, useState } from 'react'

import LazyLoad from 'react-lazy-load'

import { FavouriteButton } from '@components/FavouriteButton'
import {
	CardPlaceHolder,
	combineStringConverter,
	handleImgClick,
	handleModalClose,
	handleMouseMovement,
	stringToArray,
	stringToLowerCase,
} from '@constants/index'
import { H2Elements } from '@constants/styles'
import type { IItems, IModal } from '@context/index'
import { ItemContext, ModalContext } from '@context/index'

import type { CheckoutDataInter, GiftCardInter } from '../../@types/giftcards'
import { Icons, Tooltip } from '..'
import { AmountCounter, CardImage, ImgLink, ImgWrapper, TooltipWrapper } from './CardImg.style'

interface CardImgProps {
	card: GiftCardInter
	className?: string
	showAmount?: boolean
	showRegion?: boolean
}

export const CardImg: FC<CardImgProps> = ({
	card,
	className,
	showRegion = false,
	showAmount = false,
}) => {
	const { categoryID, name, cardImg, amount, regionFlag, attentionMessage, id } =
		card as CheckoutDataInter

	const [visible, setVisible] = useState<boolean>(false)

	const { itemDispatch } = useContext<IItems>(ItemContext)

	const { setModalShow } = useContext<IModal>(ModalContext)

	const handleCardClick = () => {
		handleImgClick(card, itemDispatch)

		if (setModalShow) {
			handleModalClose(setModalShow)
		}
	}

	return (
		<ImgWrapper>
			<ImgLink
				to={`/${categoryID}/${combineStringConverter(
					stringToLowerCase,
					stringToArray,
					name,
					' ',
					'_'
				)}`}
				className={className && className}
			>
				<LazyLoad className="lazy-load">
					<CardImage
						alt="Card image"
						className="card-img"
						src={!cardImg ? CardPlaceHolder : cardImg}
						onClick={handleCardClick}
					/>
				</LazyLoad>
				{showRegion && <H2Elements className="card-h2">{regionFlag}</H2Elements>}
				{showAmount && <AmountCounter>{amount}X</AmountCounter>}
				{attentionMessage && (
					<>
						<TooltipWrapper
							onMouseEnter={() => handleMouseMovement(visible, setVisible)}
							onMouseLeave={() => handleMouseMovement(visible, setVisible)}
						>
							<Icons category="attention" />
						</TooltipWrapper>
						<Tooltip visible={visible} label={attentionMessage} />
					</>
				)}
			</ImgLink>
			<FavouriteButton giftName={name} giftId={Number(id)} />
		</ImgWrapper>
	)
}
