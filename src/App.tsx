import React from "react";
import styled from "styled-components";
import "./App.css";
import logo from "./logo.svg";

const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TomatoText>
            Edit <code>src/App.tsx</code> and save to reload.
          </TomatoText>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const TomatoText = styled.span`
  color: tomato;
`;

export default App;
