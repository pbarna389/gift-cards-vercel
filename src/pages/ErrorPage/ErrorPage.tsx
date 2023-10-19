import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { MainPageContentWrapper } from '@constants/styles'

import '../../App.css'

export const ErrorPage: FC = () => {
	const [redirectTimeout, setRedirectTimeout] = useState<NodeJS.Timeout>()

	const navigate = useNavigate()

	useEffect(() => {
		if (!redirectTimeout) {
			const timeoutTime = 3000

			const id = setTimeout(() => {
				navigate('/')
			}, timeoutTime)

			setRedirectTimeout(id)

			return () => clearTimeout(redirectTimeout)
		}
	}, [navigate, redirectTimeout])

	return (
		<MainPageContentWrapper>
			<h1>Ooops... Something went wrong, you will be redirected to the main page</h1>
		</MainPageContentWrapper>
	)
}
