import React from 'react';
import { shape, arrayOf, object, string, number } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const Caption = styled.span`
  position: absolute;
  top: 0;
  left: ${props => props.theme.spacings.md};
  right: ${props => props.theme.spacings.md};
  padding: ${props => props.theme.spacings.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacings.md};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  transform: translateY(-50%);
`

const Price = styled.span`
  font-size: ${props => props.theme.fontSizes.lg};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
`

const MySlice = ({ slice }) => {
  const { primary, items } = slice;

  const captions = items.map(item => item.caption);
  const containsCaption = captions.some(caption => caption.length);

  return (
    <FlexColumn>
      {
        primary.text && (
          <RichText render={primary.text} htmlSerializer={htmlSerializer} />
        )
      }

      {
        (primary.buttonLink && primary.buttonText) && (
          <PrimaryButton>{primary.buttonText}</PrimaryButton>
        )
      }

      <FlexRow as='div'>
        {
          items.map(item => (
            <Card key={item.title} extraPadding={containsCaption}>
              {item.caption && (
                <Caption>{item.caption}</Caption>
              )}
              <h4>{item.name}</h4>
              <Price>{penceToPounds(item.price)}</Price>
              <RichText render={item.description} htmlSerializer={htmlSerializer} />
                <PrimaryButton>{item.buttonText}</PrimaryButton>
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
      buttonLink: object,
      buttonText: string
    }).isRequired,
    items: arrayOf(shape({
      name: string.isRequired,
      caption: string,
      price: number.isRequired,
      description: richTextPropType.isRequired,
      buttonLink: object.isRequired,
      buttonText: string.isRequired
    })).isRequired
  }).isRequired,
};

export default MySlice;
