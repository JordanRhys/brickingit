import React from 'react';
import { shape, arrayOf, object, string } from 'prop-types';
import { imagePropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow } from '../../components/containers';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
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
  height: 2rem;
`

const LinksList = styled.ul`
  list-style: none;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.spacings.md};
  }
`

const MySlice = ({ slice }) => (
  <Nav>
    <Content>
      <Logo src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
      <LinksList>
        {
          slice.items.map(({ link, linkText }) => (
            <a href={link}>{linkText}</a>
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