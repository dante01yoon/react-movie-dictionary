import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'; 
import { Theme } from 'theme/interface/theme';
import { 
	colors,
	zIndex,
	viewPort,
	resetStyle
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
  ${resetStyle} // NOTE: Add global style you want under this.
  body {
		background-color: ${p => p.theme.colors.gray250};
		margin: 0px; 
    height: 100vh;
  }
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
