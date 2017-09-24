import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/settings';

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.primary ?  colors.blue : colors.red};
  padding: 1.25rem 2.5rem;
  font-size: 1.25rem;
  border: none;
  opacity: 0;
  font-weight: bold;
  transition: all .3s ease .15s;
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
    opacity: 1;
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
