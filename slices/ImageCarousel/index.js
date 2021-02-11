import React from 'react';
import { shape, string, object, arrayOf } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import { Subtle } from '../../components/typography';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

const Slide = styled.div`
  width: 100%;
`

const Img = styled.img`
  width: 100%;
`

const Caption = styled.span`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSlider = styled(Slider)`
  color: ${props => props.theme.colors.body};
`

const MySlice = ({ slice }) => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
      <StyledSlider {...settings}>
        {
          slice.items.map(({ image, caption }) => (
            <Slide key={image.url}>
              <Img src={image.url} alt={image.alt} />
              <Caption><Subtle>{caption}</Subtle></Caption>
            </Slide>
          ))
        }
      </StyledSlider>
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
