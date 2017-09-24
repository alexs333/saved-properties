import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/settings';

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.primary ?  colors.blue : colors.red};
  padding: 15px 32px;
  border: none;
  display: none;
  font-weight: bold;
`;

const Container = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  &:hover > ${StyledButton} {
   display: block;
  }
`;

const Button = ({ children, primary, handler }) => (
  <Container>
    <StyledButton primary={primary} onClick={handler}>
      {children}
    </StyledButton>
  </Container>
)

export default Button;
