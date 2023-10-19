import { useCallback } from 'react'

import { API } from '../constants/constants'

type GetMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const useModifiedData = <T>(httpMethod: GetMethods) => {
	const updateData = useCallback(
		async (data: T, category = 'all', id = '') => {
			try {
				const response = await fetch(`${API}${category}/${id}`, {
					method: httpMethod,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const serverData: unknown = await response.json()

				return serverData
			} catch (error) {
				throw new Error('Some problems in custom hook useModifiedData')
			}
		},
		[httpMethod]
	)

	return updateData
}
