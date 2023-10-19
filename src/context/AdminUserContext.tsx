import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type { UserAction, UserInStateInter } from '../reducers'
import { AdminUserReducer, UserInitialState } from '../reducers'

interface UserContextProps {
	children: React.ReactNode
}

export interface IUser {
	userDispatch: React.Dispatch<UserAction> | null
	userState: UserInStateInter | null
}

const baseUserValues = {
	userState: null,
	userDispatch: null,
}

export const AdminUserContext = createContext<IUser>(baseUserValues)

export const AdminUserContextProvider: FC<UserContextProps> = ({ children }) => {
	const [userState, userDispatch] = useReducer(AdminUserReducer, UserInitialState)

	return (
		<AdminUserContext.Provider
			value={{
				userState,
				userDispatch,
			}}
		>
			{children}
		</AdminUserContext.Provider>
	)
}
