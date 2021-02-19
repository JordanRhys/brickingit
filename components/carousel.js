import react, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Window = styled.div`
  width: 100%;
  overflow: hidden;
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

const Carousel = ({ auto = true, speed = 3000, children }) => {
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

    const autoplay = setInterval(changeIndex, speed);

    if (paused) {
      clearInterval(autoplay);
    }

    return () => clearInterval(autoplay);
  }, [index, paused])

  const changeIndex = () => {
    transitionSlide()
  }

  const transitionSlide = () => {
    let currentIndex = index;
    let nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
    setIndex(nextIndex);
  }

  return (
    <Window>
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
