import type { FC } from 'react'

import {
	AiFillStar,
	AiOutlineClose,
	AiOutlineDollar,
	AiOutlineExclamation,
	AiOutlineGift,
	AiOutlineQuestion,
	AiOutlineShoppingCart,
	AiOutlineStar,
	AiOutlineUnorderedList,
	AiOutlineUserAdd,
} from 'react-icons/ai'
import { BiError, BiSolidUserDetail } from 'react-icons/bi'
import { BsCarFront } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaRegSmileBeam } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { FiBookOpen } from 'react-icons/fi'
import { GoNote } from 'react-icons/go'
import {
	IoCreateOutline,
	IoDiamondOutline,
	IoFastFoodOutline,
	IoHomeOutline,
	IoRemoveCircleOutline,
	IoShirtOutline,
} from 'react-icons/io5'
import { LiaEye } from 'react-icons/lia'
import { LuGamepad2, LuSend } from 'react-icons/lu'
import { MdDeleteOutline, MdOutlineCreate } from 'react-icons/md'
import { PiHandCoins, PiTelevisionLight } from 'react-icons/pi'
import { TbBrandCashapp } from 'react-icons/tb'

import { convertSentence } from '@constants/index'

import { IconWrapper, SpanElement } from './Icons.style'

interface SharedInter {
	border?: string
	borderRadius?: string
	gap?: string
	height?: string
	padding?: string
	paddingRight?: string
	width?: string
}

const switchCat = (category: string | number, sharedStyle?: SharedInter) => {
	switch (category) {
		case 'all':
			return <AiOutlineStar style={sharedStyle} />
		case 'auto':
			return <BsCarFront style={sharedStyle} />
		case 'books':
			return <FiBookOpen style={sharedStyle} />
		case 'coin':
			return <AiOutlineDollar style={sharedStyle} />
		case 'clothes':
			return <IoShirtOutline style={sharedStyle} />
		case 'cosmetics':
			return <LiaEye style={sharedStyle} />
		case 'entertainment':
			return <FaRegSmileBeam style={sharedStyle} />
		case 'food_and_drink':
			return <IoFastFoodOutline style={sharedStyle} />
		case 'games':
			return <LuGamepad2 style={sharedStyle} />
		case 'home_and_appliances':
			return <IoHomeOutline style={sharedStyle} />
		case 'jewelry_and_bijouterie':
			return <IoDiamondOutline style={sharedStyle} />
		case 'tv':
			return <PiTelevisionLight style={sharedStyle} />
		case 'price':
			return <TbBrandCashapp style={sharedStyle} />
		case 'add_gift':
			return <IoCreateOutline style={sharedStyle} />
		case 'change':
			return <MdOutlineCreate style={sharedStyle} />
		case 'delete':
			return <MdDeleteOutline style={sharedStyle} />
		case 'users':
			return <AiOutlineUnorderedList style={sharedStyle} />
		case 'add_user':
			return <AiOutlineUserAdd style={sharedStyle} />
		case 'details':
			return <BiSolidUserDetail style={sharedStyle} />
		case 'cart':
			return <FaCartShopping style={sharedStyle} />
		case 'profile':
			return <CgProfile style={sharedStyle} />
		case 'gift':
			return <AiOutlineGift style={sharedStyle} />
		case 'gift_coins':
			return <PiHandCoins style={sharedStyle} />
		case 'choose':
			return <AiOutlineGift style={sharedStyle} />
		case 'remove':
			return <IoRemoveCircleOutline style={sharedStyle} />
		case 'cancel':
			return <AiOutlineClose style={sharedStyle} />
		case 'send':
			return <LuSend style={sharedStyle} />
		case 'order':
			return <AiOutlineShoppingCart />
		case 'suggestions':
			return <GoNote style={sharedStyle} />
		case 'status_of_delivery':
			return <CiDeliveryTruck style={sharedStyle} />
		case 'non_favourite':
			return <AiOutlineStar style={sharedStyle} />
		case 'favourite':
			return <AiFillStar />
		case 'attention':
			return <AiOutlineExclamation style={sharedStyle} />
		case 'error':
			return <BiError style={sharedStyle} />
		default:
			return <AiOutlineQuestion style={sharedStyle} />
	}
}

interface IconProps {
	category: string
	carousel?: boolean
	error?: boolean
	handleClick?: (arg: boolean) => void
	sharedStyle?: SharedInter
	value?: number | string | undefined
	visibility?: boolean
}

export const Icons: FC<IconProps> = ({
	category,
	sharedStyle,
	value,
	carousel,
	error,
	handleClick,
	visibility,
}): JSX.Element => {
	const getCategory = switchCat(category, sharedStyle)

	if (carousel || error) {
		return (
			<IconWrapper className="icon" style={{ width: `${error ? 'auto' : '10rem'}` }}>
				{getCategory}
			</IconWrapper>
		)
	}

	if (handleClick) {
		return (
			<IconWrapper className="icon" onClick={() => handleClick(!visibility)}>
				{getCategory} <SpanElement>{value ? value : convertSentence(category)}</SpanElement>
			</IconWrapper>
		)
	}

	if (value) {
		const newValue = convertSentence(value)
		return (
			<IconWrapper className="icon">
				{getCategory} <SpanElement>{newValue}</SpanElement>
			</IconWrapper>
		)
	}

	return <IconWrapper className="icon">{getCategory}</IconWrapper>
}
