import type { FC } from 'react'
import { useContext, useState } from 'react'

import defaultBG from '@assets/bg_other2.png'
import { AddButton, HeroCard, ParticlesComponent } from '@components/index'
import { LogoText } from '@constants/styles'
import type { IItems, ILogin } from '@context/index'
import { ItemContext, LoginContext } from '@context/index'

import { HeroParticleOptions } from './Hero.particles'
import { HeroBackground } from './Hero.style'

import type { CheckoutDataInter, UserInter } from '$types/giftcards'

interface RotationInterface {
	degX: number
	degY: number
}

const defaultRotation = {
	degX: 0,
	degY: 0,
}

interface HeroProps {
	heroCardBg: string | JSX.Element
	animate?: boolean
	bg?: string
	cardText?: string
	giftId?: number | null
	giftName?: string
	item?: boolean
	text?: string
	user?: UserInter | null
}

//heroImage

export const Hero: FC<HeroProps> = ({
	bg,
	animate,
	heroCardBg,
	text,
	cardText,
	item,
	giftName,
	giftId,
}) => {
	const [rotation, setRotation] = useState<RotationInterface>(defaultRotation)
	const [mouseOnHero, setMouseOnHero] = useState<boolean>(false)
	const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>()
	const { loginState } = useContext<ILogin>(LoginContext)

	const { itemState } = useContext<IItems>(ItemContext)

	const degCalculator = (pos: number, middle: number, degree: number): number => {
		return ((pos - middle) / middle) * degree
	}

	const handleMouseMovement = (event: React.MouseEvent<HTMLDivElement>): void => {
		const divider = 2

		const posX: number = event.clientX
		const posY: number = event.clientY

		const middleX: number = window.innerWidth / divider
		const middleY: number = window.innerHeight / divider

		const maxDeg = 25

		const degX = degCalculator(posX, middleX, maxDeg)
		const degY = -degCalculator(posY, middleY, maxDeg)

		setRotation({ degX, degY })
	}

	const handleMouseLeave = (): void => {
		setRotation(defaultRotation)
		setMouseOnHero(false)
	}

	const handleMouseEnter = (): void => {
		clearTimeout(timeoutID)

		const timeoutTime = 100
		const timeout = setTimeout(() => {
			setMouseOnHero(true)
		}, timeoutTime)

		setTimeoutID(timeout)
	}

	return (
		<HeroBackground
			$animate={animate && true}
			$background={bg ? bg : defaultBG}
			$noRepeat={item ? true : false}
			style={{ flexDirection: `${item ? 'column-reverse' : 'column'}` }}
			className="hero-bg"
			onPointerEnter={handleMouseEnter}
			onPointerLeave={handleMouseLeave}
			onPointerMove={handleMouseMovement}
		>
			<ParticlesComponent options={HeroParticleOptions} />
			{!!item && itemState?.data && (
				<AddButton card={itemState?.data as CheckoutDataInter} label="Choose this gift!" />
			)}
			<HeroCard
				degX={rotation.degX}
				degY={rotation.degY}
				mouseOnHero={mouseOnHero}
				source={heroCardBg}
				text={cardText}
				giftName={giftName}
				giftId={giftId}
			/>
			<LogoText className={`${item ? 'item' : ''}`}>{text}</LogoText>
			{loginState && loginState.user?.role === 'ADMIN' && <LogoText> You are admin</LogoText>}
		</HeroBackground>
	)
}
