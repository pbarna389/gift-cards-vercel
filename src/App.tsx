import type { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { CartSidebar, Footer, Header, ToasterCardWrapper } from '@components/index'

import './App.css'

const App: FC = (): JSX.Element => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ToasterCardWrapper />
			<CartSidebar />
		</>
	)
}

export default App
