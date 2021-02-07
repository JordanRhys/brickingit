import React from 'react';
import { shape, string, object, bool } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { PrimaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  const { text, buttonLink, buttonText, image, position } = slice.primary;

  return (
    <FlexRow reverse={position}>
      <img src={image.url} alt={image.alt} />

      <FlexColumn as='div' withoutPadding centered>
        <RichText render={text} htmlSerializer={htmlSerializer} />

        {(buttonLink && buttonText) && (
          <PrimaryButton>
            {buttonText}
          </PrimaryButton>
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
