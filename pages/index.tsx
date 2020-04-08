import React, { FC } from 'react'; 
import { observer } from 'mobx-react-lite';
import DefaultLaout from 'comp/Layout';
import { useStore } from 'store';

const ViewIndex: FC =  observer(() =>{
	const gnbVm = useStore('gnb')?.data;
	return(
	<>
		<DefaultLaout gnbVm={gnbVm}>
				this is default index 
		</DefaultLaout>
	</>
	)
}); 

export default ViewIndex;