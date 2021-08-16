import React from "react";
import styled from "styled-components";

const Input = ({ handleInput, inputValue, error, handleKeyPress }) => {
  return (
    <Wrapper>
      <InputBox onKeyPress={handleKeyPress} onChange={(e) => handleInput(e)} value={inputValue} />
      {error && <span>입력양식을 지켜주세요!</span>}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  width: 200px;
  /* border: 1px solid black; */
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export default React.memo(Input);
