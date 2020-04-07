import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components'; 
import { Theme } from 'theme/interface/theme';
import { 
	colors,
	zIndex,
	viewPort
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

export const ReactThemeProvider: FC<{children: any}> = ({ children }) => (
	<ThemeProvider theme={reactTheme}>
		{children}
	</ThemeProvider>
);
