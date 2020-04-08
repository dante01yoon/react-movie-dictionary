import React, { FC, ReactNode } from 'react'; 
import LogoBlack from 'assets/logo/logo-black-resize.png'; 
import Head from 'next/head'; 
import Link from 'next/link'; 
import { GnbVm } from 'store/Gnb';
import GnbLogin from './Gnb/Login';
import {observer} from 'mobx-react-lite'; 
import {
	StyledNav,
	Main,
	StyledLogo,
	StyledRightMenu,
	StyledLogoBox
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
					<Link href="/">
						<a>
							<StyledLogo src={LogoBlack}/>
						</a>
					</Link>
				</StyledLogoBox>
				<StyledRightMenu>
					<GnbMenus gnbVm={gnbVm}/>
				</StyledRightMenu>
			</StyledNav>
			<Main>
					{children}
			</Main>
		</> 
	)
}); 

export default DefaultLayout; 