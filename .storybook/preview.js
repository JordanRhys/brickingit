import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { addDecorator } from '@storybook/react';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(ThemeDecorator);
