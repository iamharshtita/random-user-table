import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import DataList from "./DataList";
import { useEffect, useState } from "react";
import Heading from "./Heading";
function App() {
  return (
    <div>
      <HashRouter >
        <div className="App">
          <Heading />
          <DataList />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
