/* eslint-disable no-magic-numbers */
import { type FC, useContext, useEffect } from 'react'

import AnimatedBg from '@assets/animated_bg.png'
import TeamLogo from '@assets/team_name.png'
import { Carousel, Hero, SearchBar } from '@components/index'
import { API } from '@constants/index'
import { LinkBase, MainPageContentWrapper } from '@constants/styles'
import type { IAdminChooseId, IAdminGift, IGiftCards } from '@context/index'
import { AdminChooseIdContext, AdminContext, GiftCardContext } from '@context/index'
import { useFetch, useFetchByName } from '@hooks/index'

import { BtnModifyCard } from './components/BtnChange/BtnModifyCard'
import { ListWrapper } from './components/ListWrapper'
import type { GiftCardInter } from '../../@types/giftcards'
import { BtnsWrapper, WrapperGiftsAdmin } from './Admin.style'

export const Admin: FC = () => {
	const { giftCardState, giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)

	const { adminDispatch } = useContext<IAdminGift>(AdminContext)

	const { adminChooseIdState } = useContext<IAdminChooseId>(AdminChooseIdContext)
	const GiftData = useFetch<GiftCardInter[]>(
		`${API}all?_sort${giftCardState?.sortBy ? giftCardState?.sortBy : ''}`,
		true
	)

	const giftDataByName = useFetchByName<GiftCardInter>(
		API,
		'all?id=',
		adminChooseIdState?.selectedID
	)

	useEffect(() => {
		if (adminDispatch) {
			adminDispatch({
				type: 'ADD_ID_DATA',
				payload: {
					data: giftDataByName,
				},
			})
		}
	}, [adminDispatch, giftDataByName])

	useEffect(() => {
		if (giftCardDispatch) {
			giftCardDispatch({
				type: 'LOAD_DATA',
				payload: {
					data: GiftData,
				},
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [GiftData])

	const newID = giftCardState?.data && Number(giftCardState.data.at(-1)?.id)

	return (
		<MainPageContentWrapper>
			<Hero bg={AnimatedBg} text="Admin page" heroCardBg={TeamLogo} animate />
			<Carousel dispatch={giftCardDispatch} state={giftCardState} />
			<SearchBar dispatch={giftCardDispatch} />
			<WrapperGiftsAdmin>
				<BtnsWrapper>
					<LinkBase to={`${newID ? Number(newID) + 1 : 0}`}>
						<BtnModifyCard nameOfIcon="add_gift" />
					</LinkBase>
					<LinkBase to={'users'}>
						<BtnModifyCard nameOfIcon={'users'} />
					</LinkBase>
					<LinkBase to={'suggestions-list'}>
						<BtnModifyCard nameOfIcon="suggestions" />
					</LinkBase>
					<LinkBase to={'status-list'}>
						<BtnModifyCard nameOfIcon="status_of_delivery" />
					</LinkBase>
				</BtnsWrapper>
				<ListWrapper
					data={
						giftCardState?.shownData && !giftCardState.filteredData
							? giftCardState.shownData
							: giftCardState?.filteredData
					}
				/>
			</WrapperGiftsAdmin>
		</MainPageContentWrapper>
	)
}
