import { useEffect, useState } from 'react'

export const useFetchByName = <T>(
	url: string,
	type: string | undefined,
	selectedId: number | string | undefined,
	reload = false
) => {
	const [selectedData, setSelectedData] = useState<T[]>()

	useEffect(() => {
		if (selectedId && type) {
			const fetchDataByName = async () =>
				fetch(`${url}${type}${selectedId}`)
					.then((res) => res.json())
					.then((data: T[]) => setSelectedData(data))
					.catch((err: string) => {
						return err
					})
			void fetchDataByName()
		}
	}, [url, type, selectedId, reload])

	return selectedData
}
