import React from "react";
import styled, { css } from "styled-components";

const ResultField = ({ sortResult, isLoading }) => {
  return (
    <StyledResultField sortResult={sortResult}>
      {isLoading ? "정렬 중 입니다." : sortResult}
    </StyledResultField>
  );
};

const StyledResultField = styled.div`
  width: 60%;
  min-height: 5rem;
  max-height: 20%;
  border: 1px solid ${({ theme }) => theme.color.darkmint};
  word-break: break-all;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    ${({ sortResult }) =>
      sortResult.length > 0 &&
      css`
        -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
      `}
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.darkmint};
    overflow: hidden;
  }

  & + & {
    margin-top: 10px;
  }
`;

export default ResultField;
