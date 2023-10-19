import { type FC, useContext } from 'react'

import { convertSentence, handleShowWarning } from '@constants/constants'
import { LinkBase } from '@constants/styles'
import type { IAdminChooseId, IModal } from '@context/index'
import { AdminChooseIdContext, ModalContext } from '@context/index'

import { BtnModifyCard } from '../BtnChange/BtnModifyCard'
import { brakePoint } from '../ListWrapper/ListWrapper'
import { GiftCardFieldWrapper, GiftLine } from './GiftCardField.style'

interface GiftCardProps {
	category: string
	description: string
	id: string
	name: string
	price: number
	region: string
	width: number
}

export const GiftCardField: FC<GiftCardProps> = (data) => {
	const { name, category, region, price, id, width } = data
	const { setModalShow } = useContext<IModal>(ModalContext)
	const { adminChooseIdDispatch } = useContext<IAdminChooseId>(AdminChooseIdContext)

	return (
		<GiftCardFieldWrapper>
			<GiftLine>
				<span>{name}</span>
			</GiftLine>
			<GiftLine>
				<span>{convertSentence(category)}</span>
			</GiftLine>
			<GiftLine>
				<span>{region}</span>
			</GiftLine>
			<GiftLine>
				<span>{price}</span>
			</GiftLine>
			{width > brakePoint ? (
				<>
					<LinkBase to={`${id}`}>
						<BtnModifyCard nameOfIcon="change" />
					</LinkBase>
					<BtnModifyCard
						nameOfIcon={'delete'}
						onClick={() => handleShowWarning(setModalShow, id, adminChooseIdDispatch)}
					/>
				</>
			) : null}
		</GiftCardFieldWrapper>
	)
}
