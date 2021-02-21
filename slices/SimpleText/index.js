import React from 'react';
import { array, shape } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';
import styled from 'styled-components';

const PaddedColumn = styled(FlexColumn)`
  padding-left: ${props => props.theme.spacings.md};
  padding-right: ${props => props.theme.spacings.md};
`

const MySlice = ({ slice, theme }) => (
  <ThemeProvider theme={slice.primary.contrast ? contrastTheme : theme}>
    <PaddedColumn>
      <RichText render={slice.primary.text} htmlSerializer={htmlSerializer}/>
    </PaddedColumn>
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
