import React from "react";
import styled from "styled-components";

const Button = ({ error, handleStartSort }) => {
  return (
    <StyledButton onClick={handleStartSort} disabled={error}>
      버튼
    </StyledButton>
  );
};

const StyledButton = styled.button``;

export default Button;
