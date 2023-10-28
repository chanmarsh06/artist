import React from "react";
import { BrowserRouter } from "react-router-dom";
import Task from "./components/Task";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Task />
      </BrowserRouter>
    </>
  );
};

export default App;
