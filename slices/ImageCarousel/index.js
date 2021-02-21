import React from 'react';
import { shape, string, object, arrayOf } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import { Subtle } from '../../components/typography';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import Carousel from '../../components/carousel';

const Slide = styled.div`
  width: 100%;
`

const Img = styled.img`
  width: 100%;
`

const Caption = styled.span`
  width: 100%;
  height: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacings.xs};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MySlice = ({ slice }) => {

    return (
        <Carousel>
          {
            slice.items.map(({ image, caption }) => (
              <Slide key={image.url}>
                <Img src={image.url} alt={image.alt} />
                <Caption><Subtle>{caption}</Subtle></Caption>
              </Slide>
            ))
          }
        </Carousel>
    );
  };

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      caption: string,
    })).isRequired,
  }).isRequired,
};

export default MySlice;
