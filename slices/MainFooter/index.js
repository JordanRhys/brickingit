import React from 'react';
import { shape, arrayOf } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <FlexColumn>
    <FlexRow withoutPadding>
      {
        slice.items.map(({ column }, index) => (
          <FlexColumn key={index} withoutPadding>
            <RichText render={column} htmlSerializer={htmlSerializer} />
          </FlexColumn>
        ))
      }
    </FlexRow>
    <RichText render={slice.primary.legal} htmlSerializer={htmlSerializer} />
  </FlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      legal: richTextPropType.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      column: richTextPropType.isRequired
    })).isRequired,
  }).isRequired,
};

export default MySlice;
