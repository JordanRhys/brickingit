import React from 'react';
import { arrayOf, shape, object } from 'prop-types';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { Link } from '../../components/links';
import styled, { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';
import { breakpoints } from '../../styles/breakpoints';

const Image = styled.img`
  width: 100%;
  max-height: 3rem;
  flex: 1;
  line-height: 0;
  margin: 0 ${props => props.theme.spacings.md};
  object-fit: contain;

  @media only screen and ${breakpoints.md} {
    max-height: 4rem;
    max-width: 10rem;
  }
`

const Anchor = styled.a`
  line-height: 0;
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacings.md};
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacings.sm};

  > * {
    margin: ${props => `0 ${props.theme.spacings.sm};`}
  }
`

const MySlice = ({ slice }) => (
  <ThemeProvider theme={contrastTheme}>
    <FlexColumn>
      { slice.primary.text && (
        <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />
      )}
      <Wrap>
        {slice.items.map(({image, link}) => (
          link ? (
            <Link link={link} Component={Anchor} key={image.url}>
              <Image src={image.url} alt={image.alt} />
            </Link>
          ) : (
            <Image src={image.url} alt={image.alt} key={image.url} />
          )
        ))}
      </Wrap>
    </FlexColumn>
  </ThemeProvider>
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
