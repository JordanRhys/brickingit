import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { htmlSerializer, linkResolver } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const BannerTemplate = styled.div`
  position: fixed;
  padding: ${props => props.theme.spacings.sm};
  background-color: ${props => props.theme.colors.muted};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 100;
`

const Banner = styled(BannerTemplate)`
  bottom: 0;
  ${({ position, theme }) => {
    switch(position) {
      case 'bottomLeft':
        return `
        width: 25%;
        left: 0;
        margin-left: ${theme.spacings.sm};
        `

      case 'bottomRight':
        return `
        width: 25%;
        right: 0;
        margin-right: ${theme.spacings.sm};
        `

      case 'bottom':
      default: {
        return `
        width: 98%;
        left: 0;
        right: 0;
        margin: 0 auto;

        @media only screen and ${breakpoints.lg} {
          width: 99%;
        }

        @media only screen and ${breakpoints.lg} {
          width: 1000px;
        }
        `
      }
    }
  }}
  margin-bottom: ${props => props.theme.spacings.sm};
`

const Padding = styled.div`
  padding: 0 ${props => props.theme.spacings.sm};
`

const CloseIcon = styled.button`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin-left: ${props => props.theme.spacings.sm};
  font-size: ${props => props.theme.fontSizes.lg};
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors.muted};
`

const MySlice = ({ slice }) => {
  const [open, setOpen] = useState(true);

  const { disclaimer, position } = slice.primary;

  const handleClick = () => {
    setOpen(false);
  }

  if (open) {
    return (
      <Banner position={position}>
        <Padding>
          <RichText render={disclaimer} linkResolver={linkResolver} htmlSerializer={htmlSerializer} />
        </Padding>
        <CloseIcon onClick={handleClick}>&#10005;</CloseIcon>
      </Banner>
    );
  } else {
    return null
  };
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      disclaimer: richTextPropType.isRequired,
      position: string.isRequired
    }).isRequired,
  }).isRequired,
};

export default MySlice;
