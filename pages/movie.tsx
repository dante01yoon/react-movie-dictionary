import React, { FC } from 'react';
import DefaultLayout from 'comp/Layout'; 
import { useStore } from 'store'; 
import Result from 'comp/Result'; 
const MovieView: FC<{}>= ()=> {
	const gnbVm = useStore('gnb')?.data;
	return (
		<> 
			<DefaultLayout gnbVm={gnbVm}>
				<Result leftData={'123'} rightData={'123'}/>
			</DefaultLayout>
		</>
	)
}

export default MovieView; 