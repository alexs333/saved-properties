import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.primary ?  '#5085E2' : '#c4214c'};
  padding: 15px 32px;
  border: none;
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
  height: 130px;
  width: 100%;
`;

const Button = ({ children, primary, handler }) => (
  <Container>
    <StyledButton primary={primary} onClick={handler}>
      {children}
    </StyledButton>
  </Container>
)

export default Button;
