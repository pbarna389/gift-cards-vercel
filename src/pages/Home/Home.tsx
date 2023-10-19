import type { FC } from 'react'
import { useContext, useEffect } from 'react'

import AnimatedBg from '@assets/animated_bg.png'
import TeamLogo from '@assets/team_name.png'
import { Carousel, GiftCardWrapper, Hero, SearchBar, SortByRegion } from '@components/index'
import { MainPageContentWrapper } from '@constants/styles'
import type { IGiftCards } from '@context/index'
import { GiftCardContext } from '@context/index'

import '../../App.css'

export const Home: FC = () => {
	const { giftCardState, giftCardDispatch } = useContext<IGiftCards>(GiftCardContext)

	useEffect(() => {
		if (!localStorage.getItem('checkout')) {
			localStorage.setItem('checkout', JSON.stringify([]))
		}
	}, [])

	return (
		<MainPageContentWrapper className="home">
			<Hero
				bg={AnimatedBg}
				text="We believe that giving a gift card should be almost as good as receiving it."
				heroCardBg={TeamLogo}
				animate
			/>
			<Carousel dispatch={giftCardDispatch} state={giftCardState} />
			<SearchBar dispatch={giftCardDispatch} />
			<SortByRegion dispatch={giftCardDispatch} state={giftCardState} />
			{giftCardState && (
				<GiftCardWrapper
					data={
						giftCardState.shownData && !giftCardState.filteredData
							? giftCardState.shownData
							: giftCardState.filteredData
					}
				/>
			)}
		</MainPageContentWrapper>
	)
}
