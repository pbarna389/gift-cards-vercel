import type { AdminChooseIdAction } from '@reducers/index'

export const handleAddGiftCard = (
	dispatch: React.Dispatch<AdminChooseIdAction> | null | undefined
) => {
	if (dispatch) {
		dispatch({
			type: 'ADD_DATA',
			payload: {
				isAddingData: true,
				showModal: true,
			},
		})
	}
}
