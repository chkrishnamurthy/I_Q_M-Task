import React from "react";
import "./App.css";
import { GlobalStyle } from "./component/globalStyle";
import { Table } from "./component/Table";

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Table />
    </React.Fragment>
  );
};

export default App;
