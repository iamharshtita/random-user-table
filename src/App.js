import logo from "./logo.svg";
import "./App.css";
import DataList from "./DataList";
import { useEffect, useState } from "react";
import Heading from "./Heading";
function App() {
  return (
    <div className="App">
      <Heading/>
      <DataList />
    </div>
  );
}

export default App;
