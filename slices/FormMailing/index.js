import React, { useState } from 'react';
import { shape, string, func } from 'prop-types';
import { richTextPropType } from '../../helpers/slice-prop-types';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexColumn } from '../../components/containers';
import { Input } from '../../components/inputs';
import { PrimaryButton } from '../../components/buttons';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const Padding = styled(FlexColumn)`
  padding: ${props => `
    ${props.theme.spacings.lg}
    ${props.theme.spacings.md}
  `}
`

const MySlice = ({ slice }) => {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState({
    email: ''
  });

  const handleChange = (e) => setInput({
    ...input,
    [e.target.name]: e.target.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ email: '' });
    setSubmitted(true);
  }

  return (
    <Padding>
        <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />

        { submitted ? (
          <PrimaryButton as='span'>
            Subscribed
          </PrimaryButton>
        ) : (
          <Form handleSubmit={handleSubmit} handleChange={handleChange} data={input} />
        )}
    </Padding>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType,
      apiRoute: string.isRequired,
    }).isRequired,
  }).isRequired,
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }

  @media only screen and ${breakpoints.md} {
    width: 67%;
  }
`

const Form = ({ handleSubmit, handleChange, data }) => (
  <StyledForm onSubmit={(e) => handleSubmit(e)}>
    <Input
      onChange={handleChange}
      value={data.email}
      name='email'
      type='email'
      placeholder='Email Address'
    />
    <PrimaryButton>
      Subscribe
    </PrimaryButton>
  </StyledForm>
);

Form.propTypes = {
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  data: shape({
    email: string,
  }).isRequired,
}

export default MySlice;

