import styled from 'styled-components';

export const Header = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${({ fontSize, theme: { fontSizes }}) => fontSize ? fontSizes[fontSize] : fontSizes.xl };
  font-weight: ${props => props.theme.fontWeights.heading};
  letter-spacing: ${props => props.theme.letterSpacings.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: inherit;
  margin: 0;
`

export const Body = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${({ fontSize, theme: { fontSizes }}) => fontSize ? fontSizes[fontSize] : fontSizes.sm };
  font-weight: ${props => props.theme.fontWeights.body};
  font-spacing: ${props => props.theme.letterSpacings.body};
  letter-height: ${props => props.theme.lineHeights.body};
  color: inherit;
  margin: 0;
`

export const Subtle = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${({ fontSize, theme: { fontSizes }}) => fontSize ? fontSizes[fontSize] : fontSizes.sm };
  line-height: ${props => props.theme.lineHeights.body};
  margin: 0;
  color: ${props => props.theme.colors.subtle};
`
