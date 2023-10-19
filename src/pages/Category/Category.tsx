import type { FC } from 'react'
import { useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { AiOutlineQuestion } from 'react-icons/ai'

import CategoryBg from '@assets/bg_category.png'
import { GiftCardWrapper, Hero, SearchBar } from '@components/index'
import { API } from '@constants/index'
import { MainPageContentWrapper } from '@constants/styles'
import type { IGiftCategory } from '@context/index'
import { GiftCardCategoryContext } from '@context/index'

import type { GiftCardInter } from '../../@types/giftcards'

import '../../App.css'

export const Category: FC = () => {
	const { giftCardCategoryState, giftCardCategoryDispatch } =
		useContext<IGiftCategory>(GiftCardCategoryContext)

	const { category } = useParams()

	useEffect(() => {
		if (giftCardCategoryDispatch && giftCardCategoryState) {
			const fetchData = () => {
				giftCardCategoryDispatch({
					type: 'LOADING',
					payload: { categoryName: giftCardCategoryState?.selectedID, loading: true },
				})

				const decideID =
					giftCardCategoryState.selectedID === category
						? giftCardCategoryState.selectedID
						: category

				const finalUrl = `${API}${decideID ? decideID : ''}`

				fetch(finalUrl)
					.then((result) => result.json())
					.then((data: GiftCardInter[]) => {
						giftCardCategoryDispatch({
							type: 'ADD_CAT_DATA',
							payload: { data, categoryName: decideID ? decideID : '', loading: false },
						})
					})
					.catch((err: string) => {
						giftCardCategoryDispatch({
							type: 'ERROR',
							payload: { categoryName: '', loading: false, error: 'Error something happened' },
						})
						return err
					})
			}

			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<MainPageContentWrapper className="category">
			<Hero
				bg={CategoryBg}
				text="Category"
				heroCardBg={<AiOutlineQuestion style={{ width: '5rem', height: '5rem' }} />}
			/>
			<SearchBar dispatch={null} />
			{giftCardCategoryState && <GiftCardWrapper data={giftCardCategoryState.data} />}
		</MainPageContentWrapper>
	)
}
