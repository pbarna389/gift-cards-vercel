/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const useDebounceValue = (value: string, delay: number, letterCount: number) => {
	const [newValueTimeout, setNewValueTimeout] = useState<NodeJS.Timeout>()
	const [delayedValue, setDelayedValue] = useState<string>()

	useEffect(() => {
		if (!value.length || value.length >= letterCount) {
			const id = setTimeout(() => {
				setDelayedValue(value)
			}, delay)
			setNewValueTimeout(id)

			return () => clearTimeout(newValueTimeout)
		}
	}, [value, delay, letterCount])

	return delayedValue
}
