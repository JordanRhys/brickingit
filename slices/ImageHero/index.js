import React from 'react';
import { shape, string, object, bool } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { PrimaryLinkButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import { Link } from '../../components/links';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`


const MySlice = ({ slice }) => {
  const { text, buttonLink, buttonText, image, position } = slice.primary;

  return (
    <FlexRow reverse={position}>
      <FlexColumn as='div' withoutPadding centered>
        <Image src={image.url} alt={image.alt} />
      </FlexColumn>

      <FlexColumn as='div' withoutPadding centered>
        <RichText render={text} htmlSerializer={htmlSerializer} />

        {(buttonLink && buttonText) && (
          <Link link={buttonLink} Component={PrimaryLinkButton}>
            {buttonText}
          </Link>
        )}
      </FlexColumn>
    </FlexRow>
  );
}

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
      buttonLink: object,
      buttonText: string,
      image: imagePropType.isRequired,
      position: bool.isRequired
    }).isRequired,
  }).isRequired,
};

export default MySlice;
