import React from "react";
import styled from "styled-components";

const Button = ({ error, handleStartSort }) => {
  return (
    <StyledButton onClick={handleStartSort} disabled={error}>
      START🤗
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 10px;
  width: 60%;
  background-color: ${({ theme }) => theme.color.darkmint};
  border: none;
  border-radius: 2px;
  color: white;
  padding: 8px 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightmint};
  }
`;

export default Button;
