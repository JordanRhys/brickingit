import React from 'react';
import { shape, arrayOf } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { RichText } from 'prismic-reactjs';
import styled, { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';
import { breakpoints } from '../../styles/breakpoints';

const MinWidthColumn = styled(FlexColumn)`
  min-width: 200px;
  text-align: left;

  > * {
    width: 100%;
  }

  @media only screen and ${breakpoints.md} {
    min-width: 0;
  }
`

const MySlice = ({ slice }) => (
  <ThemeProvider theme={contrastTheme}>
    <FlexColumn>
      <FlexRow withoutPadding>
        {
          slice.items.map(({ column }, index) => (
            <MinWidthColumn key={index} withoutPadding>
              <RichText render={column} htmlSerializer={htmlSerializer} />
            </MinWidthColumn>
          ))
        }
      </FlexRow>
      <div style={{ textAlign: 'center' }}>
        <RichText render={slice.primary.legal} htmlSerializer={htmlSerializer} />
      </div>
    </FlexColumn>
  </ThemeProvider>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      legal: richTextPropType.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      column: richTextPropType.isRequired
    })).isRequired,
  }).isRequired,
};

export default MySlice;
