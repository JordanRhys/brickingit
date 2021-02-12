import React, { useState } from 'react';
import { shape, arrayOf, object, string, number } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card, FullWidth } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SmallPrimaryButton, SmallSecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`

const Name = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

const MySlice = ({ slice }) => {
  const { primary, items } = slice;

  return (
    <FlexColumn>
      { primary.text && (<RichText render={primary.text} htmlSerializer={htmlSerializer} />)}

      <FlexRow as='div'>
        {
          items.map(({ image, name, text }) => (
            <Card maxWidth='25%'>
              <Image src={image.url} alt={image.alt} />
              <Name>{name}</Name>
              <RichText render={text} htmlSerializer={htmlSerializer} />
            </Card>
          ))
        }
      </FlexRow>
    </FlexColumn>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType,
    }).isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      name: string.isRequired,
      text: richTextPropType.isRequired
    })).isRequired,
  }).isRequired,
};

export default MySlice;
