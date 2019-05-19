import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import ParallaxContainer from "./ParallaxContainer";

/* Credit to Online Tutorials
  https://www.youtube.com/watch?v=dc4zyX6DuOc
*/

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* */}
      <ParallaxContainer style={{maxWidth: "800px"}} />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
