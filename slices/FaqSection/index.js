import React, { useState } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { richTextPropType, imagePropType } from '../../helpers/slice-prop-types';
import { htmlSerializer, linkResolver } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import { FlexRow, FlexColumn } from '../../components/containers';
import styled, { keyframes } from 'styled-components';

const Image = styled.img`
  width: 100%;
  margin-right: ${props => props.theme.spacings.md};
`

const MySlice = ({ slice }) => {
  const { text, image } = slice.primary;

  return (
    <FlexRow width={image ? '100%' : '50%'}>
      { image ? (
        <FlexColumn as='div' withoutPadding>
          <Image src={image.url} alt={image.alt} />
        </FlexColumn>
      ) : null }
      <FlexColumn as='div' withoutPadding>
        <RichText render={text} htmlSerializer={htmlSerializer} />
        {
          slice.items.map(({question, answer}) =>
          (<QuestionDropdown question={question} answer={answer} key={question} />)
          )
        }
      </FlexColumn>
    </FlexRow>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType,
      image: imagePropType,
    }).isRequired,
    items: arrayOf(shape({
      question: string.isRequired,
      answer: richTextPropType.isRequired
    })).isRequired
  }).isRequired,
};

const Dropdown = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 5s;
  color: ${props => props.theme.colors.background};
  font-weight: 600;
`

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.fonts.body};
  padding: ${props => props.theme.spacings.sm} ${props => props.theme.spacings.md};
  cursor: pointer;
`

const DropdownAnimation = keyframes`
  from {
    transform: translateY(-2rem);
    opacity: .5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Answer = styled.div`
  padding: ${props => props.theme.spacings.sm} ${props => props.theme.spacings.md};
  overflow: hidden;
  && > * {
    color: ${props => props.theme.colors.background};
  }
  > * {
    animation: ${DropdownAnimation} .4s;
  }
`


const QuestionDropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown>
      <Question onClick={() => setOpen(!open)}>
        <p>{question}</p>
        <Icon open={open}/>
      </Question>
      {
        open ? (
          <Answer>
            <RichText render={answer} htmlSerializer={htmlSerializer}/>
          </Answer>
        ): null
      }
    </Dropdown>
  )
};

QuestionDropdown.propTypes = {
  question: string.isRequired,
  answer: richTextPropType.isRequired
};

const DropdownIcon = styled.div`
  width: 26px;
  position: relative;
  margin: ${props => `0 -${props.theme.spacings.sm} 0 ${props.theme.spacings.sm}`}
`

const LeftLine = styled.span`
  position: absolute;
  top: 9px;
  left: 0;
  width: 16px;
  height: 2px;
  background-color: ${props => props.theme.colors.background};
  display: block;
  transform: ${({ open }) => open ? 'translateX(7px) rotate(45deg)' : 'rotate(45deg)'};
  transition: all .3s ease-in-out;
`

const RightLine = styled.span`
  position: absolute;
  top: 9px;
  right: 0;
  width: 16px;
  height: 2px;
  background-color: ${props => props.theme.colors.background};
  display: block;
  transform: ${({ open }) => open ? 'translateX(-3px) rotate(135deg)' : 'rotate(135deg)'};
  transition: all .3s ease-in-out;
`

const Icon = ({ open }) => (
  <DropdownIcon>
    <LeftLine open={open} />
    <RightLine open={open} />
  </DropdownIcon>
);

export default MySlice;

