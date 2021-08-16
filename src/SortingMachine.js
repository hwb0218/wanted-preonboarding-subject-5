import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";
import SortResult from "./Components/SortResult";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { strToNum } from "./Utils/StrToNum";
import { ASC, DESC } from "./Utils/constant";
import { sort } from "./Utils/sortNum";

const SortingMachine = () => {
  const [sortResult, setSortResult] = useState({
    asc: [],
    desc: [],
  });
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
    const result = strToNum(inputValue);
    handleSort((prev) => ({ ...prev, asc: sort(result, ASC) }));
    setTimeout(() => {
      handleSort((prev) => ({ ...prev, desc: sort(result, DESC) }));
    }, 3000);
  };

  const handleInput = (e) => {
    setError(false);
    const {
      target: { value },
    } = e;

    if (value.length > 0 && value[value.length - 1] === "," && value[value.length - 2] === ",")
      return;
    console.log(value, strToNum(value));
    const checkValue = strToNum(value);
    if (checkValue.includes(NaN)) {
      setError(true);
    }
    setInputValue(value.replace(/[^0-9\,\-]|-{2,}/, ""));
  };

  const handleError = (boolean) => setError(boolean);
  return (
    <Container>
      <Timer region="ko-KR" />
      <Input {...{ handleInput, inputValue, error, handleKeyPress }} />
      <Button {...{ inputValue, handleSort, error, handleError, handleStartSort }} />
      <SortResult sortResult={sortResult.asc} />
      <SortResult sortResult={sortResult.desc} />
      <Timer region="en-US" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SortingMachine;
