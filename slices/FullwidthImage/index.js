import React from 'react';
import { shape, string, } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn } from '../../components/containers';


const MySlice = ({ slice }) => (
  <FlexColumn>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt}/>

    { slice.primary.caption && (
      <span>{slice.primary.caption}</span>
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
