import React from 'react';
import { arrayOf, shape, object } from 'prop-types';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { Link } from '../../components/links';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import contrastTheme from '../../styles/contrastTheme';
import { breakpoints } from '../../styles/breakpoints';

const Image = styled.img`
  max-height: 4rem;
  width: 8rem;
  line-height: 0;
  margin: ${props => props.theme.spacings.md};

  @media only screen and ${breakpoints.md} {
    max-height: 4.5rem;
    max-width: 9rem;
  }

  @media only screen and ${breakpoints.lg} {
    max-height: 5rem;
    max-width: 10rem;
  }
`

const Anchor = styled.a`
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrap = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -${props => props.theme.spacings.md};

  > * {
    margin: ${props => `
    ${props.theme.spacings.md}
    ${props.theme.spacings.sm}
    0
    ${props.theme.spacings.sm}
    ;`}
  }
`

const MySlice = ({ slice }) => (
  <ThemeProvider theme={slice.primary.contrast ? contrastTheme : theme}>
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
