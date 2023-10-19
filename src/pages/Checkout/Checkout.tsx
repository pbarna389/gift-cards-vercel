import type { FC } from 'react'
import { useContext, useEffect, useLayoutEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, HeroCard, ItemDetails, RelatedItems, RemoveButton } from '@components/index'
import { CardPlaceHolder } from '@constants/index'
import { BtnLink, MainPageContentWrapper } from '@constants/styles'
import type { ICheckout, ILogin } from '@context/index'
import { CheckoutContext, LoginContext } from '@context/index'

import { OrderButton } from './OrderButton/OrderButton'
import type { CheckoutDataInter } from '../../@types/giftcards'
import { ButtonContainer, CheckoutCard, CheckoutTitle, ColumnWrapper } from './Checkout.style'

import '../../App.css'

export const Checkout: FC = () => {
	const { loginState } = useContext<ILogin>(LoginContext)

	const { checkoutState } = useContext<ICheckout>(CheckoutContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!localStorage.getItem('checkout')) {
			localStorage.setItem('checkout', JSON.stringify([]))
		}
	}, [])

	useLayoutEffect(() => {
		if (!loginState?.user) {
			navigate('/')
		}
	}, [loginState, navigate, checkoutState])

	if (loginState?.user && !checkoutState?.data.length) {
		return (
			<MainPageContentWrapper>
				<CheckoutTitle>Checkout</CheckoutTitle>
				<h2>
					It looks like you haven`&apos;`t choosen anything yet - feel free to choose something from
					these items!
				</h2>
				<RelatedItems />
			</MainPageContentWrapper>
		)
	}

	return (
		<MainPageContentWrapper>
			<CheckoutTitle>Checkout</CheckoutTitle>
			<ColumnWrapper>
				{checkoutState?.data.length &&
					checkoutState.data.map((gift: CheckoutDataInter) => (
						<CheckoutCard key={`fragment-${gift.name}-${gift.amount}`}>
							<HeroCard
								key={`titlePic-${gift.name}-${gift.amount}`}
								source={CardPlaceHolder}
								giftName={gift.name}
								giftId={Number(gift.id)}
							/>
							<div
								className="checkout-card-details-wrapper"
								key={`ItemWrapper-${gift.name}-${gift.amount}`}
							>
								<ItemDetails
									key={`${gift.name}-${gift.amount}`}
									data={gift}
									user={loginState?.user && loginState.user}
								/>
								<RemoveButton gift={gift} />
							</div>
						</CheckoutCard>
					))}
			</ColumnWrapper>
			<ButtonContainer>
				<OrderButton />
				<BtnLink to={'/'}>
					<Button label="Choose another" iconType={'cancel'} />
				</BtnLink>
			</ButtonContainer>
		</MainPageContentWrapper>
	)
}
