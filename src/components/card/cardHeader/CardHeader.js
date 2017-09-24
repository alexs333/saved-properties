import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
  background-color: ${props => props.brandColor ? props.brandColor : 'grey'};
  color: white;
  padding: 1.5rem;
  border-radius: 4px;
`;

const CardHeader = ({ logoSrc, brandColor }) => (
  <StyledCardHeader brandColor={brandColor}>
    <img src={logoSrc} alt="Agent Logo" />
  </StyledCardHeader>
);

export default CardHeader;
