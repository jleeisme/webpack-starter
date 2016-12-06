import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

ReactDOM.render(
  <Hello name="World" />,
  document.body//rendering components directly into the body is discouraged
);