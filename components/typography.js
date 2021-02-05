import styled from 'styled-components';

export const Header = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${({ fontSize, theme: { fontSizes }}) => fontSize ? fontSizes[fontSize] : fontSizes.xl };
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${({ color, theme: { colors } }) => color ? color : colors.heading };
  margin: 0;
`

export const Body = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${({ fontSize, theme: { fontSizes }}) => fontSize ? fontSizes[fontSize] : fontSizes.sm };
  line-height: ${props => props.theme.lineHeights.body};
  color: ${({ color, theme: { colors } }) => color ? color : colors.body };
  margin: 0;
`
