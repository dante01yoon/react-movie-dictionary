import React, { FC } from 'react'; 
import { GnbVm } from 'store/Gnb';
import GnbLogin from './Gnb/Login';
import {observer} from 'mobx-react-lite'; 

const DefaultLayout : FC<{
	gnbVm: GnbVm
}> = observer(({
	children, 
	gnbVm
}) => {
	return (
		<>
			<GnbLogin gnbVm={gnbVm}/>
			{children}
		</> 
	)
}); 

export default DefaultLayout; 