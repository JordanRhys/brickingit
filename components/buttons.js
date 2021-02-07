import React from 'react';
import styled from 'styled-components';

const Template = styled.button`
  font-family: ${props => props.theme.fonts.heading};
  align-self: center;
  transition: all .5s;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
`

const RegularTemplate = styled(Template)`
  padding: ${props => `${props.theme.spacings.sm} ${props.theme.spacings.md}`};
  font-size: ${props => props.theme.fontSizes.md};
`

const SmallTemplate = styled(Template)`
padding: ${props => `${props.theme.spacings.xs} ${props.theme.spacings.sm}`};
`

export const PrimaryButton = styled(RegularTemplate)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
`

export const SecondaryButton = styled(RegularTemplate)`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
`
export const SmallPrimaryButton = styled(SmallTemplate)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
`

export const SmallSecondaryButton = styled(SmallTemplate)`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
`
