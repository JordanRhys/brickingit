import styled from 'styled-components';
import { default as NextLink } from 'next/link';
import { linkResolver } from '../prismicKits';

const DefaultLink = styled.a`
  color: ${props => props.theme.colors.primary};
  // font-family: ${props => props.theme.fonts.body};
  // font-size: ${props => props.theme.fontSizes.sm};
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;
`

export const Link = ({link, Component, children}) => (
  Component ? (
    <NextLink href={linkResolver(link)} passHref>
      <Component>
        {children}
      </Component>
    </NextLink>
  ) : (
    <NextLink href={linkResolver(link)} passHref>
      <DefaultLink>
        {children}
      </DefaultLink>
    </NextLink>
  )
)
