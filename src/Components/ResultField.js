import React from "react";
import styled, { css } from "styled-components";

const ResultField = ({ sortResult, loader }) => {
  return (
    <StyledResultField sortResult={sortResult}>
      {sortResult}
      {loader}
    </StyledResultField>
  );
};

const StyledResultField = styled.div`
  position: relative;
  width: 60%;
  height: 30%;
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
