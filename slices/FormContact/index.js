import React, { useState } from 'react';
import { shape, string, func } from 'prop-types';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { htmlSerializer, linkResolver } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexRow, FlexColumn } from '../../components/containers';
import { Input, TextArea } from '../../components/inputs';
import { PrimaryButton } from '../../components/buttons';
import styled, { keyframes } from 'styled-components';

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
    <FlexColumn width='50%'>
      <RichText render={slice.primary.text} htmlSerializer={htmlSerializer} />

      { submitted ? (
        <PrimaryButton as='span'>
          Message Sent &#10004;
        </PrimaryButton>
      ) : (
        <Form handleSubmit={handleSubmit} handleChange={handleChange} data={input} />
      )}
    </FlexColumn>
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

const Form = ({ handleSubmit, handleChange, data }) => (
  <FlexColumn as='form' onSubmit={(e) => handleSubmit(e)}>
    <Input
      onChange={handleChange}
      value={data.email}
      name='email'
      type='email'
      placeholder='Email Address'
    />
    <TextArea
      onChange={handleChange}
      value={data.body}
      name='body'
      type='text'
      placeholder='Message'
      rows='5'
    />
    <PrimaryButton>
      Send Message
    </PrimaryButton>
  </FlexColumn>
);

Form.propTypes = {
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  data: shape({
    email: string,
    body: string
  }).isRequired,
}

export default MySlice;
