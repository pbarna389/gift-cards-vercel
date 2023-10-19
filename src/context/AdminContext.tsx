import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type { AdminAction, AdminInStateInter } from '@reducers/index'
import { AdminInitialState, AdminReducer } from '@reducers/index'

interface AdminContextProps {
	children: React.ReactNode
}

export interface IAdminGift {
	adminDispatch: React.Dispatch<AdminAction> | null
	adminState: AdminInStateInter | null
}

const AdminBaseValues = {
	adminDispatch: null,
	adminState: null,
}

export const AdminContext = createContext<IAdminGift>(AdminBaseValues)

export const AdminContextProvider: FC<AdminContextProps> = ({ children }) => {
	const [adminState, adminDispatch] = useReducer(AdminReducer, AdminInitialState)

	return (
		<AdminContext.Provider
			value={{
				adminState,
				adminDispatch,
			}}
		>
			{children}
		</AdminContext.Provider>
	)
}
