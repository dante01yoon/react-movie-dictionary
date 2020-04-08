import React, { FC } from 'react';
import DefaultLayout from 'comp/Layout'; 
import { useStore } from 'store'; 
const MovieView: FC<{}>= ()=> {
	const gnbVm = useStore('gnb')?.data;
	return (
		<> 
			<DefaultLayout gnbVm={gnbVm}>
				This is MovieView 
			</DefaultLayout>
		</>
	)
}

export default MovieView; 