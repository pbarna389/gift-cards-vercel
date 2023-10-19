import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type {
	AdminChooseIdAction,
	AdminChooseIdInStateInter,
} from '../reducers/AdminChooseIdReducer'
import { AdminChooseIdInitialState, AdminChooseIdReducer } from '../reducers/AdminChooseIdReducer'

interface AdminChooseIdContextProps {
	children: React.ReactNode
}

export interface IAdminChooseId {
	adminChooseIdDispatch: React.Dispatch<AdminChooseIdAction> | null
	adminChooseIdState: AdminChooseIdInStateInter | null
}
const AdminChooseBaseValue = {
	adminChooseIdDispatch: null,
	adminChooseIdState: null,
}

export const AdminChooseIdContext = createContext<IAdminChooseId>(AdminChooseBaseValue)

export const AdminChooseIdContextProvider: FC<AdminChooseIdContextProps> = ({ children }) => {
	const [adminChooseIdState, adminChooseIdDispatch] = useReducer(
		AdminChooseIdReducer,
		AdminChooseIdInitialState
	)

	return (
		<AdminChooseIdContext.Provider
			value={{
				adminChooseIdState,
				adminChooseIdDispatch,
			}}
		>
			{children}
		</AdminChooseIdContext.Provider>
	)
}
