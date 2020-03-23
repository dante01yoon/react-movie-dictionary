import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components'; 
import { Theme } from 'theme/interface/theme';
import { colors } from './colors';

export const reactTheme: Theme<
	typeof colors
> = {
	colors
}

export const ReactThemeProvider: FC<{children: any}> = ({ children }) => (
	<ThemeProvider theme={reactTheme}>
		{children}
	</ThemeProvider>
);

