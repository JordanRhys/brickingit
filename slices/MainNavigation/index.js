import React from 'react';
import { shape, arrayOf, object, string } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import styled from 'styled-components';
import { Link } from '../../components/links';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: ${props => `${props.theme.spacings.sm} ${props.theme.spacings.md}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 4rem;
`

const LinksList = styled.ul`
  list-style: none;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.spacings.md};
  }
`

const Anchor = styled.a`

  :active,
  :link,
  :visited {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.md};
    letter-spacing: 1px;
  }
`

const MySlice = ({ slice }) => (
  <Nav>
    <Content>
      <Logo src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
      <LinksList>
        {
          slice.items.map(({ link, linkText }) => (
            <Link link={link} Component={Anchor} key={linkText}>{linkText}</Link>
          ))
        }
      </LinksList>
    </Content>
  </Nav>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      logo: imagePropType.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      link: object.isRequired,
      linkText: string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default MySlice;
