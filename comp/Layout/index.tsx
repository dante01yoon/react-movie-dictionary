import React, { FC } from 'react'; 
import { GnbVm } from 'store/Gnb';
import GnbLogin from './Gnb/Login';
import {observer} from 'mobx-react-lite'; 
import {
	StyledNav
} from './style'; 


const DefaultLayout : FC<{
	gnbVm: GnbVm
}> = observer(({
	children, 
	gnbVm
}) => {
	return (
		<>
			<StyledNav>
				<GnbLogin gnbVm={gnbVm}/>
				{children}
			</StyledNav>
		</> 
	)
}); 

export default DefaultLayout; 