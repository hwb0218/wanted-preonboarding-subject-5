import React from "react";
import styled from "styled-components";
import { getDate } from "../Utils/date";

const Timer = ({ region }) => {
  return <Wrapper>{getDate(region)}</Wrapper>;
};

const Wrapper = styled.div``;

export default Timer;
