import type { Dispatch, FC, SetStateAction } from 'react'
import { useContext } from 'react'

import { useParams } from 'react-router-dom'

import { Icons, ItemPrice } from '@components/index'
import { handleModalClose } from '@constants/index'
import type { IModal } from '@context/ModalContext'
import { ModalContext } from '@context/ModalContext'

import type { GiftCardInter, UserInter } from '../../@types/giftcards'
import {
	CategoryLink,
	CategoryWrapper,
	ItemName,
	ItemSharedStyle,
	ItemShDescParagraph,
} from './ItemDetails.styles'

type DataProps = GiftCardInter | null

interface ItemDetailsProps<T> {
	data?: T
	setModalShow?: Dispatch<SetStateAction<boolean>> | null
	user?: UserInter | null
}

export const ItemDetails: FC<ItemDetailsProps<DataProps>> = ({ data, user }): JSX.Element => {
	const { setModalShow } = useContext<IModal>(ModalContext)

	const { category } = useParams()

	if (!data) {
		return <div>Loading...</div>
	}
	return (
		<>
			<ItemName>
				<h2>{data.name}</h2>
				<p>{data.region}</p>
			</ItemName>
			<ItemShDescParagraph className="short-desc">{data.shortDesc}</ItemShDescParagraph>
			<ItemPrice price={data.price} />
			{!user ? (
				<p>Login, to see your balance and order a gift</p>
			) : (
				<p>Your account&#39;s balance: {user.coins}</p>
			)}
			<CategoryLink to={`/${category ? category : data.categoryID}`} className="category-link">
				<CategoryWrapper
					className="category-wrapper"
					onClick={() => handleModalClose(setModalShow)}
				>
					<Icons category={data.categoryID} sharedStyle={ItemSharedStyle} value={data.categoryID} />
				</CategoryWrapper>
			</CategoryLink>
		</>
	)
}
