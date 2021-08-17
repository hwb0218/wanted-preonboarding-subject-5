import React from "react";
import styled from "styled-components";

const sortResult = ({ sortResult, isLoading }) => {
  return <Wrapper>{isLoading ? "정렬 중 입니다." : sortResult}</Wrapper>;
};
const Wrapper = styled.div``;
export default sortResult;
