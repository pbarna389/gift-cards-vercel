import { type FC, useContext } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import type { ILogin } from '@context/LoginContext'
import { LoginContext } from '@context/LoginContext'

export const PrivateRoutes: FC = () => {
	const { loginState } = useContext<ILogin>(LoginContext)

	if (!localStorage.getItem('user') || (loginState?.user && loginState?.user.role !== 'ADMIN')) {
		return <Navigate to={'/'} />
	}

	return <Outlet />
}
