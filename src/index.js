import React from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton> Hello World</PrimaryButton>
    <SecondaryButton> Goodbye World</SecondaryButton>
    <TertiaryButton> Hallo World</TertiaryButton>
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));
