import { LogoPic } from '@constants/index'
import { Container } from '@constants/styles'

import { FooterLink, FooterUl, ImgLogo, StyledFooter } from './Footer.style'

export const Footer = () => {
	return (
		<Container>
			<StyledFooter>
				<p>Footer</p>
				<ImgLogo src={LogoPic} alt="JS Team Logo" />
				<FooterUl>
					<li>
						<FooterLink to="/">Home</FooterLink>
					</li>
					<li>
						<FooterLink to="/coins">Coins</FooterLink>
					</li>
					<li>
						<FooterLink to="/profile">Profile</FooterLink>
					</li>
					<li>
						<FooterLink to="/gift-coins">Gift Coins</FooterLink>
					</li>
					<li>
						<FooterLink to="/suggestions">Suggest a gift</FooterLink>
					</li>
				</FooterUl>
			</StyledFooter>
		</Container>
	)
}
