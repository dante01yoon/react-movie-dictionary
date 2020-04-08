import React, { FC, ReactNode } from 'react'; 
import LogoBlack from 'assets/logo/logo-black-resize.png'; 
import Head from 'next/head'; 
import AutoLink from 'comp/AutoLink';
import Footer from 'comp/Layout/Footer';
import { GnbVm } from 'store/Gnb';
import GnbLogin from './Gnb/Login';
import {observer} from 'mobx-react-lite'; 
import {
	StyledNav,
	Main,
	StyledLogo,
	StyledRightMenu,
	StyledLogoBox,
	EmptyMargin
} from './style'; 
import { GnbMenus } from './Gnb/Menus'; 
const DefaultLayout : FC<{
	gnbVm: GnbVm
	children: ReactNode
}> = observer(({
	gnbVm,
	children
}) => {
	return (
		<>
			<Head>
				<link key="manifest" rel="manifest" href="/manifest.json" />
			</Head>
			<StyledNav>
				<StyledLogoBox>
					<AutoLink href="/">
						<StyledLogo src={LogoBlack}/>
					</AutoLink>
				</StyledLogoBox>
				<StyledRightMenu>
					<GnbMenus gnbVm={gnbVm}/>
				</StyledRightMenu>
			</StyledNav>
			<EmptyMargin/>
			<Main>
					{children}
			</Main>
			<Footer/>
		</> 
	)
}); 

export default DefaultLayout; 