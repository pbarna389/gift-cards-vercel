import type { FC } from 'react'

import { Wrapper } from '@constants/styles'
import { styled } from 'styled-components'

import './HeroCard.css'

interface HeroCardProps {
	source: string | JSX.Element
	degX?: number
	degY?: number
	mouseOnHero?: boolean
	text?: string
}

const ImgWrapperComp = styled(Wrapper)<{ $border: boolean }>`
	position: relative;
	max-width: 525px;
	overflow: hidden;
	border-radius: 25px;
	border: ${(props) => (props.$border ? '2px solid rgba(255,255,255,0.2)' : 'none')};
`

const CardText = styled.p`
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: rgb(43 43 43 / 70%);
	color: white;
	margin: 0;
	width: 100%;
	text-align: center;
`

export const HeroCard: FC<HeroCardProps> = ({
	degX = 0,
	degY = 0,
	source,
	mouseOnHero,
	text,
}): JSX.Element => {
	return (
		<ImgWrapperComp
			$border={text ? true : false}
			className={!mouseOnHero ? 'transition' : ''}
			style={{ transform: `rotateY(${degX}deg) rotateX(${degY}deg)` }}
		>
			{typeof source === 'string' ? (
				<img
					src={source}
					style={{
						width: '100%',
						borderRadius: 'inherit',
						borderBottomLeftRadius: '0px',
						borderBottomRightRadius: '0px',
					}}
				/>
			) : (
				source
			)}
			{!!text && <CardText>{text}</CardText>}
		</ImgWrapperComp>
	)
}
