import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/globals';
import { addDecorator } from '@storybook/react';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={{width: '1000px', margin: '0 auto'}}>
      {storyFn()}
    </div>
  </ThemeProvider>
)

addDecorator(ThemeDecorator);
