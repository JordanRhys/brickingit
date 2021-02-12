import React from 'react';
import styled, { css } from 'styled-components';

const ButtonTemplate = css`
  font-family: ${props => props.theme.fonts.heading};
  align-self: center;
  transition: all .5s;
  outline: none;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 2px solid ${props => props.theme.colors.primary};
  transition: all .5s;
  :not(span) {
    cursor: pointer;
  }
  :not(span):hover {
    transform: scale(1.05);
  }
`

// Colors
const PrimaryTemplate = css`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  :not(span):hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.muted};
  }
`

const SecondaryTemplate = css`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  :not(span):hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.muted};
  }
`

// Sizes
const RegularTemplate = css`
  padding: ${props => `${props.theme.spacings.sm} ${props.theme.spacings.md}`};
  font-size: ${props => props.theme.fontSizes.md};
`

const SmallTemplate = css`
  padding: ${props => `${props.theme.spacings.sm} ${props.theme.spacings.md}`};
  font-size: ${props => props.theme.fontSizes.sm};
`

// Links
const LinkTemplate = css`
  text-decoration: none;
`

// Regular Buttons
export const PrimaryButton = styled.button`
  ${ButtonTemplate}
  ${RegularTemplate}
  ${PrimaryTemplate}
`

export const SecondaryButton = styled.button`
  ${ButtonTemplate}
  ${RegularTemplate}
  ${SecondaryTemplate}
`

// Small Buttons
export const SmallPrimaryButton = styled.button`
  ${ButtonTemplate}
  ${SmallTemplate}
  ${PrimaryTemplate}
`

export const SmallSecondaryButton = styled.button`
  ${ButtonTemplate}
  ${SmallTemplate}
  ${SecondaryTemplate}
`

// Link Buttons
export const PrimaryLinkButton = styled.a`
  ${ButtonTemplate}
  ${RegularTemplate}
  ${PrimaryTemplate}
  ${LinkTemplate}
`

export const SecondaryLinkButton = styled.a`
  ${ButtonTemplate}
  ${RegularTemplate}
  ${SecondaryTemplate}
  ${LinkTemplate}
`
