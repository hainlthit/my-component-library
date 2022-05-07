import React from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils"

const App = () => (
  <div>
    <PrimaryButton> Hello World</PrimaryButton>
    <SecondaryButton> Goodbye World</SecondaryButton>
    <TertiaryButton> Hallo World</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));
