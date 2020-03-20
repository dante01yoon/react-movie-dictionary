import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components'; 

export const reactTheme = {

};

export const ReactThemeProvider: FC<{children: any}> = ({ children }) => (
	<ThemeProvider theme={reactTheme}>
		{children}
	</ThemeProvider>
);

