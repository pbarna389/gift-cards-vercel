import type { Dispatch, FC, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useReducer, useState } from 'react'

import { API } from '@constants/index'
import { useFetch } from '@hooks/useFetch'
import type { FavouriteAction, FavouriteInitialStateInter } from '@reducers/index'
import { FavouriteInitialState, FavouriteReducer } from '@reducers/index'

import type { IGiftCards, ILogin } from '.'
import { GiftCardContext, LoginContext } from '.'

import type { FavouritedItem, FavouriteGiftData, GiftCardInter } from '$types/giftcards'

interface FavouriteContextProps {
	children: React.ReactNode
}

export interface IFavourite {
	favouriteDispatch: Dispatch<FavouriteAction> | null
	favouriteState: FavouriteInitialStateInter | null
	setUpdateData: Dispatch<SetStateAction<boolean>> | null
}

const favouriteBaseValue = {
	favouriteState: null,
	favouriteDispatch: null,
	setUpdateData: null,
}

export const FavouriteContext = createContext<IFavourite>(favouriteBaseValue)

export const FavouriteContextProvider: FC<FavouriteContextProps> = ({ children }) => {
	const [favouriteState, favouriteDispatch] = useReducer(FavouriteReducer, FavouriteInitialState)
	const [updateData, setUpdateData] = useState<boolean>(false)
	const { loginState } = useContext<ILogin>(LoginContext)
	const { giftCardState } = useContext<IGiftCards>(GiftCardContext)

	const favouriteList = useFetch<FavouritedItem[]>(`${API}favourites`, updateData, setUpdateData)
	useEffect(() => {
		if (loginState?.user && giftCardState?.data) {
			setUpdateData(true)
		}
	}, [loginState, giftCardState?.data])

	useEffect(() => {
		if (favouriteList && giftCardState && loginState?.user?.id) {
			const actualUserFavs: FavouritedItem | undefined = favouriteList.find(
				(favourites: FavouritedItem) => favourites.id === loginState?.user?.id
			)

			if (actualUserFavs) {
				const { data } = giftCardState
				const { giftData } = actualUserFavs

				if (data) {
					const favouritedGiftCards: GiftCardInter[] = giftData.map(
						(giftData: FavouriteGiftData) => {
							return data.filter(
								(giftCard: GiftCardInter) =>
									giftData.giftId === Number(giftCard.id) && giftData.giftName === giftCard.name
							)[0]
						}
					)

					if (favouritedGiftCards) {
						favouriteDispatch({
							type: 'UPDATE_FAVOURITE_LIST',
							payload: { data: favouritedGiftCards, favouriteList: actualUserFavs },
						})
					}
				}
			}
		}
	}, [favouriteList, giftCardState, updateData, loginState])

	return (
		<FavouriteContext.Provider
			value={{
				favouriteState,
				setUpdateData,
				favouriteDispatch,
			}}
		>
			{children}
		</FavouriteContext.Provider>
	)
}
