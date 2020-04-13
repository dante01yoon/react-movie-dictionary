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
		background-color: ${p => p.theme.colors.white};
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
	html, body {
		@font-face {font-family: 'LatoLight';
    src: url('Lato-Light.eot'); /* IE9 Compat Modes */
    src: url('Lato-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('Lato-Light.woff') format('woff'), /* Modern Browsers */
         url('Lato-Light.ttf') format('truetype');
    font-style: normal;font-weight: normal;text-rendering: optimizeLegibility;
	}
	{ font-family: 'LatoLight', 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }
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
