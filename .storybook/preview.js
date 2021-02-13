import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/globals';
import { addDecorator } from '@storybook/react';
import { Outer } from '../components/containers';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Outer>
      {storyFn()}
    </Outer>
  </ThemeProvider>
)

addDecorator(ThemeDecorator);
