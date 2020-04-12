import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { 
	DesParagraph
} from './style'; 
const SEContainer: FC<{

}> = observer(({

}) => {
	return(
		<>
			<DesParagraph>
				Megabox
			</DesParagraph>
			<DesParagraph>
				Seoul, South Korea
			</DesParagraph>
		</> 
	)
});

export default SEContainer; 