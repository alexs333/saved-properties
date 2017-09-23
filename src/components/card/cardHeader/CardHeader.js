import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
  background-color: ${props => props.brandColor ? props.brandColor : 'grey'};
  color: white;
  padding: 10px;
`;

const CardHeader = ({ logoSrc, brandColor }) => (
  <StyledCardHeader brandColor={brandColor}>
    <img src={logoSrc} />
  </StyledCardHeader>
);

export default CardHeader;
