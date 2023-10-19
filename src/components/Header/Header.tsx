import type { FC } from 'react'
import { useContext, useEffect, useState } from 'react'

import { CartButton, LoginButton } from '@components/index'
import { Container } from '@constants/styles'
import type { ICheckout, ILogin } from '@context/index'
import { CheckoutContext, LoginContext } from '@context/index'

import { HomeLink, LoginWrapper, StyledHeader } from './Header.style'

export const Header: FC = () => {
	const [scrollPos, setScrollPos] = useState<number | undefined>()

	const { loginState } = useContext<ILogin>(LoginContext)
	const { checkoutState } = useContext<ICheckout>(CheckoutContext)

	useEffect(() => {
		window.addEventListener('scroll', () => setScrollPos(window.scrollY))

		return () => {
			window.removeEventListener('scroll', () => setScrollPos(window.scrollY))
		}
	}, [])

	const handleHiding = (position?: number) => {
		const breakpoint = 100

		if (position) {
			return position > breakpoint ? 'hidden' : ''
		}
	}

	return (
		<>
			<Container className="header" style={{ position: 'fixed', zIndex: '12', width: '100%' }}>
				<StyledHeader className={handleHiding(scrollPos)}>
					<HomeLink to={'/'}>Gift Cards</HomeLink>
					<LoginWrapper className={`${checkoutState?.cartVisibility ? 'active' : ''}`}>
						<LoginButton />
					</LoginWrapper>
				</StyledHeader>
				{loginState?.user && <CartButton />}
			</Container>
		</>
	)
}
