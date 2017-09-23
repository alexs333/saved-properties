import React from 'react';
import styled from 'styled-components';

import CardHeader from './cardHeader/CardHeader';
import Button from './button/Button';

const StyledCard = styled.div`
  width: 300px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px grey;
  position: relative;
  :hover {
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

const StyledImg = styled.img`
  width: 300px;
  height: auto;
`;

const Price = styled.div`
  font-size: 2rem;
  padding: 1rem;
  color: grey;
  text-align: center;
`

const Card = ({ propertyData, handler, remove }) => {
  const { agency, mainImage, price } = propertyData;

  return (
    <StyledCard>
      <CardHeader logoSrc={agency.logo} brandColor={agency.brandingColors.primary} />
      <StyledImg src={mainImage} />
      <Price>{price}</Price>
      {!remove && <Button primary handler={handler}>+ Save Property</Button>}
      {remove && <Button handler={handler}>- Remove Property</Button>}
    </StyledCard>
  );
};

export default Card;
