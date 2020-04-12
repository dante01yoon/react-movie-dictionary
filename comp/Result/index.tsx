import React, { FC } from 'react';
import {
	ResultContainer,
	LeftContainer,
	RightContainer  
} from './style'; 
import Card from 'comp/Card';

export const Result: FC<{
	leftData: string,
	rightData: string
}> = ({
	leftData,
	rightData
}) => {
	
	return (
		<ResultContainer>
			<LeftContainer>
				<Card />
			</LeftContainer>
			<RightContainer>

			</RightContainer>
		</ResultContainer>
	)
}

export default Result; 