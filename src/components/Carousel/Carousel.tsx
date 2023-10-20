import type { Dispatch, FC } from 'react'
import { useState } from 'react'

import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

import { API, convertSentence } from '@constants/index'
import type {
	FavouriteAction,
	FavouriteInitialStateInter,
} from '@reducers/FavouriteReducer'
import type { GiftCardAction, GiftCardInStateInter } from '@reducers/index'

import { Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';

import { Icons } from '..'
import {
	StyledSwiperSlide,
	SwiperArrow,
	SwiperWrapper,
} from './Carousel.styles'

import { useFetch } from '@hooks/index'

interface CarouselProps {
	dispatch: Dispatch<GiftCardAction> | Dispatch<FavouriteAction> | null
	state: GiftCardInStateInter | FavouriteInitialStateInter | null
}

export const Carousel: FC<CarouselProps> = ({ state, dispatch }) => {
	const [update, setUpdate] = useState<boolean>(true)
	const categoryData: string[] | undefined = useFetch(
		`${API}categories`,
		update,
		setUpdate
	)

	const CarouselSharedStyle = {
		border: '1px solid white',
		borderRadius: '50%',
		height: '1.3rem',
		padding: '0.4rem',
		width: '1.3rem',
	}

	const handleClick = (cat: string) => {
		if (dispatch) {
			if (cat === 'all') {
				dispatch({
					type: 'RESET',
					payload: { categoryName: cat },
				})
			} else {
				dispatch({
					type: 'FILTER_DATA_CATEGORY',
					payload: { categoryName: cat },
				})
			}
		}
	}

	return (
		<SwiperWrapper className="just-main-wrapper-for-element">
			<Swiper
				navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
				className="THE-REAL-WRAPPER">
				{categoryData &&
					categoryData.map((cat: string, idx: number) => (
						<StyledSwiperSlide
							className={state?.category === cat ? 'selected' : ''}
							key={`${cat}-${idx}`}
							virtualIndex={idx}
							onClick={() => handleClick(cat)}>
							<Icons
								carousel={true}
								category={cat}
								sharedStyle={CarouselSharedStyle}
							/>
							{convertSentence(cat)}
						</StyledSwiperSlide>
					))}
				<SwiperArrow className="swiper-prev">
					<FiArrowLeftCircle style={{ width: '2rem', height: '2rem' }} />
				</SwiperArrow>
				<SwiperArrow className="swiper-next">
					<FiArrowRightCircle style={{ width: '2rem', height: '2rem' }} />
				</SwiperArrow>
			</Swiper>
		</SwiperWrapper>
	)
}
