import type { FC } from 'react'
import { createContext, useReducer } from 'react'

import type { StatusAction, StatusInStateInter } from '@reducers/index'
import { StatusInitialState, StatusReducer } from '@reducers/index'

interface StatusContextProps {
	children: React.ReactNode
}

export interface IStatus {
	statusDispatch: React.Dispatch<StatusAction> | null
	statusState: StatusInStateInter | null
}

const baseValues = {
	statusState: null,
	statusDispatch: null,
}

export const StatusContext = createContext<IStatus>(baseValues)

export const StatusContextProvider: FC<StatusContextProps> = ({ children }) => {
	const [statusState, statusDispatch] = useReducer(StatusReducer, StatusInitialState)

	return (
		<StatusContext.Provider
			value={{
				statusState,
				statusDispatch,
			}}
		>
			{children}
		</StatusContext.Provider>
	)
}
