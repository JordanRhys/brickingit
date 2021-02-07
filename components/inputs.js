import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacings.md};
  border-radius: ${props => props.theme.borderRadius.md};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacings.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.fonts.body};
  resize: none;
`
