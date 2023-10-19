import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useDebounceValue } from '@hooks/useDebounceValue'
import type { FavouriteAction, GiftCardAction, GiftCoinAction, UserAction } from '@reducers/index'

import { SearchInput } from './SearchBar.style'

interface SearchBarProps {
	dispatch:
		| React.Dispatch<GiftCardAction>
		| React.Dispatch<UserAction>
		| React.Dispatch<GiftCoinAction>
		| React.Dispatch<FavouriteAction>
		| null
	widthOfSearch?: string
}

export const SearchBar: FC<SearchBarProps> = ({ dispatch, widthOfSearch }): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('')
	const delayTime = 300
	const letterCount = 3

	const delayedInput = useDebounceValue(inputValue, delayTime, letterCount)

	useEffect(() => {
		if (dispatch) {
			if (!delayedInput?.length) {
				dispatch({ type: 'CLEAN_SEARCH', payload: null })
			} else {
				dispatch({ type: 'FILTER_DATA_SEARCH', payload: { filterWord: delayedInput } })
			}
		}
	}, [delayedInput, dispatch])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.currentTarget.value

		setInputValue(target)
	}
	return (
		<SearchInput
			placeholder="Search..."
			value={inputValue}
			style={{ width: widthOfSearch }}
			onChange={handleChange}
		/>
	)
}
