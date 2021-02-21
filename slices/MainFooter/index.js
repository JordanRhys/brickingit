import React from 'react';
import { shape, arrayOf } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { FlexColumn } from '../../components/containers';
import { RichText } from 'prismic-reactjs';
import styled, { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';
import { breakpoints } from '../../styles/breakpoints';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  > * {
    width: 100%;
  }

  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.sm};
  }
`

const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: row-wrap;
  padding: ${props => props.theme.spacings.sm};

  > * {
    padding: 0 ${props => props.theme.spacings.sm};
    width: 50%;
  }
`

const Legal = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
  padding: ${props => props.theme.spacings.md};

  @media only screen and ${breakpoints.lg} {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`

const MySlice = ({ slice }) => (
  <ThemeProvider theme={contrastTheme}>
    <FlexColumn as='div'>
      <Columns>
        {
          slice.items.map(({ column }, index) => (
            <Column key={index} withoutPadding>
              <RichText render={column} htmlSerializer={htmlSerializer} />
            </Column>
          ))
        }
      </Columns>
      <Legal>
        {RichText.asText(slice.primary.legal)}
      </Legal>
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
