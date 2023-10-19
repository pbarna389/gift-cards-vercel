import type { AdminChooseIdAction } from '@reducers/index'

export const handleChangeID = (
	chosenID: number | undefined,
	dispatch: React.Dispatch<AdminChooseIdAction> | null | undefined
) => {
	if (dispatch) {
		dispatch({
			type: 'CHANGE_SELECTED_ID',
			payload: {
				selectedID: chosenID?.toString(),
				showModal: true,
			},
		})
	}
}
