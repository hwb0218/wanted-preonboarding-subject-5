import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";
import ResultField from "./Components/ResultField";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { filterOnlyNum } from "./Utils/filterOnlyNum";
import { ASC, DESC } from "./Utils/constant";
import { sort } from "./Utils/sortNum";
import useLoader from "./hooks/useLoader";

const SortingMachine = () => {
  const [loader, showLoader, hideLoader] = useLoader();
  const [sortResult, setSortResult] = useState({
    asc: [],
    desc: [],
  });

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSort = (array) => setSortResult(array);

  const handleKeyPress = (e) => {
    if (inputValue === "") return;
    if (e.key === "Enter") {
      e.preventDefault();
      handleStartSort();
    }
  };

  const handleStartSort = () => {
    showLoader();
    setInputValue("");

    const result = filterOnlyNum(inputValue);
    handleSort((prev) => ({ ...prev, asc: sort(result, ASC) }));
    setTimeout(() => {
      handleSort((prev) => ({ ...prev, desc: sort(result, DESC) }));
      hideLoader();
    }, 3000);
  };

  const handleChangeValue = (e) => {
    setError(false);
    const { value } = e.target;
    if (value.length > 0 && value[value.length - 1] === "," && value[value.length - 2] === ",")
      return;

    if (filterOnlyNum(value).includes(NaN)) setError(true);
    setInputValue(value.replace(/[^0-9\,\-]/, ""));
  };

  return (
    <Container>
      <Wrapper>
        <Timer region="ko-KR" />
        <Input {...{ handleChangeValue, inputValue, error, handleKeyPress }} />
        <Button {...{ error, handleStartSort, inputValue }} />
        <ResultField sortResult={sortResult.asc} />
        <ResultField sortResult={sortResult.desc} {...{ loader }} />
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
