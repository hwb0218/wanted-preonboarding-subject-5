import React from "react";
import styled, { css } from "styled-components";

const LoadingSpinner = () => {
  return <Spinner />;
};

const animation = css`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #f19022;
  border-bottom-color: #f19022;
  animation: spinner 0.8s ease infinite;
  ${animation};
`;

export default LoadingSpinner;
