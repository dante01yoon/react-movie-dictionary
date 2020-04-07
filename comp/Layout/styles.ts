import styled, { css } from 'styled-components';
import React, { createContext } from 'react';

type MainProps = { isDarkMode: boolean; viewHeight?: string; }; 

const ReactLayout = styled.div<MainProps>`
	height: 100%;
	path { 
		fill: ${ p => (p.isDarkMode ? p.theme.colors.white : p.theme.colors.black)}
	}
	${ p => 
		p.isDarkMode &&
		css`
			color: ${p.theme.colors.white}
		`
	}
`;

const Main = styled.main<MainProps>`
	position:relative;
	margin: 0 auto;
	
`;
export const DarkLayoutContext = createContext<boolean>(false);
export const DefaultLayout: FC<{

}> = ({
	
})