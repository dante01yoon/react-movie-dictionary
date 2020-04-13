import React, { FC } from 'react';
import {
	StyledSection
} from './style'
import ImgContainer from './ImgContainer';
import DesContainer from './DesContainer'; 
const Card: FC<{
	src: string
}> = ({
	src
}) => {
	return(
		<StyledSection>
			<ImgContainer src={'https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}/>
			<DesContainer/>
		</StyledSection>
	)
}

export default Card; 