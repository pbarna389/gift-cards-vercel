import type { FC } from 'react'

import PurchasedItemWrapper from '../PurchasedItemWrapper/PurchasedItemWrapper'
import { StyledTable } from './Table.style'

import type { PrevPurchase } from '$../../@types/giftcards'

interface TableProps {
	boughtItems: PrevPurchase[] | null
}

export const Table: FC<TableProps> = ({ boughtItems }): JSX.Element => {
	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Date</th>
					<th>Item number</th>
					<th>Sum</th>
				</tr>
			</thead>
			<tbody>
				{!!boughtItems &&
					boughtItems.map((item: PrevPurchase, idx: number) => (
						<PurchasedItemWrapper key={`purchased-item-${idx}`} item={item} />
					))}
			</tbody>
		</StyledTable>
	)
}
