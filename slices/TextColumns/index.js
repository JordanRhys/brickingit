import React, { useState } from 'react';
import { shape, arrayOf, object, string, number } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card, FullWidth } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SmallPrimaryButton, SmallSecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const Column = styled.div`
  max-width: 50%;
  flex: 1;
  padding: 0 ${props => props.theme.spacings.sm};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }
  > p {
    text-align: justify;
  }
`

const MySlice = ({ slice }) => (
  <FlexRow>
    {
      slice.items.map(({ column }, index) => (
        <Column key={index}>
          <RichText render={column} htmlSerializer={htmlSerializer} />
        </Column>
      ))
    }
  </FlexRow>
);

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      column: richTextPropType.isRequired,
    })),
  }).isRequired,
};

export default MySlice;
