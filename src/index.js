import React from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils"

const App = () => (
  <div>
    <div>
    <PrimaryButton> Hello World</PrimaryButton>
    <SecondaryButton> Goodbye World</SecondaryButton>
    <TertiaryButton> Hallo World</TertiaryButton>
    </div>
    <div>
    <PrimaryButton disabled> Hello World</PrimaryButton>
    <SecondaryButton disabled> Goodbye World</SecondaryButton>
    <TertiaryButton disabled> Hallo World</TertiaryButton>
    </div>
    <div>
    <PrimaryButton modifiers={["small", "error"]}> Hello World</PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}> Goodbye World</SecondaryButton>
    <TertiaryButton modifiers={["success", "tertiaryButtonSucces"]}s> Hallo World</TertiaryButton>
    </div>
    <GlobalStyle />
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));
