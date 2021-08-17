import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";
import SortResult from "./Components/SortResult";
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
      <Timer region="ko-KR" />
      <Input {...{ handleInput, inputValue, error, handleKeyPress }} />
      <Button {...{ inputValue, handleSort, error, handleError, handleStartSort }} />
      <SortResult sortResult={sortResult.asc} />
      <SortResult sortResult={sortResult.desc} isLoading={isLoading} />
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
