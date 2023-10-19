import { useEffect, useState } from 'react'

export const useLocalStorage = <StoredDataT>(localKey: string) => {
	const [localStorageItem, setLocalStorageItem] = useState<StoredDataT | null>(null)

	useEffect(() => {
		const localItem: string | null = localStorage.getItem(localKey)

		if (localItem) {
			const parsed = JSON.parse(localItem) as StoredDataT
			setLocalStorageItem(parsed)
		}
	}, [localKey])

	return {
		localStorageItem,
	}
}
