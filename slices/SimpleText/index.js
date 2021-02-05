import React from 'react';
import { array, shape } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';

const MySlice = ({ slice }) => (
  <FlexColumn>
    <RichText render={slice.primary.text} htmlSerializer={htmlSerializer}/>
  </FlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
