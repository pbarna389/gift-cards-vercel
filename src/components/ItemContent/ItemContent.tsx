import type { FC } from 'react'
import { useContext } from 'react'

import { AddButton, ItemDetails } from '@components/index'
import { H2Elements } from '@constants/styles'
import type { IItems } from '@context/index'
import { ItemContext } from '@context/index'

import { AttentionMessage, DetailWrapper, ItemContentWrapper } from './ItemContent.style'

import type { CheckoutDataInter } from '$types/giftcards'

export const ItemContent: FC = (): JSX.Element => {
	const { itemState } = useContext<IItems>(ItemContext)

	return (
		<ItemContentWrapper>
			<div className="detailWrapper">
				{itemState?.data && (
					<>
						<ItemDetails data={itemState?.data} />
						<AddButton card={itemState?.data as CheckoutDataInter} label="Choose this gift" />
					</>
				)}
			</div>
			<DetailWrapper>
				{!!itemState?.data?.attentionMessage.length && (
					<AttentionMessage>
						<H2Elements>Attention!</H2Elements>
						<div>{itemState?.data.attentionMessage}</div>
					</AttentionMessage>
				)}
				<div>{itemState ? itemState.data?.description : ''}</div>
			</DetailWrapper>
		</ItemContentWrapper>
	)
}
