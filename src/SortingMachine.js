import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";
import ResultField from "./Components/ResultField";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { filterOnlyNum } from "./Utils/filterOnlyNum";
import { ASC, DESC } from "./Utils/constant";
import { sort } from "./Utils/sortNum";

const SortingMachine = () => {
  const [sortResult, setSortResult] = useState({
    asc: [],
    desc: [],
  });
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSort = (array) => setSortResult(array);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleStartSort();
    }
  };

  const handleStartSort = () => {
    setLoading(true);
    const result = filterOnlyNum(inputValue);
    handleSort((prev) => ({ ...prev, asc: sort(result, ASC) }));
    setTimeout(() => {
      handleSort((prev) => ({ ...prev, desc: sort(result, DESC) }));
      setLoading(false);
    }, 3000);
  };

  const handleInput = (e) => {
    setError(false);

    const { value } = e.target;
    if (value.length > 0 && value[value.length - 1] === "," && value[value.length - 2] === ",")
      return;

    if (filterOnlyNum(value).includes(NaN)) setError(true);
    setInputValue(value.replace(/[^0-9\,\-]/, ""));
  };

  const handleError = (boolean) => setError(boolean);
  return (
    <Container>
      <Wrapper>
        <Timer region="ko-KR" />
        <Input {...{ handleInput, inputValue, error, handleKeyPress }} />
        <Button {...{ inputValue, handleSort, error, handleError, handleStartSort }} />
        <ResultField sortResult={sortResult.asc} />
        <ResultField sortResult={sortResult.desc} isLoading={isLoading} />
        <Timer region="en-US" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  min-width: 550px;
  height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.color.darkmint};
  border-radius: 20px;
`;

export default SortingMachine;
