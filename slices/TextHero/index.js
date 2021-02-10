import React, { useState } from 'react';
import { shape, arrayOf, object, string, bool } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card, FullWidth } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const MySlice = ({ slice }) => (
  <FlexColumn>
    <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />
    <FlexRow withoutPadding>
      {
        slice.items.map(({ buttonLink, buttonText, color }) => (
          color ? (
            <PrimaryButton>{buttonText}</PrimaryButton>
          ) : (
            <SecondaryButton>{buttonText}</SecondaryButton>
          ))
        )
      }
    </FlexRow>
  </FlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      buttonLink: object.isRequired,
      buttonText: string.isRequired,
      color: bool.isRequired
    }))
  }).isRequired,
};

export default MySlice;
