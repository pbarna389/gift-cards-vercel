import type { Dispatch, SetStateAction } from 'react'

import { API } from '@constants/index'
import type { GiftCardAction } from '@reducers/index'

export const handleDeleteData = (
	dispatch: React.Dispatch<GiftCardAction> | null,
	setModalShow: Dispatch<SetStateAction<boolean>> | null,
	chosenID?: number | string,
	reload = false
) => {
	if (chosenID) {
		const deleteDataById = async () => {
			try {
				await fetch(`${API}all/${chosenID}`, {
					method: 'DELETE',
				})
			} catch (error) {
				throw new Error('!Something bad happened in custom hook useDeleteData!')
			}
		}
		void deleteDataById()
	}
	if (dispatch) {
		dispatch({
			type: 'RELOAD_MODIFIED_DATA',
			payload: {
				modifiedData: !reload,
			},
		})
	}
	if (setModalShow) {
		setModalShow(false)
	}
}
