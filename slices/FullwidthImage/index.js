import React from 'react';
import { shape, string, } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn } from '../../components/containers';
import { Subtle } from '../../components/typography';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`

const MySlice = ({ slice }) => (
  <FlexColumn>
    <Image src={slice.primary.image.url} alt={slice.primary.image.alt}/>

    { slice.primary.caption && (
      <Subtle>{slice.primary.caption}</Subtle>
    )}
  </FlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      image: imagePropType.isRequired,
      caption: string
    }).isRequired,
  }).isRequired,
};

export default MySlice;
