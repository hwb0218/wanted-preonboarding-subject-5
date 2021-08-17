import React from "react";
import ReactDOM from "react-dom";
import SortingMachine from "./SortingMachine";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Styles/Theme";

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={{ ...Theme }}>
      <SortingMachine />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
