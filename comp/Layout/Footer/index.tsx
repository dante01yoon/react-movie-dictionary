import React, { FC } from 'react';
import LogoWhite from 'assets/logo/logo-white.png'; 
import {
	StyledFooter,
	StyledFooterItem,
	StyledFooterImg,
	StyledFooterItemColumn
} from './style';
const Footer: FC = () => {
	return (
		<StyledFooter>
			<StyledFooterItem>
				<StyledFooterImg src={LogoWhite}/>
			</StyledFooterItem>
			<StyledFooterItem>
				created by jaewonYoon
			</StyledFooterItem>
			<StyledFooterItem>
				<StyledFooterItemColumn>
				</StyledFooterItemColumn>
			</StyledFooterItem>
		</StyledFooter>
	)
}
export default Footer; 