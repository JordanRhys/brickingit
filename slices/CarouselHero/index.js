import React from 'react';
import { shape, string, object, bool, arrayOf } from 'prop-types';
import { htmlSerializer } from '../../prismicKits';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import { PrimaryLinkButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import { Link } from '../../components/links';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import Carousel from '../../components/carousel';

const Image = styled.img`
  width: 100%;
  margin-bottom: ${props => props.theme.spacings.md};

  @media only screen and ${breakpoints.mdlg} {
    margin-bottom: 0;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const StyledFlexColumn = styled(FlexColumn)`
  margin-bottom: ${props => props.theme.spacings.sm};
`


const MySlice = ({ slice }) => {
  const { text, buttonLink, buttonText, position } = slice.primary;

  console.log('primary', slice.primary);

  return (
    <FlexRow reverse={position}>
      <FlexColumn as='div' withoutPadding centered>
        <Carousel withoutArrows>
          {
            slice.items.map(({image}) => (
              <ImageContainer key={image.url}>
                <Image src={image.url} alt={image.alt}/>
              </ImageContainer>
            ))
          }
        </Carousel>
      </FlexColumn>

      <StyledFlexColumn as='div' withoutPadding centered style={{ textAlign: 'center' }}>
        <RichText render={text} htmlSerializer={htmlSerializer} />

        {(buttonLink && buttonText) && (
          <Link link={buttonLink} Component={PrimaryLinkButton}>
            {buttonText}
          </Link>
        )}
      </StyledFlexColumn>
    </FlexRow>
  );
}

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType.isRequired,
      buttonLink: object,
      buttonText: string,
      position: bool.isRequired
    }).isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired
    })).isRequired
  }).isRequired,
};

export default MySlice;
