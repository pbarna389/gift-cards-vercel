import React, { type FC, useContext, useEffect, useState } from 'react'

import {
	StyledFomikModalWrapper,
	StyledWarningButtonsWrapper,
} from '@components/FomikWrapper/FormikWrapper.style'
import { Modal } from '@components/Modal'
import { ModalWrapper } from '@components/Modal/Modal.style'
import { basicNumber, handleShowWarning } from '@constants/constants'
import { LinkBase } from '@constants/styles'
import type { IAdminChooseId, IGiftCards, IModal } from '@context/index'
import { AdminChooseIdContext, GiftCardContext, ModalContext } from '@context/index'
import { CardWrapper, WrapperGiftsAdmin } from '@pages/Admin/Admin.style'
import { handleDeleteData } from '@pages/Admin/utils'
import { ModalSubmitButton } from '@pages/AdminGiftCardModify/components/ModalChangeGiftCard.style'

import { BtnModifyCard } from '../BtnChange/BtnModifyCard'
import { GiftCardField } from '../GiftCardField'
import { GiftCardBtnWrapper } from '../GiftCardField/GiftCardField.style'
import { GiftCardType } from '../GiftCardType/GiftCardType'

import type { GiftCardInter } from '$../../@types/giftcards'

export const brakePoint = 564

interface IGiftCardWrapper {
	data?: GiftCardInter[]
}

export const ListWrapper: FC<IGiftCardWrapper> = ({ data }): JSX.Element => {
	const [width, setWidth] = useState<number>(basicNumber)
	const { giftCardState, giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)
	const { setModalShow } = useContext<IModal>(ModalContext)
	const { innerWidth } = window
	const { adminChooseIdState, adminChooseIdDispatch } =
		useContext<IAdminChooseId>(AdminChooseIdContext)
	useEffect(() => {
		const newInnerWidth = () => {
			setWidth(window.innerWidth)
		}

		setWidth(innerWidth)
		window.addEventListener('resize', newInnerWidth)

		return () => {
			window.removeEventListener('resize', newInnerWidth)
		}
	}, [width, innerWidth])

	const handleCancel = () => {
		if (setModalShow) {
			setModalShow(false)
		}
	}

	return (
		<WrapperGiftsAdmin>
			{width > brakePoint ? <GiftCardType /> : null}
			{data &&
				data.map((card: GiftCardInter) => (
					<React.Fragment key={`${card.name}-${card.id}`}>
						{width <= brakePoint ? (
							<CardWrapper>
								<div style={{ display: 'flex' }}>
									{/* <GiftCardType
										name={'Name:'}
										category={'Category:'}
										region={'Region:'}
										price={'Price:'}
									/> */}
									<GiftCardField
										name={card.name}
										category={card.categoryID}
										region={card.region}
										price={card.price}
										description={card.description}
										id={card.id}
										width={width}
									/>
								</div>
								<GiftCardBtnWrapper>
									<LinkBase to={`${card.id}`}>
										<BtnModifyCard nameOfIcon="change" />
									</LinkBase>
								</GiftCardBtnWrapper>
								<GiftCardBtnWrapper>
									<BtnModifyCard
										nameOfIcon="delete"
										onClick={() => handleShowWarning(setModalShow, card.id, adminChooseIdDispatch)}
									/>
								</GiftCardBtnWrapper>
							</CardWrapper>
						) : (
							<GiftCardField
								name={card.name}
								category={card.categoryID}
								region={card.region}
								price={card.price}
								description={card.description}
								id={card.id}
								key={`${card.name}-${card.id}-${card.categoryID}`}
								width={width}
							/>
						)}
					</React.Fragment>
				))}
			<Modal route={document.body}>
				<ModalWrapper>
					<StyledFomikModalWrapper>
						<div>
							<p>Are you sure?</p>
						</div>
						<StyledWarningButtonsWrapper>
							<ModalSubmitButton
								type="submit"
								onClick={() =>
									handleDeleteData(
										giftCardDispatch,
										setModalShow,
										adminChooseIdState?.selectedID,
										giftCardState?.modifiedData
									)
								}
							>
								confirm
							</ModalSubmitButton>
							<ModalSubmitButton onClick={handleCancel}>cancel</ModalSubmitButton>
						</StyledWarningButtonsWrapper>
					</StyledFomikModalWrapper>
				</ModalWrapper>
			</Modal>
		</WrapperGiftsAdmin>
	)
}
