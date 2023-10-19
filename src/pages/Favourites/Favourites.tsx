import type { FC } from 'react'
import { useContext, useEffect } from 'react'

import AnimatedBg from '@assets/animated_bg.png'
import { Carousel, GiftCardWrapper, Hero, Icons, SearchBar, SortByRegion } from '@components/index'
import { MainPageContentWrapperWithIcons } from '@constants/styles'
import type { IFavourite } from '@context/index'
import { FavouriteContext } from '@context/index'

import '../../App.css'

export const Favourites: FC = () => {
	const { favouriteState, favouriteDispatch } = useContext<IFavourite>(FavouriteContext)

	useEffect(() => {
		if (!localStorage.getItem('checkout')) {
			localStorage.setItem('checkout', JSON.stringify([]))
		}
	}, [])

	return (
		<MainPageContentWrapperWithIcons className="home">
			<Hero
				heroCardBg={<Icons category="favourite" />}
				bg={AnimatedBg}
				text="Your favourited items"
				animate
			/>
			<Carousel dispatch={favouriteDispatch} state={favouriteState} />
			<SearchBar dispatch={favouriteDispatch} />
			<SortByRegion dispatch={favouriteDispatch} state={favouriteState} />
			{favouriteState && (
				<GiftCardWrapper
					data={
						favouriteState.shownData && !favouriteState.filteredData
							? favouriteState.shownData
							: favouriteState.filteredData
					}
				/>
			)}
		</MainPageContentWrapperWithIcons>
	)
}
