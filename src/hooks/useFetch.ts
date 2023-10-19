import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useReducer, useState } from 'react'

import { StatusInitialState, StatusReducer } from '@reducers/index'

export const useFetch = <T>(
	url: string,
	load?: boolean,
	setLoading?: Dispatch<SetStateAction<boolean>>
) => {
	const [data, setData] = useState<T>()

	const [, statusDispatch] = useReducer(StatusReducer, StatusInitialState)

	useEffect(() => {
		if (statusDispatch) {
			statusDispatch({ type: 'LOADING', payload: { loading: true } })

			if (setLoading) {
				setLoading(false)
			}

			const fetchData = async () =>
				fetch(url)
					.then((result) => result.json())
					.then((data: T) => setData(data))
					.then(() => statusDispatch({ type: 'LOADING', payload: { loading: false } }))
					.catch(() => {
						statusDispatch({ type: 'SET_ERROR' })
					})

			void fetchData()
		}
	}, [url, statusDispatch, load, setLoading])

	return data
}
