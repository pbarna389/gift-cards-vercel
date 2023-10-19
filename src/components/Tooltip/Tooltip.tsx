import type { FC } from 'react'

import { TooltipDiv } from './Tooltip.style'

interface TooltipProps {
	label: string
	visible: boolean
}

export const Tooltip: FC<TooltipProps> = ({ visible, label }): JSX.Element => {
	return <TooltipDiv className={`login tooltip ${visible ? 'shown' : ''}`}>{label}</TooltipDiv>
}
