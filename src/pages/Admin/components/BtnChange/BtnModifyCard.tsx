import { type FC } from 'react'

import { Icons } from '@components/index'

import { BtnChangeStyled } from './BtnModifyCard.style'

const styledBtnsAdmin = {
	paddingRight: '0.5rem',
}
export const BtnModifyCard: FC<{
	nameOfIcon: string
	onClick?: () => void
}> = ({ nameOfIcon, onClick }) => {
	return (
		<BtnChangeStyled onClick={onClick}>
			<Icons category={nameOfIcon} sharedStyle={styledBtnsAdmin} />
		</BtnChangeStyled>
	)
}
