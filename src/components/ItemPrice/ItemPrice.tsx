import type { FC } from 'react'
import { useState } from 'react'

import { ItemSharedStyle } from '@components/ItemDetails/ItemDetails.styles'
import { handleMouseMovement } from '@constants/constants'

import { Icons, Tooltip } from '..'
import { CoinLink, ItemPriceWrapper, ItemTooltipWrapper } from './ItemPrice.style'

interface ItemPriceProps {
	price: number
}

export const ItemPrice: FC<ItemPriceProps> = ({ price }) => {
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<ItemPriceWrapper className="item-price-wrapper">
			<Icons category="coin" sharedStyle={ItemSharedStyle} />
			<h2>{price} coins</h2>
			<ItemTooltipWrapper className="item-tooltip-wrapper">
				<CoinLink
					to="/coins"
					onPointerEnter={() => handleMouseMovement(visible, setVisible)}
					onPointerLeave={() => handleMouseMovement(visible, setVisible)}
				>
					<Icons category="question" sharedStyle={ItemSharedStyle} />
				</CoinLink>
				<Tooltip label={'What it is?'} visible={visible} />
			</ItemTooltipWrapper>
		</ItemPriceWrapper>
	)
}
