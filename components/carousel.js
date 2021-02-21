import react, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

const Window = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const Slider = styled.div`
  width: ${props => `${100 * props.length}%`};
  display: flex;
  flex-direction: row;
  transition: ${props => props.transition}
  transform: translateX(-${props => {
    let totalWidth = props.width;
    let imageWidth = totalWidth / props.length;
    let index = props.index;
    return imageWidth * index
  }}px);
`

const Icon = styled.button`
  position: absolute;
  top: 50%;
  width: 1rem;
  height: 26px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => props.theme.spacings.md};
  cursor: pointer;
  z-index: 10;
  border: none;
  background: none;

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

const NextIcon = styled(Icon)`
  right: 0;
  transform: translate(0rem,-50%) scale(1.5);
`


const PrevIcon = styled(Icon)`
  transform: translate(.25rem,-50%) rotate(-180deg) scale(1.5);
  left: 0;

  @media only screen and ${breakpoints.md} {
    transform: translateY(-50%) rotate(-180deg) scale(1.5);
  }
`

const Carousel = ({ auto = true, speed = 3000, withoutArrows, children }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const lastIndex = children.length ? children.length - 1 : null;
  const sliderRef = useRef(null);

  const defaults = {
    transitionSpeed: 500
  }

  let transition = `all ${defaults.transitionSpeed}ms;`

  useEffect(() => {
    if (!auto) return;
    if (lastIndex === null) return;

    const autoplay = setInterval(transitionSlide, speed);

    if (paused) {
      clearInterval(autoplay);
    }

    return () => clearInterval(autoplay);
  }, [index, paused])

  const transitionSlide = () => {
    let currentIndex = index;
    let nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
    setIndex(nextIndex);
  }

  const nextSlide = () => {
    let currentIndex = index;
    setIndex(currentIndex < lastIndex ? currentIndex + 1 : 0)
  }

  const prevSlide = () => {
    let currentIndex = index;
    setIndex(currentIndex > 0 ? currentIndex - 1 : lastIndex)
  }

  return (
    <Window>
      { withoutArrows ? null : (
        <>
        <NextIcon onClick={nextSlide}>
          <TopLine/>
          <BottomLine/>
        </NextIcon>
        <PrevIcon onClick={prevSlide}>
          <TopLine/>
          <BottomLine/>
        </PrevIcon>
        </>
      )}
      <Slider
        index={index}
        length={children.length || 0}
        width={sliderRef.current ? sliderRef.current.offsetWidth : 0}
        transition={transition}
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {children}
      </Slider>
    </Window>
  )
}

export default Carousel;
