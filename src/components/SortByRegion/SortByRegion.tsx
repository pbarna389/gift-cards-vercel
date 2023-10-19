import type { Dispatch, FC } from 'react'

import { filterData } from '@constants/filterData'
import type { FavouriteAction, FavouriteInitialStateInter } from '@reducers/FavouriteReducer'
import type { GiftCardAction, GiftCardInStateInter } from '@reducers/GiftCardsReducer'

import { StyledSortByRegion, StyledSortBySelect, StyledSortByWrapper } from './SortByRegion.style'

import type { GiftCardInter } from '$types/giftcards'

interface SortByRegionProps {
	dispatch: Dispatch<GiftCardAction> | Dispatch<FavouriteAction> | null
	state: GiftCardInStateInter | FavouriteInitialStateInter | null
}

export const SortByRegion: FC<SortByRegionProps> = ({ dispatch, state }) => {
	const handleSortByRegion = (region: string) => {
		if (dispatch) {
			if (region !== 'all') {
				dispatch({
					type: 'SORT_BY',
					payload: {
						sortBy: region,
						sortedDataByRegion: filterData<GiftCardInter>(
							state?.data,
							state?.category,
							'categoryID'
						),
					},
				})
			} else {
				dispatch({
					type: 'RESET_REGION',
					payload: { sortBy: region },
				})
			}
		}
	}
	return (
		<StyledSortByWrapper>
			<StyledSortByRegion>
				Choose the region:
				<StyledSortBySelect
					name=""
					id=""
					value={state?.sortBy}
					onChange={(e) => handleSortByRegion(e.target.value)}
				>
					<option value="all">🌍 all</option>
					<option value="eu">🇪🇺 Europe</option>
					<option value="uk">🇺🇦 Ukraine</option>
				</StyledSortBySelect>
			</StyledSortByRegion>
		</StyledSortByWrapper>
	)
}
