import React from 'react';
import styled from 'styled-components';
import TiDocumentAdd from 'react-icons/lib/ti/document-add';
import TiDocumentDelete from 'react-icons/lib/ti/document-delete';

import CardHeader from './cardHeader/CardHeader';
import Button from './button/Button';
import { colors } from '../../config/settings';

const StyledCard = styled.div`
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px ${colors.lightGrey};
  position: relative;

  $:hover {
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
  width: 100%;
  height: auto;
`;

const Price = styled.div`
  font-size: 2rem;
  padding: 1.5rem;
  color: ${colors.darkGrey  };
  text-align: center;
`;

const Card = ({ propertyData, handler, remove }) => {
  const { agency, mainImage, price } = propertyData;

  return (
    <StyledCard>
      <CardHeader logoSrc={agency.logo} brandColor={agency.brandingColors.primary} />
      <StyledImg src={mainImage} />
      <Price>{price}</Price>
      {!remove && <Button primary handler={handler}><TiDocumentAdd /> Save Property</Button>}
      {remove && <Button handler={handler}><TiDocumentDelete /> Remove Property</Button>}
    </StyledCard>
  );
};

export default Card;
