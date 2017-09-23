import React from 'react';
import styled from 'styled-components';

import CardHeader from './cardHeader/CardHeader';

const StyledCard = styled.div`
  width: 300px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-bottom: 15px;

  :hover {
    opacity: 0.3;
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

const Card = ({ propertyData }) => {
  const { agency, mainImage, price } = propertyData;

  return (
    <StyledCard>
      <CardHeader logoSrc={agency.logo} brandColor={agency.brandingColors.primary} />
      <StyledImg src={mainImage} />
      <Price>{price}</Price>
    </StyledCard>
  );
};

export default Card;
