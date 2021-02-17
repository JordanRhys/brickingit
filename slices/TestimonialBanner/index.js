import React from 'react';
import { shape, arrayOf, object, string } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { Header, Body } from '../../components/typography';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import 'infinite-react-carousel/lib/carousel/style.css';
import { breakpoints } from '../../styles/breakpoints';

const StyledSlider = styled(Slider)`
  .carousel-dots {
    display: none;
    pointer-events: none;

    * {
      display: none;
      pointer-events: none;
    }

    @media only screen and ${breakpoints.md} {
      display: inherit;
      pointer-events: all;

      * {
        display: inline-block;
        pointer-events: all;
      }

    }
  }
`

const Background = styled.section`
  background-color: ${props => props.theme.colors.primary};
  .carousel-dots {
    display: none;
  }
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
`

const Name = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: inherit;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: ${props => props.theme.lineHeights.heading};
  text-align: center;
`

const NextIcon = styled.button`
position: absolute;
top: 50%;
transform: translate(-.25rem,-50%) scale(1.5);
width: 1rem;
height: 26px;
color: white;
display: flex;
align-items: center;
justify-content: center;
padding: 0 ${props => props.theme.spacings.md};
cursor: pointer;

@media only screen and ${breakpoints.md} {
  transform: translateY(-50%);
}
`

const TopLine = styled.span`
position: absolute;
top: 0;
width: 2px;
height: 16px;
background-color: ${props => props.theme.colors.background};
transform: rotate(-45deg);
`
const BottomLine = styled.span`
position: absolute;
bottom: 0;
width: 2px;
height: 16px;
background-color: ${props => props.theme.colors.background};
transform: rotate(45deg);
`

const PrevIcon = styled(NextIcon)`
  transform: translate(.25rem,-50%) rotate(-180deg) scale(1.5);

  @media only screen and ${breakpoints.md} {
    transform: translateY(-50%) rotate(-180deg);
  }
`

const MySlice = ({ slice }) => {

  const settings = {
    dots: true,
    nextArrow: <NextIcon><TopLine/><BottomLine/></NextIcon>,
    prevArrow: <PrevIcon><TopLine/><BottomLine/></PrevIcon>
  }

  return (
      <StyledSlider {...settings}>
        {
          slice.items.map(({ image, name, text }) => (
          <Background>
            <Container>
              <HalfContainer padding>
                <RichText render={text} htmlSerializer={htmlSerializer} />
              </HalfContainer>
              <HalfContainer>
                <Image src={image.url} alt={image.alt}/>
                <Name>{name}</Name>
              </HalfContainer>
            </Container>
          </Background>
          ))
        }
      </StyledSlider>
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
