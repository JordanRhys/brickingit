import React, { useState } from 'react';
import { shape, arrayOf, object, string, bool } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card, FullWidth } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const Column = styled.div`
  max-width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }
`

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
`

const Tagline = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primary};
`

const MySlice = ({ slice }) => (
  <FlexRow>
    {
      slice.items.map(({ icon, tagline, text }, index) => (
        <Column key={index}>
          <Icon src={icon.url} alt={icon.alt} />
          <Tagline>{tagline}</Tagline>
          <RichText render={text} htmlSerializer={htmlSerializer} />
        </Column>
      ))
    }
  </FlexRow>
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
