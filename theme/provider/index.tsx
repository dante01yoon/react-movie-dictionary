import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'; 
import { Theme } from 'theme/interface/theme';
import { reset } from 'styled-reset';
import { 
	colors,
	zIndex,
	viewPort,
} from 'theme';
export const reactTheme: Theme<
	typeof colors,
	typeof zIndex, 
	typeof viewPort
> = {
	colors,
	zIndex,
	viewPort
}

export const globalStyle = css`
	body {
		background-color: ${p => p.theme.colors.gray250};
		height: 100vh;
	}
	a, ul,li {
		text-decoration: none; 
		list-style: none; 
		color: black; 
	}
	${reset}
`;
const ReactGlobalStyle = createGlobalStyle`
	${globalStyle}
`;

export const ReactThemeProvider: FC<{children: any}> = ({ children }) => (
	<ThemeProvider theme={reactTheme}>
		<>
			<ReactGlobalStyle /> 
			{children}
		</>
	</ThemeProvider>
);
