/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable array-callback-return */
import type { FC } from 'react'
import { useContext, useEffect, useState } from 'react'

import type { IFavourite, ILogin } from '@context/index'
import { FavouriteContext, LoginContext } from '@context/index'
import { useModifiedData } from '@hooks/useModifiedData'
import { useToasterCard } from '@hooks/useToasterCard'

import { Icons } from '..'
import { FavButtonWrapper } from './FavouriteButton.style'

import type { FavouritedItem, FavouriteGiftData } from '$types/giftcards'

interface FavouriteButtonProps {
	giftId: number | undefined
	giftName: string | undefined
}

export const FavouriteButton: FC<FavouriteButtonProps> = ({ giftId, giftName }): JSX.Element => {
	const [isFavourited, setIsFavourited] = useState<boolean>(false)
	const updateFavourites = useModifiedData<FavouritedItem>('PUT')

	const { favouriteState, setUpdateData } = useContext<IFavourite>(FavouriteContext)

	const { loginState } = useContext<ILogin>(LoginContext)

	const handleFavouriteMessage = useToasterCard()

	useEffect(() => {
		if (favouriteState?.favouriteList) {
			const { giftData } = favouriteState.favouriteList

			const shouldBeFavourite = giftData.some((gift: FavouriteGiftData) => gift.giftId === giftId)

			setIsFavourited(shouldBeFavourite)
		}
	}, [favouriteState, giftId])

	const onClick = async (): Promise<void> => {
		if (!loginState?.user || !favouriteState?.favouriteList || !setUpdateData || !giftName) {
			return
		}

		let updatedFavourites: FavouritedItem | null = null
		const { giftData } = favouriteState.favouriteList

		if (isFavourited) {
			const updatedGiftList: FavouriteGiftData[] = giftData.filter(
				(gift: FavouriteGiftData) => gift.giftId !== giftId
			)

			updatedFavourites = {
				id: favouriteState?.favouriteList.id,
				giftData: [...updatedGiftList],
			}

			handleFavouriteMessage(`Item ${giftName} removed from your favourites!`, 'remove-item')
		} else {
			if (giftId && giftName) {
				const isDuplicate: boolean = giftData.some(
					(gift: FavouriteGiftData) => gift.giftId === giftId
				)

				if (!isDuplicate) {
					const newGift: FavouriteGiftData = {
						giftId: Number(giftId),
						giftName,
					}

					updatedFavourites = {
						id: favouriteState?.favouriteList.id,
						giftData: [...favouriteState.favouriteList.giftData, newGift],
					}

					handleFavouriteMessage(`Item ${giftName} added to your favourites!`, 'add-item')
				}
			}
		}
		if (updatedFavourites) {
			await updateFavourites(updatedFavourites, 'favourites', loginState.user.id)
			setUpdateData(true)
		}
	}

	return (
		<FavButtonWrapper onClick={onClick}>
			{isFavourited ? <Icons category="favourite" /> : <Icons category="non_favourite" />}
		</FavButtonWrapper>
	)
}
