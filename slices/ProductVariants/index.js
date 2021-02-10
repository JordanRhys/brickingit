import React, { useState } from 'react';
import { shape, arrayOf, object, string, number } from 'prop-types';
import { imagePropType, richTextPropType } from '../../helpers/slice-prop-types';
import { penceToPounds } from '../../helpers/currency';
import { FlexColumn, FlexRow, Card } from '../../components/containers';
import { htmlSerializer } from '../../prismicKits';
import { PrimaryButton, SmallPrimaryButton, SmallSecondaryButton } from '../../components/buttons';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`

const MySlice = ({ slice }) => {
  const [selected, setSelected] = useState(null);

  const { name, description, image, buttonLink, buttonText } = slice.primary;
  const { items } = slice;
  const priceArray = items.map(item => item.price);
  const lowestPriceIndex = priceArray.indexOf(Math.min(...priceArray));

  const selectedImage = items[selected]?.image ? items[selected].image : image;

  return (
    <FlexRow>
      <FlexColumn withoutPadding>
        <h1>{name}</h1>
        <RichText render={description} htmlSerializer={htmlSerializer} />
        <span>{
          selected === null ? `From ${penceToPounds(items[lowestPriceIndex].price)}` : `${penceToPounds(items[selected].price)}`
        }</span>

        <FlexRow withoutPadding>
          {
            items.map((item, index) => (
              index === selected ? (
                <SmallPrimaryButton
                  disabled
                  key={item.variant}
                >
                  {item.variant}
                </SmallPrimaryButton>
              ) : (
                <SmallSecondaryButton
                  key={item.variant}
                  onClick={() => setSelected(index)}
                >
                  {item.variant}
                </SmallSecondaryButton>
              )
            ))
          }
        </FlexRow>

        {
          selected ? (
            items[selected]?.description && (
              <RichText render={items[selected].description} htmlSerializer={htmlSerializer} />
            )
          ) : null
        }

        <PrimaryButton>Checkout</PrimaryButton>
      </FlexColumn>
      <FlexColumn withoutPadding>
        <Image src={selectedImage.url} alt={selectedImage.alt} />
      </FlexColumn>
    </FlexRow>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      name: richTextPropType.isRequired,
      description: richTextPropType,
      image: imagePropType.isRequired,
      buttonLink: object.isRequired,
      buttonText: string.isRequired,
    }).isRequired,
    items: arrayOf(shape({
      variant: string.isRequired,
      image: imagePropType,
      description: richTextPropType,
      price: number.isRequired,
    })).isRequired
  }).isRequired,
};

export default MySlice;
