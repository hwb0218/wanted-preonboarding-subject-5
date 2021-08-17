import React from "react";
import styled, { css } from "styled-components";

const Input = ({ handleInput, inputValue, error, handleKeyPress }) => {
  return (
    <>
      <InputBox
        onKeyPress={handleKeyPress}
        onChange={(e) => handleInput(e)}
        value={inputValue}
        placeholder="데이터를 입력하세요"
        error={error}
      />
      {error && <ErrorMessage>입력양식을 지켜주세요</ErrorMessage>}
    </>
  );
};

const isError = css`
  ${({ error, theme }) =>
    error &&
    css`
      border-bottom: 1px solid ${theme.color.red};

      &::placeholder {
        color: ${theme.color.red};
      }
    `};
`;

const InputBox = styled.input`
  width: 60%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  ${isError};
  font-size: 1.3rem;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.darkmint};
    ${isError};
  }
`;
const ErrorMessage = styled.span`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.red};
  &::before {
    display: inline;
    content: "⛔ ";
  }
`;

export default React.memo(Input);
