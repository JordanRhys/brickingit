import React, { useState } from 'react';
import { shape, arrayOf, object, string, number } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card, FullWidth } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SmallPrimaryButton, SmallSecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

const Background = styled.section`
  background-color: ${props => props.theme.colors.primary}
`

const HalfWidth = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  object-fit: cover;
  color: ${props => props.theme.colors.background};
  ${({ padding, theme: { spacings }}) => padding ? `padding: ${spacings.md} ${spacings.lg};` : ''}
  > * {
    padding-left: ${props => props.theme.spacings.sm};
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const Name = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: inherit;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: ${props => props.theme.lineHeights.heading};
`

const MySlice = ({ slice }) => {

  return (
      <Slider dots>
        {
          slice.items.map(({ image, name, text }) => (
          <Background>
            <FlexRow withoutPadding withoutMargin>
              <HalfWidth padding>
                <RichText render={text} htmlSerializer={htmlSerializer} />
              </HalfWidth>
              <HalfWidth>
                <Image src={image.url} alt={image.alt}/>
                <Name>{name}</Name>
              </HalfWidth>
            </FlexRow>
          </Background>
          ))
        }
      </Slider>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      name: string.isRequired,
      text: richTextPropType.isRequired,
    })).isRequired
  }).isRequired,
};

export default MySlice;
