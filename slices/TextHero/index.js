import React from 'react';
import { shape, arrayOf, object, string, bool } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryLinkButton, SecondaryLinkButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import { Link } from '../../components/links';
import styled from 'styled-components';

const CenteredFlexColumn = styled(FlexColumn)`
  text-align: center;
`

const MySlice = ({ slice }) => (
  <CenteredFlexColumn>
    <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />
    <FlexRow as='div'>
      {
        slice.items.map(({ buttonLink, buttonText, color }) => (
          color ? (
            <Link link={buttonLink} Component={PrimaryLinkButton}>{buttonText}</Link>
          ) : (
            <Link link={buttonLink} Component={SecondaryLinkButton}>{buttonText}</Link>
          ))
        )
      }
    </FlexRow>
  </CenteredFlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      buttonLink: object.isRequired,
      buttonText: string.isRequired,
      color: bool.isRequired
    }))
  }).isRequired,
};

export default MySlice;
