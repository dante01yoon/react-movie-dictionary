import { Theme, ThemeProvider } from 'styled-components';
import React, { FC } from 'react';

import { colors } from 'theme/colors';
import { grid } from 'theme/device'; 

export const jstarTheme: Theme<
    typeof colors,
    typeof grid
> =  {
    colors,
    grid
};

export const JstarThemeProvider: FC<{ children: any }> = ({children}) => (
    <ThemeProvider theme={jstarTheme}>
        <>
          {children}  
        </>
    </ThemeProvider>
)

