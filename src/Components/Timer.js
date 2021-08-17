import React from "react";
import styled from "styled-components";
import { getDate } from "../Utils/date";

const Timer = ({ region }) => {
  return <StyledTimer>{getDate(region)}</StyledTimer>;
};

const StyledTimer = styled.div`
  display: inline-block;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkmint};
  color: ${({ theme }) => theme.color.fontWhite};

  &:first-child {
    position: absolute;
    top: 0;
    border-radius: 20px 20px 0 0;
  }

  &:last-child {
    position: absolute;
    bottom: 0;
    border-radius: 0 0 20px 20px;
  }
`;

export default Timer;
