import React from 'react';
import { array, shape } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';

const MySlice = ({ slice, theme }) => (
  <ThemeProvider theme={slice.primary.contrast ? contrastTheme : theme}>
    <FlexColumn>
      <RichText render={slice.primary.text} htmlSerializer={htmlSerializer}/>
    </FlexColumn>
  </ThemeProvider>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
