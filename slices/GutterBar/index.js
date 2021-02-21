import React from 'react';
import { string, shape, bool } from 'prop-types';
import styled from 'styled-components';

const Gutter = styled.div`
  width: 100%;
  height: ${({ gutter, theme }) => theme.spacings[gutter]};
  background-color: ${({ color, theme }) => color ? theme.colors.primary : theme.colors.background};
`

const MySlice = ({ slice }) => (
  <Gutter gutter={slice.primary.gutter} color={slice.primary.color} />
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      gutter: string.isRequired,
      color: bool.isRequired
    }).isRequired,
  }).isRequired,
};

export default MySlice;
