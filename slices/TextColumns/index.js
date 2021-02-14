import React from 'react';
import { shape, arrayOf, object } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { FlexRow } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const Column = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 ${props => props.theme.spacings.sm};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }

  @media only screen and ${breakpoints.smmd} {
    width: auto;
    max-width: 50%;
  }
`

const MySlice = ({ slice }) => (
  <FlexRow>
    {
      slice.items.map(({ column }, index) => (
        <Column key={index}>
          <RichText render={column} htmlSerializer={htmlSerializer} />
        </Column>
      ))
    }
  </FlexRow>
);

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      column: richTextPropType.isRequired,
    })),
  }).isRequired,
};

export default MySlice;
