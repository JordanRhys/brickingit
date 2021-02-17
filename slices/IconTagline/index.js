import React from 'react';
import { shape, arrayOf, object, string } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { FlexRow } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { Header } from '../../components/typography';
import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import contrastTheme from '../../styles/contrastTheme';

const Column = styled.div`
  min-width: 200px;
  max-width: 300px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacings.md};
  margin-bottom: ${props => props.theme.spacings.md};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.sm};
  }

  @media only screen and ${breakpoints.md} {
    flex: 1;
    max-width: 50%;
    align-items: stretch;
    text-align: left;
    margin-bottom: 0;
  }
`

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  object-position: center;

  @media only screen and ${breakpoints.md} {
    object-position: left bottom;
  }
`

const Tagline = styled(Header)`
  font-size: ${props => props.theme.fontSizes.md};
  margin-top: ${props => props.theme.spacings.xs};
`

const MySlice = ({ slice }) => (
  <ThemeProvider theme={contrastTheme}>
    <FlexRow>
      {
        slice.items.map(({ icon, tagline, text }, index) => (
          <Column key={index}>
            <Icon src={icon.url} alt={icon.alt} />
            <Tagline as='span'>{tagline}</Tagline>
            <RichText render={text} htmlSerializer={htmlSerializer} />
          </Column>
        ))
      }
    </FlexRow>
  </ThemeProvider>
);

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      icon: imagePropType.isRequired,
      tagline: string.isRequired,
      text: richTextPropType.isRequired,
    })).isRequired,
  }).isRequired,
};

export default MySlice;
