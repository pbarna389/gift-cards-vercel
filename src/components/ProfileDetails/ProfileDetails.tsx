import type { FC } from 'react'

import PlaceholderProfile from '@assets/placeholderLogin.jpg'

import type { UserInter } from '../../@types/giftcards'
import {
	ProfileDetailsPicture,
	ProfileDetailsWrapper,
	ProfileGridWrapper,
	ProfilePictureWrapper,
} from './ProfileDetails.style'

export const ProfileDetails: FC<UserInter> = (props) => {
	const { coins, division, region, startedWorking, userName, profilePic, birthDay } = props

	if (props) {
		return (
			<ProfileDetailsWrapper>
				<ProfilePictureWrapper>
					<ProfileDetailsPicture
						src={`${profilePic ? profilePic : PlaceholderProfile}`}
						alt="profile picture"
					/>
				</ProfilePictureWrapper>
				<ProfileGridWrapper>
					<h2>Name: {userName}</h2>
					<h2>Coins: {coins}</h2>
					<h2>Birthday: {birthDay}</h2>
					<h2>Division: {division}</h2>
					<h2>Region: {region}</h2>
					<h2>Works since: {startedWorking}</h2>
				</ProfileGridWrapper>
			</ProfileDetailsWrapper>
		)
	}
}
