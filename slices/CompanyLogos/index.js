import React from 'react';
import { arrayOf, shape, object } from 'prop-types';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { htmlSerializer, linkResolver, hrefResolver } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexColumn, FlexRow } from '../../components/containers';
import { Link } from '../../components/links';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const Image = styled.img`
  height: 4rem;
  line-height: 0;

  @media only screen and ${breakpoints.md} {
    height: 5rem;
  }

  @media only screen and ${breakpoints.lg} {
    height: 6rem;
  }
`

const Anchor = styled.a`
  line-height: 0;
`

const MySlice = ({ slice }) => (
  <FlexColumn>
    { slice.primary.text && (
      <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />
    )}
    <FlexRow as='div' withoutPadding={true}>
      {slice.items.map(({image, link}) => (
        link ? (
          <Link link={link} Component={Anchor}>
            <Image src={image.url} alt={image.alt} />
          </Link>
        ) : (
          <Image src={image.url} alt={image.alt} key={image.url} />
        )
      ))}
    </FlexRow>
  </FlexColumn>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType,
    }).isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      link: object
    })).isRequired,
  }).isRequired,
};

export default MySlice;
