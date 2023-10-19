import type { FC } from 'react'
import { useContext } from 'react'

import ItemBgPlaceHolder from '@assets/bgItemPlaceholder.jpg'
import { Hero, ItemContent, PageWrapper } from '@components/index'
import { CardPlaceHolder } from '@constants/index'
import { MainPageContentWrapper } from '@constants/styles'
import type { IItems, ILogin } from '@context/index'
import { ItemContext, LoginContext } from '@context/index'

import '../../App.css'

export const Item: FC = () => {
	const { loginState } = useContext<ILogin>(LoginContext)
	const { itemState } = useContext<IItems>(ItemContext)

	return (
		<PageWrapper>
			<MainPageContentWrapper className="home">
				<Hero
					bg={ItemBgPlaceHolder}
					cardText={itemState ? itemState.data?.name : ''}
					item={true}
					text={itemState ? itemState.data?.name : ''}
					heroCardBg={CardPlaceHolder}
					user={loginState?.user}
					giftId={!isNaN(Number(itemState?.data?.id)) ? Number(itemState?.data?.id) : null}
					giftName={itemState?.data?.name && itemState.data.name}
				/>
				<ItemContent />
			</MainPageContentWrapper>
		</PageWrapper>
	)
}
