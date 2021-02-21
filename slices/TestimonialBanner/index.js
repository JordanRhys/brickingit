import React from 'react';
import { shape, arrayOf, object, string } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { Header, Body } from '../../components/typography';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import Carousel from '../../components/carousel';

const Background = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
`

const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column-reverse;


  @media only screen and ${breakpoints.md} {
    flex-direction: row;
    height: auto;
  }
`

const HalfContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  object-fit: cover;
  color: ${props => props.theme.colors.background};
  ${({ padding, theme: { spacings }}) => padding ? `padding: ${spacings.md} ${spacings.lg};` : ''}
  > :not(img) {
    padding-left: ${props => props.theme.spacings.sm};
  }
  ${Header}, ${Body} {
    color: ${props => props.theme.colors.background};
  }

  @media only screen and ${breakpoints.md} {
    width: 50%;
    height: auto;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.75;
  object-fit: cover;
  line-height: 0;
`

const Name = styled.span`
  color: inherit;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.body};
  letter-spacing: ${props => props.theme.letterSpacings.body};
  font-weight: ${props => props.theme.fontWeights.body};
  margin-top: ${props => props.theme.spacings.md};
  font-style: italic;

`

const MySlice = ({ slice }) => {

  return (
      <Carousel auto={false}>
        {
          slice.items.map(({ image, name, text }) => (
          <Background key={name}>
            <Container>
              <HalfContainer padding>
                <RichText render={text} htmlSerializer={htmlSerializer} />
                <Name>{name}</Name>
              </HalfContainer>
              <HalfContainer>
                <Image src={image.url} alt={image.alt}/>
              </HalfContainer>
            </Container>
          </Background>
          ))
        }
      </Carousel>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: object.isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      name: string,
      text: richTextPropType.isRequired,
    })).isRequired
  }).isRequired,
};

export default MySlice;
