import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";

import App from "./App";
import ReduxWrapper from "./redux";
import { OpenCvProvider } from "opencv-react";

ReactDOM.render(
  <ReduxWrapper>
    <ThemeProvider theme={theme}>
      <OpenCvProvider>
        <Router basename="/">
          <App />
        </Router>
      </OpenCvProvider>
    </ThemeProvider>
  </ReduxWrapper>,
  document.getElementById("root")
);
