import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { FlexColumn, FlexRow, Card } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { RichText } from 'prismic-reactjs';
import styled, { ThemeProvider } from 'styled-components';
import contrastTheme from '../../styles/contrastTheme';
import theme from '../../styles/theme';

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`

const Name = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

const PaddedColumn = styled(FlexColumn)`
  padding-left: ${props => props.theme.spacings.md};
  padding-right: ${props => props.theme.spacings.md};
`

const MySlice = ({ slice }) => {
  const { primary, items } = slice;

  return (
    <ThemeProvider theme={contrastTheme}>
      <PaddedColumn>
        { primary.text && (<RichText render={primary.text} htmlSerializer={htmlSerializer} />)}

        <FlexRow as='div'>
          <ThemeProvider theme={theme}>
            {
              items.map(({ image, name, text }) => (
                <Card maxWidth='25%'>
                  <Image src={image.url} alt={image.alt} />
                  <Name>{name}</Name>
                  <RichText render={text} htmlSerializer={htmlSerializer} />
                </Card>
              ))
            }
          </ThemeProvider>
        </FlexRow>
      </PaddedColumn>
    </ThemeProvider>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: richTextPropType,
    }).isRequired,
    items: arrayOf(shape({
      image: imagePropType.isRequired,
      name: string.isRequired,
      text: richTextPropType.isRequired
    })).isRequired,
  }).isRequired,
};

export default MySlice;
